interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

const form = document.querySelector("#todo-form") as HTMLFormElement;
const input = document.querySelector(
  "#todo-input"
) as HTMLInputElement;
const list = document.querySelector("#todo-list") as HTMLUListElement;

let todos: Todo[] = loadTodos();
renderTodos();

// Event listener for adding a new to-do
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = input.value.trim();
  if (task === "") return;

  const newTodo: Todo = { id: Date.now(), task, completed: false };
  todos.push(newTodo);
  saveTodos();
  renderTodos();
  input.value = "";
});

// Render the to-do list
function renderTodos() {
  list.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex align-items-center";
    li.dataset.id = todo.id.toString();

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input me-2";
    checkbox.checked = todo.completed;
    checkbox.addEventListener("change", () => {
      todo.completed = checkbox.checked;
      saveTodos();
      renderTodos();
    });

    const span = document.createElement("span");
    span.textContent = todo.task;
    if (todo.completed)
      span.classList.add(
        "text-decoration-line-through",
        "text-muted"
      );

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-sm btn-danger ms-auto";
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", () => {
      todos = todos.filter((t) => t.id !== todo.id);
      saveTodos();
      renderTodos();
    });

    li.append(checkbox, span, deleteBtn);
    list.appendChild(li);
  });

  // enableDragAndDrop();
}

// Enable sorting with Sortable.js
// function enableDragAndDrop() {
//   Sortable.create(list, {
//     animation: 150,
//     onEnd: (evt) => {
//       const movedItem = todos.splice(evt.oldIndex!, 1)[0];
//       todos.splice(evt.newIndex!, 0, movedItem);
//       saveTodos();
//     },
//   });
// }

// Save and load functions
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos(): Todo[] {
  const data = localStorage.getItem("todos");
  return data ? JSON.parse(data) : [];
}
