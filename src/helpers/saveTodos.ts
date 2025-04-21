import { TodoItem } from "../types";

export const saveTodoList = (todos: TodoItem[]): void => {
  localStorage.setItem("todoList", JSON.stringify(todos));
};
