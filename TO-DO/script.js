const func = function () {
  "use strict";

  const input = document.getElementById("input");
  const addButton = document.getElementsByClassName("addButton")[0];
  const ul = document.getElementsByClassName("todoList")[0];

  const all = document.getElementById("all");
  const active = document.getElementById("active");
  const completed = document.getElementById("completed");

  let status = "all";
  all.onclick = function () {
    status = "all";
    renderTodos(getFilteredTodos()); // do not repeat yourself
  };
  active.onclick = function () {
    status = "active";
    renderTodos(getFilteredTodos());
  };
  completed.onclick = function () {
    status = "completed";
    renderTodos(getFilteredTodos());
  };

  const todos = []; // svi todo-ovi, dovršeni i nedovršeni (ali ne i obrisani)

  /**
   * Represents a todo
   * @constructor
   * @param {string} text
   */
  function Todo(text) {
    // konstruktor funkcija
    const randomId = `id-${Math.floor(Math.random() * 1000000)}`;
    this.text = text;
    this.completed = false;
    this.id = randomId;
  }

  //   Todo.prototype.setText = function(text) {
  // 	return this.text = text;
  //   }

  addButton.addEventListener("click", function () {
    const text = input.value;

    if (text === "") return;

    const todo = new Todo(text); // ili { text: text, completed: flase };
    todos.push(todo);

    renderTodos(getFilteredTodos());
    input.value = "";
  });

  /**
   * Renders todos
   * @param {[]} todosByStatus todos that are filtered by status
   */
  function renderTodos(todosByStatus) {
    // for (let i = 0; i < todos.length; i++) { todos[i] }
    ul.innerHTML = "";
    todosByStatus.forEach((todo) => {
      const liNode = createItem(todo);
      ul.appendChild(liNode);
    });
  }

  function createItem(todo) {
    const liNode = document.createElement("li");
    setDone(todo, liNode);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = todo.id;
    checkbox.checked = todo.completed;
    checkbox.onclick = function () {
      todo.completed = !todo.completed;
      setDone(todo, liNode);
    };

    const label = document.createElement("label");
    label.textContent = todo.text;
    label.htmlFor = todo.id;

    const button = document.createElement("button");
    button.textContent = "X";
    button.className = "removeButton";
    button.onclick = function () {
      removeTodo(todo.id);
    };

    liNode.appendChild(checkbox);
    liNode.appendChild(label);
    liNode.appendChild(button);

    return liNode;
  }

  function setDone(todo, liNode) {
    if (todo.completed) {
      liNode.classList.add("done");
    } else {
      liNode.classList.remove("done");
    }
  }

  function removeTodo(id) {
    const index = todos.findIndex((todo) => todo.id === id);
    todos.splice(index, 1);
    // todos = todos.filter((todo) => {
    //   return todo.id !== id;
    // });

    renderTodos(getFilteredTodos());
  }

  function getFilteredTodos() {
    if (status === "all") {
      return todos;
    } else if (status === "active") {
      return todos.filter((todo) => !todo.completed);
    } else if (status === "completed") {
      return todos.filter((todo) => todo.completed);
    }
  }
};

window.onload = function () {
  func();
};
