const form = document.getElementById("todoForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("todoList");

let todos = JSON.parse(localStorage.getItem("todos")) || [];
renderTodos();

// Add new task
form.addEventListener("submit", function(e) {
  e.preventDefault();
  const task = input.value.trim();
  if (task) {
    todos.push({ task: task, done: false });
    saveTodos();
    renderTodos();
    input.value = "";
  }
});

// Render tasks
function renderTodos() {
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = todo.task;
    if (todo.done) li.classList.add("done");

    li.addEventListener("click", () => {
      todos[index].done = !todos[index].done;
      saveTodos();
      renderTodos();
    });


    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      todos.splice(index, 1);
      saveTodos();
      renderTodos();
    });

    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

const completeBtn = document.getElementById("completeAll");
completeBtn.textContent = "Complete All";
completeBtn.addEventListener("click", (e) => {
  todos.forEach(todo => todo.done = true);
  saveTodos();
  renderTodos();
});

li.classList.add("done");
list.appendChild(li);



// Save tasks to localStorage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
