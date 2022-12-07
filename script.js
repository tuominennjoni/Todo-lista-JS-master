const todoInput = document.querySelector('.todo_input'); // muuuttujat
const todoButton = document.querySelector('.todo_button');
const todoList = document.querySelector('.todo_list'); 

todoButton.addEventListener("click", addTodo) // kuutenlija buttonille
todoList.addEventListener("click", deleteCheck) // kuuntelija buttonille


function addTodo(event) { // taskin lisäys funktio
    event.preventDefault();
    
    let todoDiv = document.createElement('div'); 
    todoDiv.classList.add('todo');
    
    let newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo_item');
    todoDiv.appendChild(newTodo);
    if(todoInput.value === ''){ // jos todo input tyhjä, palautetaan null -> ei tule tyhjää taskia listaan
        return null
    }
    
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'; // check
    completedButton.classList.add('complete_button')
    todoDiv.appendChild(completedButton);
    
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete_button')
    todoDiv.appendChild(deleteButton);
    
    todoList.appendChild(todoDiv);
    
    todoInput.value = ''
}


function deleteCheck(e) { // deletechekc funktio
    const item = e.target;
    
    if (item.classList[0] === "delete_button") { //delete button
        let todo = item.parentElement;
       
        todo.classList.add("fall")
        todo.addEventListener('transitionend', function () {
            todo.remove()
        })
    }
    
    if (item.classList[0] === "complete_button") {
        let todo = item.parentElement;
        todo.classList.toggle("completedItem")
    }
}

