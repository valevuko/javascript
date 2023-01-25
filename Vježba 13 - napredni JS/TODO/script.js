// IIFE
(function () {
  "use strict";

  const input = document.getElementsByTagName("input")[0];
  const button = document.getElementsByClassName("addButton")[0];
  const ul = document.getElementsByClassName("todoList")[0];

  const todos = [];

  function Todo(text) {
    // konstruktor funkcija
    this.text = text;
    this.completed = false;
  }

  button.addEventListener("click", function () {
    const text = input.value;

    if (text === "") return;

    const todo = new Todo(text);
    todos.push(todo);

    addTodo(todo);
    input.value = "";
  });

  function addTodo(todo) {
    const liNode = createItem(todo);
    ul.appendChild(liNode);
  }

  function createItem(todo) {
    const liNode = document.createElement("li");

    const randomId = `id-${Math.floor(Math.random() * 1000000)}`;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = randomId;

    const label = document.createElement("label");
    label.textContent = todo.text;
    label.htmlFor = randomId;

    const button = document.createElement("button");
    button.textContent = "X";
    button.className = "removeButton";

    liNode.appendChild(checkbox);
    liNode.appendChild(label);
    liNode.appendChild(button);

    return liNode;
  }
})();
