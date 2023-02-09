const todoInput = document.querySelector(".todo-input");
const addTodo = document.querySelector(".add-todo");
const todoList = document.querySelector(".todo-list");
const message = document.querySelector(".message");

//todoInput.maxLength = 18;


todoInput.onkeyup = () => {
    let inLen = todoInput.value.length;
    console.log(inLen);
    message.innerHTML = inLen;
    if (inLen === 18) {
        message.style.color = "red";
        todoInput.maxLength = 18;
    }
    else {
        message.style.color = "black";   
    }       
};



addTodo.onclick = () => {
    const value = todoInput.value.trim();
    if (value === "") {
        message.innerHTML = "empty string provided";
    } else {
        const li = document.createElement("li");
        li.innerHTML = `${value} <button>Toggle</button>`;
        li.onclick = (event) => {
           event.currentTarget.style.color = "red";
            li.classList.toggle("done");                         //Toggle bytter mellom true og false, av og på
        };
    todoList.appendChild(li);
} };
