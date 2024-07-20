
function remove() {
    const task = document.getElementById("add").value;
    if (task.length > 0) {
        document.getElementById("taskList").innerHTML += "<div class='task'>" + task + "<button onclick='deleteTask(this)'>DELETE</button></div>";
    }
    document.getElementById("Input").value = "";
}
function deleteTask(element) {
    element.parentElement.remove();
}
  