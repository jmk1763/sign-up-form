let nameIdEl = document.getElementById("nameId");
let numberIdEl = document.getElementById("numberId");
let emailIdEl = document.getElementById("emailId");
let skillsIdEl = document.getElementById("skillsId");
let addButtonEl = document.getElementById("addButton");
let itemContainerEl = document.getElementById("itemContainer");
let signupBtnEl = document.getElementById("signupBtn")

function onDeleteTodo(todoId) {
    let todoElement = document.getElementById(todoId);
    itemContainerEl.removeChild(todoElement);

    let deleteElementIndex = todoList.findIndex(function(eachTodo) {
        let eachTodoId = "todo" + eachTodo.uniqueNo;
        if (eachTodoId === todoId) {
            return true;
        } else {
            return false;
        }
    });

    todoList.splice(deleteElementIndex, 1);
}


addButtonEl.onclick = function() {
    let todoList = [{
            text: "HTML",
            uniqueNo: 1


        },

    ];

    let todosCount = todoList.length;

    let userInputElement = document.getElementById("skillsId");
    let userInputValue = userInputElement.value;

    if (userInputValue === "") {
        alert("Enter Valid Text");
        return;
    }

    todosCount = todosCount + 1;

    let newTodo = {
        text: userInputValue,
        uniqueNo: todosCount
    };

    createAndAppendTodo(newTodo);
    userInputElement.value = "";



    function createAndAppendTodo(todo) {
        let todoId = 'todo' + todo.uniqueNo;
        let labelId = 'label' + todo.uniqueNo;

        let todoElement = document.createElement("li");
        todoElement.classList.add("skill-container", "d-flex", "flex-row");
        todoElement.id = todoId;
        itemContainerEl.appendChild(todoElement);

        let labelContainer = document.createElement("div");
        labelContainer.classList.add("label-container", "d-flex", "flex-row");
        todoElement.appendChild(labelContainer);

        let labelElement = document.createElement("label");
        labelElement.id = labelId;
        labelElement.classList.add("checkbox-label");
        labelElement.textContent = todo.text;
        labelContainer.appendChild(labelElement);

        let deleteIconContainer = document.createElement("div");
        deleteIconContainer.classList.add("delete-icon-container");
        labelContainer.appendChild(deleteIconContainer);

        let deleteIcon = document.createElement("i");
        deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");

        deleteIcon.onclick = function() {
            onDeleteTodo(todoId);
        };

        deleteIconContainer.appendChild(deleteIcon);
    }
}