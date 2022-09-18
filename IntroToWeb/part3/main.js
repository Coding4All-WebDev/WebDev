let inputEnter = document.getElementById("todoEnter");

// Note: Recall functions can be written in arrow syntax without name: () => {}
// Here we take (<function_parameter>) => {} and store that function in tableAdd
const tableAdd = (todoItem) => {
    let table = document.getElementById("todoTable");

    table.insertRow(0).insertCell(0).innerHTML = todoItem

    // printing to console -> Ctrl+Shift+I to see the output of line below
    console.log("We added: " + todoItem);
};

// the addEventListener takes two things
// 1. an event type -> "click"
// 2. a function (this function is called when the event happens)
// Note: Recall functions can be written in arrow syntax without name: () => {}
inputEnter.addEventListener("click", () => {
    let inputTodo = document.getElementById("todo").value;
    
    // we are calling the function tableAdd declared above
    tableAdd(inputTodo);
});