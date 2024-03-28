function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value.trim();
    if (task !== "") {
        let taskList = document.getElementById("taskList");
        let li = document.createElement("li");
        li.textContent = task;
        li.className = "taskItem";
        li.onclick = function() {
            this.parentNode.removeChild(this);
        };
        taskList.appendChild(li);
        input.value = ""; // Clear input field
    } else {
        alert("Please enter a task!");
    }
}