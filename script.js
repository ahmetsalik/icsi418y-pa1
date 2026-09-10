const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const priorityInput = document.querySelector("#priority");
const taskList = document.querySelector("#task-list");

const tasks = [];

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const taskName = taskInput.value;
    const taskPriority = priorityInput.value;

    if (taskName === "") {
        return;
    }

    const task = {
        name: taskName,
        priority: taskPriority,
        completed: false
    };

    tasks.push(task);

    taskInput.value = "";

    displayTasks();
});

function displayTasks() {
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];

        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        if (task.completed) {
            taskElement.classList.add("completed");
        }

        const taskText = document.createElement("span");
        taskText.textContent = task.name + " - " + task.priority;

        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";

        completeButton.addEventListener("click", function() {
            task.completed = true;
            displayTasks();
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {
            tasks.splice(i, 1);
            displayTasks();
        });

        taskElement.appendChild(taskText);
        taskElement.appendChild(completeButton);
        taskElement.appendChild(deleteButton);

        taskList.appendChild(taskElement);
    }
}