
let arrTasks = []

const itemInput = document.getElementById("item-input")
const addItem = document.getElementById("add-item")
const todoList = document.getElementById("todo-list")
const todoItems = todoList.querySelectorAll("li")

addItem.addEventListener("submit", function(event) {
    event.preventDefault
    if (itemInput.value){
        addTask(itemInput.value)
        itemInput.value = ""
        itemInput.focus()
    }
})

todoList.addEventListener("click", function(event) {
    let task = event.target
    let action = task.target.getA
    while(task.nodeName !== "LI") {
        task = task.parentElement
    }
    let taskIndex = [...todoItems]. indexOf(task)
    let editContainer = document.querySelector(".editContainer")
    let containerEditButton = editContainer.querySelector(".editButton")
    let containerCancelButton = editContainer.querySelector(".cancelButton")
    const actions = {
        checkButton: function(){
            console.log("checkButton")
        },
        editButton: function(){
            console.log("editButton")
        }, 
        deleteButton: function(){
            console.log("deleteButton")
        },
        containerEditButton: function(){
            console.log("containerEditButton")
        },
        containerCancelButton: function() {
            console.log("containerCancelButton")

        },

    }
})