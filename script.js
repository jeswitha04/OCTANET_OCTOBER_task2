document.addEventListener("DOMContentLoaded", function () {
    const taskList = document.getElementById("task-list");
    const addTaskButton = document.getElementById("add-button");
    const newTaskInput = document.getElementById("new-task");

    addTaskButton.addEventListener("click", function () {
        const taskText = newTaskInput.value.trim();
        if (taskText !== "") {
            const task = document.createElement("div");
            task.classList.add("task");

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.classList.add("task-checkbox");

            const taskTextSpan = document.createElement("span");
            taskTextSpan.classList.add("task-text");
            taskTextSpan.textContent = taskText;

            const deleteButton = document.createElement("button");
            deleteButton.classList.add("delete-button");
            deleteButton.textContent = "Delete";

            deleteButton.addEventListener("click", function () {
                taskList.removeChild(task);
            });

            task.appendChild(checkbox);
            task.appendChild(taskTextSpan);
            task.appendChild(deleteButton);

            taskList.appendChild(task);
            newTaskInput.value = "";
        }
    });
});
