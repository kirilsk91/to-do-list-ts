import { TodoItem } from "../types";

export const loadTodoList = (): TodoItem[] | [] => {
  const data = localStorage.getItem("todoList");
  return data ? JSON.parse(data) : [];
};
