document.getElementById('add-todo-btn').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();

    if (todoText !== '') {
        addTodoItem(todoText);
        input.value = '';
    }
});

function addTodoItem(text) {
    const li = document.createElement('li');
    li.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        li.remove();
    });

    li.appendChild(deleteBtn);
    document.getElementById('todo-list').appendChild(li);
}
