let inputEnter = document.getElementById("todoEnter");

inputEnter.addEventListener("click", () => {
    let inputTodo = document.getElementById("todo").value;

    localStorage.setItem("task", inputTodo);

    console.log(inputTodo);

    window.location.replace("C:/Users/nassq/Desktop/JS/second.html");
});