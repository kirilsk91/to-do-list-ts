import { renderInput } from "./components/TodoInput";
import { renderTodoList } from "./components/TodoList";
import { TodoItem } from "./types";

const todos: TodoItem[] = [
  {
    id: 1,
    text: "abca",
    isDone: false,
  },
  {
    id: 2,
    text: "asd121",
    isDone: false,
  },
  {
    id: 3,
    text: "fa4das",
    isDone: false,
  },
];

const appRoot = document.getElementById("app");

const headerElement = document.createElement("header");
headerElement.innerHTML = "<h1>To do list</h1>";

appRoot?.appendChild(headerElement);

const el = renderInput();
const ul = renderTodoList(todos);
appRoot?.append(el, ul);
