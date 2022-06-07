const form = document.getElementById('form');
const input = document.getElementById('input');
const todoUL = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));

if(todos) {
    todos.forEach(todo => addTodo(todo));
} 

form.addEventListener('submit', (e) => {
    e.preventDefault();

    addTodo();
})

function addTodo(todo) {
    let todoText = input.value;
    if(todo) {
        todoText = todo.text;
    }
    if(todoText) {
        const list = document.createElement('li');
        if(todo && todo.completed) {
            list.classList.add('completed');
        }
        list.innerText = todoText

        list.addEventListener('click', () => {
            list.classList.toggle('completed')
            updatels()
        });
        list.addEventListener('contextmenu', (e) => {
            e.preventDefault()
            list.remove();
            updatels()
        });
        todoUL.appendChild(list);
        input.value = '';

        updatels()
    }
}

function updatels() {
    todosEl = document.querySelectorAll('li');

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })
    localStorage.setItem('todos', JSON.stringify(todos));
}

// localStorage.setItem('name', JSON.stringify(obj))
// JSON.parse(localStorage.getItem(obj))
// localStorage.removeItem