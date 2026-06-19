// Your todo list — this is where all todos live
let todos = [];
let nextId = 1;

// Add your functions below

// 1. addTodo
function addTodo(title, description) {
  const newTodo = {
    id: nextId,
    title: title,
    description: description,
    status: "pending"
  };

  todos.push(newTodo);
  nextId++;

  console.log(`Todo added: ${title}`);
}

// 2. listTodos
function listTodos() {
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    console.log(`[${todo.id}] ${todo.title} — ${todo.status}`);
    console.log(`    ${todo.description}`);
  }
}

// 3. updateTodo
function updateTodo(id, newTitle, newDescription) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos[i].title = newTitle;
      todos[i].description = newDescription;
      console.log(`Todo ${id} updated.`);
      return;
    }
  }

  console.log("Todo not found.");
}

// 4. changeStatus
function changeStatus(id, newStatus) {
  const validStatuses = ["pending", "in-progress", "done"];

  if (!validStatuses.includes(newStatus)) {
    console.log("Invalid status.");
    return;
  }

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos[i].status = newStatus;
      console.log(`Status updated to ${newStatus}.`);
      return;
    }
  }

  console.log("Todo not found.");
}

// 5. deleteTodo
function deleteTodo(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      todos.splice(i, 1);
      console.log(`Todo ${id} deleted.`);
      return;
    }
  }

  console.log("Todo not found.");
}

// 6. filterByStatus
function filterByStatus(status) {
  const matches = todos.filter(todo => todo.status === status);

  if (matches.length === 0) {
    console.log(`No todos with status: ${status}`);
    return;
  }

  for (let i = 0; i < matches.length; i++) {
    const todo = matches[i];
    console.log(`[${todo.id}] ${todo.title} — ${todo.status}`);
    console.log(`    ${todo.description}`);
  }
}

// ----------------------
// Test Your Code
// ----------------------

// 1. Add some todos
addTodo("Buy groceries", "Milk, eggs, bread");
addTodo("Read a book", "Finish chapter 3");
addTodo("Go for a run", "30 minutes");

// 2. List all
listTodos();

// 3. Update one
updateTodo(1, "Buy groceries", "Milk, eggs, bread, butter");

// 4. Change statuses
changeStatus(1, "in-progress");
changeStatus(2, "done");

// 5. Filter
filterByStatus("done");
filterByStatus("pending");

// 6. Delete one
deleteTodo(3);

// 7. List again to confirm
listTodos();
