// Add event listener for the Add button
document.getElementById('add-btn').addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('todo-input');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskItem = document.createElement('li');
    taskItem.className = 'todo-item';
    taskItem.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        taskItem.remove();
    };

    taskItem.appendChild(deleteBtn);

    taskItem.addEventListener('click', function() {
        taskItem.classList.toggle('done');
    });

    document.getElementById('todo-list').appendChild(taskItem);

    taskInput.value = '';
}
