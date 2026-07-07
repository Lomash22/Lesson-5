const form = document.querySelector('#task-input');
const taskInput = document.querySelector('#task');
const list = document.querySelector('#to-dos');
const showDate = document.querySelector('#current-date');

// Ex 1
const today = new Date();
console.log(today);

// Ex 2
const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

showDate.textContent = formattedDate;

form.addEventListener('submit', function (event) {
    event.preventDefault();

    //Get what the user typed in the input
    let newTodo = taskInput.value;

    //Create an <li> element in the DOM
    let newListItem = document.createElement('li');

    //Use time to create a unique id for each <li> element
    newListItem.id = `todo-${Math.floor(Math.random() * Date.now())}`;

    // Ex 3
    let timeStamp = new Date().toLocaleString();

    newListItem.innerHTML = `
        ${newTodo}
        <p class="time-stamp">${timeStamp}</p>
    `;

    // Ex 6
    newListItem.addEventListener('click', done);

    //Add the new todo to the DOM
    list.appendChild(newListItem);

    //Clear the form
    taskInput.value = "";

    // Ex 4
    saveTodoList();
});

// Ex 4
function saveTodoList() {
    let toDoItems = list.children;

    for (let item of toDoItems) {
        let id = item.id;
        let content = item.innerHTML;
        localStorage.setItem(id, content);
    }
}

// Ex 5
function showTodoList() {
    let keys = Object.keys(localStorage);
    let total = Object.keys(localStorage).length;

    if (total > 0) {
        for (let key of keys) {
            let li = document.createElement('li');
            li.id = key;
            li.innerHTML = localStorage.getItem(key);

            // Ex 6
            li.addEventListener('click', done);

            list.prepend(li);
        }
    }
}

showTodoList();

function done() {
    this.classList.toggle('done');

    // Ex 6
    let id = this.id;
    localStorage.removeItem(id);
}

// Ex 7
const clearButton = document.querySelector('#clear');

clearButton.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});