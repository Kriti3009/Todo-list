const taskList = document.getElementById('task-list');
const addTaskForm = document.getElementById('add-task-form');
const taskInput = document.getElementById('task-input');

let tasks = [];

addTaskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = taskInput.value.trim();
    if (task) {
        tasks.push({ text: task, done: false });
        renderTasks();
        taskInput.value = '';
    }
});

taskList.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const taskIndex = tasks.findIndex((task) => task.text === e.target.textContent);
        if (taskIndex !== -1) {
            tasks[taskIndex].done = !tasks[taskIndex].done;
            renderTasks();
        }
    }
});

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task) => {
        const taskElement = document.createElement('li');
        taskElement.textContent = task.text;
        if (task.done) {
            taskElement.classList.add('done');
        }
        taskList.appendChild(taskElement);
    });
}

renderTasks();