const inputElement = document.getElementById("inputBox");
const todoItemsContainer = document.getElementById("todoItemsContainer");
const buttonElement = document.getElementById('button');
const listContainer = document.getElementById('list-container');
listContainer.appendChild(todoItemsContainer);

buttonElement.onclick = function(){
    addTask();
}

function addTask(){
    if(inputElement.value.trim().length === 0 ){
        alert("Create your task !");
    }
    else{
       
        let list_item = document.createElement('li');
        list_item.textContent = inputElement.value;
        list_item.classList.add("d-flex","flex-row",);
        todoItemsContainer.appendChild(list_item);

        let span = document.createElement("span");
        list_item.appendChild(span);
        
        let delete_icon = document.createElement("i");
        delete_icon.classList.add("fa-regular","fa-trash-can"); 
        span.appendChild(delete_icon);
    }
    inputElement.value = "";
    saveData();
};

todoItemsContainer.addEventListener("click", function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName === 'I'){
        e.target.parentElement.parentElement.remove();
        saveData();
    }
},  false);

function saveData(){
    localStorage.setItem("data", todoItemsContainer.innerHTML);
}

function showData(){
    todoItemsContainer.innerHTML = localStorage.getItem("data");
}
showData();