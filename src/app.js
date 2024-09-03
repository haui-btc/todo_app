const todoForm = document.querySelector("form");
const todoInput = document.getElementById("todo-input");
const todoListUL = document.getElementById("todo-list");

let allTodos = getTodos();
updateTodoList();

todoForm.addEventListener("submit", function (e) {
  e.preventDefault(); //prevent page from reloading automatically
  addTodo();
});

function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText.length > 0) {
    // create an object to remember if an item was checked or not
    const todoObject = {
      text: todoText,
      completed: false,
    };
    allTodos.push(todoObject);
    updateTodoList();
    saveTodos();
    todoInput.value = ""; // Clear the input field after adding the todo
  } else {
    alert("Give me some notes!");
  }
}

function updateTodoList() {
  todoListUL.innerHTML = ""; //clear the unordered list
  allTodos.forEach((todo, todoIndex) => {
    todoItem = createTodoItem(todo, todoIndex);
    todoListUL.append(todoItem);
  });
}

function createTodoItem(todo, todoIndex) {
  const todoId = "todo-" + todoIndex;
  const todoLI = document.createElement("li");
  // enter the text property from the todoObject
  const todoText = todo.text;
  todoLI.className = "todo";
  todoLI.innerHTML = `
        <input type="checkbox" id="${todoId}" />
          <label for="${todoId}" class="custom-checkbox">
            <svg
              fill="transparent"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
            </svg>
          </label>
          <label for="${todoId}" class="todo-text">
            ${todoText}
          </label>
          <button class="delete-button">
            <svg
              fill="var(--secondary-color)"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path
                d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"
              />
            </svg>
          </button>`;
  // access the delete icon button
  const deleteButton = todoLI.querySelector(".delete-button");
  deleteButton.addEventListener("click", () => {
    deleteTodoItem(todoIndex);
  });
  // add event listener to save todo status
  const checkbox = todoLI.querySelector("input");
  checkbox.addEventListener("change", () => {
    allTodos[todoIndex].completed = checkbox.checked;
    saveTodos();
  });
  checkbox.checked = todo.completed;
  return todoLI;
}

// save notes in local storage (only strings can be stored > therefore convert array into json string)
function saveTodos() {
  const todoJson = JSON.stringify(allTodos);
  localStorage.setItem("todos", todoJson);
}

// load local storage
function getTodos() {
  const todos = localStorage.getItem("todos") || "[]";
  return JSON.parse(todos);
}

function deleteTodoItem(todoIndex) {
  //overwrite allTodos array by filtering it
  allTodos = allTodos.filter((_, i) => i !== todoIndex);
  saveTodos();
  updateTodoList();
}
