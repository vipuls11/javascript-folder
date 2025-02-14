
document.querySelector('#push').onclick = function(){
   const task = document.querySelector('#newtask input').value.length
    if(task==0){
        alert("Please enter new task")
    }else{
        document.querySelector('#tasks').innerHTML += `<div class="task">
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
            <i class="fa-solid fa-trash"></i>
            </button>
        </div>` ;

        let current_tasks = document.querySelectorAll('.delete');
        for (let i = 0; i < current_tasks.length; i++) {
            const deleteElement = current_tasks[i];
            // console.log(deleteElement,'delete')
            deleteElement.onclick = function(){
                this.parentNode.remove()
            }
        }

        let taskElem = document.querySelectorAll('.task');
        
        for (let i = 0; i < taskElem.length; i++) {
            const taskElement = taskElem[i];
            // console.log(taskElement,'delete')
            taskElement.onclick = function(){
                this.classList.toggle('completed');
            }
             for (let i = 0; i < taskElem.length; i++) {
            const taskElement = taskElem[i];
            // console.log(taskElement,'delete')
            taskElement.onclick = function(){
                this.classList.toggle('completed');
            }
           
        }
        }
          // Save to localStorage
          saveTasks();
        document.querySelector('#newtask input').value= " "
        
    }
   
}
// Load tasks from localStorage when the page loads
window.onload = function() {
    loadTasks();
};

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
        document.querySelector('#tasks').innerHTML += `<div class="task">
            <span id="taskname" class="${task.completed ? 'completed' : ''}">${task.name}</span>
            <button class="delete">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>`;
    });
}

function saveTasks() {
    const tasks = [];
    const taskElements = document.querySelectorAll('.task');

    taskElements.forEach(taskElement => {
        const taskName = taskElement.querySelector('#taskname').textContent;
        const completed = taskElement.classList.contains('completed');
        tasks.push({ name: taskName, completed: completed });
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

