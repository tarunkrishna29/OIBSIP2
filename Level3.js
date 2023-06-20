const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("add-task");
const taskList = document.getElementById("task-list");
addTaskButton.addEventListener("click", function() {
  const taskText = taskInput.value;
  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");
  const taskTextElement = document.createElement("span");
  taskTextElement.innerText = taskText;
  taskItem.appendChild(taskTextElement);

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete-button");
  taskItem.appendChild(deleteButton);

  taskList.appendChild(taskItem);
  taskInput.value = "";
});

taskList.addEventListener("click", function(event) {
  if (event.target.classList.contains("delete-button")) {
    const taskItem = event.target.parentNode;
    taskList.removeChild(taskItem);
  }
});

taskList.addEventListener("click", function(event) {
    if (event.target.nodeName === "SPAN") {
      event.target.classList.toggle("completed");
    }
  });