// IIFE
(function () {
  "use strict";

  /**
   * Represents the Todo object
   * @contructor
   */
  function Todo() {
    const addButton = document.querySelector(".addButton"),
      todoList = document.querySelector(".todoList"),
      input = document.querySelector("input");

    this.addListeners = function () {
      addButton.addEventListener("click", addButtonHandler);
    };

    function createListItem(text) {
      const listItem = document.createElement("li");

      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox"); // <input type='checkbox' />
      checkbox.addEventListener("click", checkboxHandler);
      listItem.appendChild(checkbox);

      const itemText = document.createTextNode(text);
      listItem.appendChild(itemText);

      // const checkbox = document.createElement('input');
      // checkbox.setAttribute('type', 'checkbox'); // <input type='checkbox' />
      // checkbox.addEventListener('click', checkboxHandler);
      // listItem.insertBefore(checkbox, listItem.firstChild); // itemText - listItem.firstChild

      const removeButton = document.createElement("button");
      removeButton.appendChild(document.createTextNode("X"));
      removeButton.classList.add("removeButton");
      removeButton.addEventListener("click", removeButtonHandler);
      listItem.appendChild(removeButton);

      return listItem;
    }

    function createAndAddElement(element) {}

    function addListItem(item) {
      todoList.appendChild(item);
    }

    function addButtonHandler() {
      const text = input.value;

      // early return - 1. način
      if (text === "") {
        return;
      }

      // if (text !== "") { - 2. način
      const item = createListItem(text);
      addListItem(item);

      input.value = "";
      console.log("Todo dodan");
      // }
    }

    function checkboxHandler(event) {
      const checked = event.target.checked; // true ili false

      if (checked) {
        event.target.parentNode.classList.add("done");
      } else {
        event.target.parentNode.classList.remove("done");
      }

      // event.target.parentNode.classList.toggle('done');
    }

    function removeButtonHandler(event) {
      event.target.parentNode.remove();
    }
  }

  Todo.prototype.init = function () {
    this.addListeners();
  };

  const todo = new Todo();

  window.onload = function () {
    todo.init();
  };
})();
