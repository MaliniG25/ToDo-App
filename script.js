document.getElementById('add-todo-btn').addEventListener('click', addTodo);

function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        const todoList = document.getElementById('todo-list');

        const listItem = document.createElement('li');
        listItem.className = 'todo-item';

        listItem.innerHTML = `
            <span>${todoText}</span>
            <button class="remove-btn">Remove</button>
        `;

        listItem.querySelector('.remove-btn').addEventListener('click', function() {
            todoList.removeChild(listItem);
        });

        todoList.appendChild(listItem);
        todoInput.value = '';
    }
}