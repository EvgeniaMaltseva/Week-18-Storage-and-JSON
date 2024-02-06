/*function submitForm(){*/
    const buttonAdd = document. querySelector ('.button-add');
    buttonAdd.addEventListener('click', () => {
        if (!isEmpty()) {
        document.querySelector('.cleanbtn').disabled = false;
        //document.querySelector('.notasks').remove();
        document.querySelector('.notasks').style.display = "none";
        let addNewTask = document.getElementById('task-list'); // вызов по id
    
            let taskList = document.createElement('li'); // создание нового элемента для ввода задачи
            taskList.classList.add('task'); //присваивание ему класса
            addNewTask.append(taskList);// добавление его к блоку 
            let task = document.getElementById('taskentry').value;// значение ввода из input
            taskList.textContent = task; // вывод задачи в лист
            const chbox = document.createElement("input");
            chbox.type = "checkbox";
            chbox.classList.add('taskchbox');
            taskList.append(chbox);
            cleanInput();
            addTaskToStorage(task);
        };   
}); 
document.getElementById('task-list').addEventListener("click", function(event) {
    let target = event.target;
    if (target.matches("input[type='checkbox']")) {
        if (target.parentElement.classList.contains("checked")) {
            target.parentElement.classList.remove("checked");
        } else {
            target.parentElement.classList.add("checked");
        }
        
    }
});


function isEmpty() {
    const taskInput = document.querySelector('.taskentry');
    if (taskInput.value === "") {
        alert ("Введите задачу");
        return true;
    } else {
        return false;
    }
};
function cleanInput() {
    const inputField = document.getElementById("taskentry");
    inputField.value = "";                      
};
function  addTaskToStorage(task){
    let taskCollection =[];
    let savedTasks = window.localStorage.getItem('task2');
    if (savedTasks) {
        taskCollection = JSON.parse(savedTasks);
        taskCollection.push(task);
        window.localStorage.setItem("task2", JSON.stringify(taskCollection));
    } else { 
        taskCollection.push(task); 
        window.localStorage.setItem("task2", JSON.stringify(taskCollection));
    }
};     
