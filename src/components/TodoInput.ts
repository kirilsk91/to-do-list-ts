// <form id="todo-form" class="input-group mb-3">
// <input type="text" id="todo-input" class="form-control" placeholder="Add a new task..." />
// <button type="submit" class="btn btn-primary">Add</button>
// </form>

export const renderInput = (): HTMLFormElement => {
  const formElement = document.createElement("form");
  formElement.classList.add("input-group", "mb-3");
  // formElement.id = "todo-form";

  const inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.id = "todo-input";
  // inputElement.name = "todo-input";
  inputElement.classList.add("form-control");
  inputElement.placeholder = "Add a new task...";

  const buttonElement = document.createElement("button");
  buttonElement.type = "submit";
  buttonElement.classList.add("btn", "btn-primary");
  buttonElement.textContent = "Add";

  formElement.append(inputElement, buttonElement);
  return formElement;
};
