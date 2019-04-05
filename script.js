"use strict"

var addTodoButton = document.querySelector(".add-todo-btn");
var ul = document.querySelector("ul");

//Add todo with text taken from input and close button
addTodoButton.addEventListener("click", function() {
    var input = document.querySelector(".input-todo");
    var itemsList = document.querySelector('.items-list');
    if (input.value.trim()) {
        var todo = document.createElement('li');
        var todoText = document.createElement('span');
        var todoDelete = document.createElement('Button');

        todoText.classList.add('item-text');
        todoText.textContent = input.value;
        todoDelete.classList.add('delete-item');
        
        todo.appendChild(todoText);
        todo.appendChild(todoDelete);
        itemsList.insertBefore(todo, itemsList.firstChild);
        input.value ='';
    }
})


//Listeners for clicks on lis (toggle .done) and delete buttons
ul.addEventListener("click", function(event) {
    var target = event.target;
    if(target.tagName == 'LI') {
        target.classList.toggle("done");
    } 
    else if (target.classList.contains("item-text")) {
        target.parentElement.classList.toggle("done")
    }
    else if (target.classList.contains("delete-item")) {
        target.parentElement.remove();
    }
})
