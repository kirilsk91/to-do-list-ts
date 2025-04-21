import { renderInput } from "./components/TodoInput";
import { renderTodoList } from "./components/TodoList";
import { loadTodoList } from "./helpers/getTodos";
import { saveTodoList } from "./helpers/saveTodos";
import { TodoItem } from "./types";

let todos: TodoItem[] = loadTodoList();

const appRoot = document.getElementById("app");

const initialize = (
  appRoot: HTMLElement,
  todoList: TodoItem[]
): void => {
  const headerElement = document.createElement("header");
  const h1Element = document.createElement("h1");
  const inputElement = renderInput();
  const labelElement = document.createElement("label");
  const listElement = renderTodoList(todoList);

  // <label for="todo-input" class="form-label">Notes:</label>
  labelElement.htmlFor = "todo-input";
  labelElement.classList.add("form-label");
  labelElement.innerText = "Notes:";

  appRoot.classList.add("col-3");

  h1Element.textContent = "Tasks";

  headerElement.appendChild(h1Element);
  appRoot.append(
    headerElement,
    labelElement,
    inputElement,
    listElement
  );

  // Handle adding tasks
  const handleSubmit = (event: Event): void => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const inputField = form.querySelector(
      "#todo-input"
    ) as HTMLInputElement;
    // Trim to avoid whitespace ans input
    const taskText = inputField.value.trim();

    if (taskText && taskText.length > 0) {
      const newTask: TodoItem = {
        id: Date.now(),
        text: taskText,
        isDone: false,
      };

      todos.push(newTask);
      const updatedTodoList: HTMLElement = renderTodoList(todos);

      // Remove ol <ul> before placing a new one
      const oldList = appRoot.querySelector("ul");
      if (oldList) {
        oldList.remove();
      }

      appRoot.appendChild(updatedTodoList);
      saveTodoList(todos);
      inputField.value = "";
    }
  };

  inputElement.addEventListener("submit", handleSubmit);
};

if (!appRoot) throw new Error("Root app element not found");
initialize(appRoot, todos);
