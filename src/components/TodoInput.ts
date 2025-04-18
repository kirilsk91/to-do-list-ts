// <form id="todo-form" class="input-group mb-3">
// <input type="text" id="todo-input" class="form-control" placeholder="Add a new task..." />
// <button type="submit" class="btn btn-primary">Add</button>
// </form>

export const renderInput = (): HTMLFormElement => {
  const formElement = document.createElement("form");

  formElement.classList.add("input-group", "mb-3");
  formElement.id = "todo-form";

  formElement.innerHTML = `
  <input type="text" id="todo-input" class="form-control" placeholder="Add a new task..." />
  <button type="submit" class="btn btn-primary">Add</button>
  `;

  return formElement;
};
