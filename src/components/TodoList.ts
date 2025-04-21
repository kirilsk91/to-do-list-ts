import { saveTodoList } from "../helpers/saveTodos";
import { TodoItem } from "../types";

export const renderTodoList = (todoList: TodoItem[]): HTMLElement => {
  const ulElement = document.createElement("ul");
  const fragment = document.createDocumentFragment();
  ulElement.addEventListener("change", (event) => {
    const target = event.target as HTMLInputElement;

    if (target && target.type === "checkbox") {
      const li = target.parentElement;
      if (!li) return;

      const id: number = Number(li.dataset.id);
      //Finds correct todo item in a list
      const todo = todoList.find((t) => t.id === id);
      if (todo) {
        const li = target.closest("li");
        todo.isDone = target.checked;

        if (li) {
          li.classList.toggle("completed", todo.isDone);
        }
        saveTodoList(todoList);
      }
    }
  });

  todoList.forEach((todoItem: TodoItem): void => {
    const liElement = document.createElement("li");
    const checkboxElement = document.createElement("input");
    const textContentDivElement = document.createElement("div");

    if (todoItem && todoItem.isDone) {
      liElement.classList.add("completed");
    }

    liElement.classList.add("list-group-item", "d-flex", "mb-2");
    liElement.dataset.id = todoItem.id.toString();

    checkboxElement.type = "checkbox";
    checkboxElement.classList.add("form-check-input", "me-2");
    checkboxElement.checked = todoItem.isDone;

    textContentDivElement.textContent = todoItem.text;
    textContentDivElement.classList.add("text-content-div-element");

    liElement.append(checkboxElement, textContentDivElement);
    fragment.appendChild(liElement);
  });

  ulElement.appendChild(fragment);
  return ulElement;
};
