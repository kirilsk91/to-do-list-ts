import { renderInput } from "./components/TodoInput";
import { renderTodoList } from "./components/TodoList";
import { TodoItem } from "./types";

const todos: TodoItem[] = [
  // {
  //   id: 1,
  //   text: "abca",
  //   isDone: false,
  // },
  // {
  //   id: 2,
  //   text: "asd121",
  //   isDone: false,
  // },
  // {
  //   id: 3,
  //   text: "fa4das",
  //   isDone: false,
  // },
];

const appRoot = document.getElementById("app");

const initialize = (
  appRoot: HTMLElement,
  todoList: TodoItem[]
): void => {
  const headerElement = document.createElement("header");
  const h1Element = document.createElement("h1");
  const inputElement = renderInput();
  const listElement = renderTodoList(todoList);

  h1Element.textContent = "To do list";

  headerElement.appendChild(h1Element);
  appRoot.append(headerElement, inputElement, listElement);

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

      const oldList = appRoot.querySelector("ul");
      if (oldList) {
        oldList.remove();
      }

      appRoot.appendChild(updatedTodoList);
      inputField.value = "";
    }
  };

  inputElement.addEventListener("submit", handleSubmit);
};

if (!appRoot) throw new Error("Root app element not found");
initialize(appRoot, todos);
