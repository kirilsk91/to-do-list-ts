import { TodoItem } from "../types";

export const renderTodoList = (todoList: TodoItem[]): HTMLElement => {
  const ulElement = document.createElement("ul");
  const fragment = document.createDocumentFragment();

  todoList.forEach((todoItem: TodoItem): void => {
    const liElement = document.createElement("li");
    const checkboxElement = document.createElement("input");
    const spanElement = document.createElement("span");

    liElement.classList.add(
      "list-group-item",
      "d-flex",
      "align-items-center"
    );
    liElement.dataset.id = todoItem.id.toString();

    checkboxElement.type = "checkbox";
    checkboxElement.classList.add("form-check-input", "me-2");
    checkboxElement.checked = todoItem.isDone;

    spanElement.textContent = todoItem.text;

    liElement.append(checkboxElement, spanElement);
    fragment.appendChild(liElement);
  });

  ulElement.appendChild(fragment);
  return ulElement;
};
