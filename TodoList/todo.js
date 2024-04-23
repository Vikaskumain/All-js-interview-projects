
// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add task function
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Create li element
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="removeTask(this)">Remove</button>
        `;

        // Append the new task to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = '';
    }
}

// Complete task function
function completeTask(button) {
    const listItem = button.parentElement;
    listItem.classList.toggle('completed');
}

// Remove task function
function removeTask(button) {
    const listItem = button.parentElement;
    taskList.removeChild(listItem);
}
