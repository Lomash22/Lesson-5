const form = document.querySelector('#task-input');
const taskInput = document.querySelector('#task');
const list = document.querySelector('#to-dos');
const showDate = document.querySelector('#current-date');


//Ex 1


//Ex 2



form.addEventListener('submit', function (event) {
    event.preventDefault();
    //Get what the user typed in the input
    let newTodo = taskInput.value;
    //Create an <li> element in the DOM
    let newListItem = document.createElement('li'); 
    //Use time to create a unique id for each <li> element
    newListItem.id = `todo-${Math.floor(Math.random() * Date.now())}`; 
    //Ex 3 

    newListItem.innerHTML = `${newTodo}`;
    //Ex 6

    //Enable marking a todo done by applying CSS styles on click
    newListItem.addEventListener('click', done);
    //Add the new todo to the DOM
    list.appendChild(newListItem);
    //Clear the form
    taskInput.value = "";

    //Ex 4
})

//Ex 4 



//Ex 5 



function done() {
    this.classList.toggle('done');
      //Ex 6
    
}

// Ex 7