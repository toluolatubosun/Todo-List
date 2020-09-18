import { Task } from './classes/Task'
import { taskObject, taskParameters } from './types/TaskTypes'

document.addEventListener('DOMContentLoaded', function() {
    // Initialize materialize css select
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
                
    // Get DOM Elements
    const form = document.querySelector('#todo-form') as HTMLFormElement;

    const snippet = document.querySelector("#snippet") as HTMLInputElement;
    const message = document.querySelector("#message") as HTMLInputElement;
    const task_importance = document.querySelector("#task_importance") as HTMLSelectElement;

    const todo_tasks = document.querySelector(".todo-tasks") as HTMLDivElement;

    //  Set Task Class Parameters
    let values: taskParameters;

    // Gets tasks from Local Storage If they exist
    const getTasks = () => {
        let todos:  taskObject[];
        if (localStorage.getItem("todos") === null) {
            todos = [];
        } else {
            todos = JSON.parse(localStorage.getItem("todos")!);
        }
        todos.forEach((task) => {
            values = [task.id, task.snippet, task.message, task.importanceClass];
            var savedTask = new Task(...values);
            savedTask.displayTask(todo_tasks);
        })
    }
    
    getTasks();

    // Listen for form submission
    form.addEventListener('submit', (e: Event) => {
        e.preventDefault();

        if( task_importance.value == "important" || task_importance.value == "trivial" ){
            values = [
                `TID${Math.ceil(Math.random() * 10000000)}`, 
                snippet.value, message.value, (task_importance.value as  "important" | "trivial") ];
    
            snippet.value = "";
            message.value = "";
            task_importance.value = "0";
            M.FormSelect.init(task_importance);
    
            var task = new Task(...values);
            task.displayTask(todo_tasks); 
            task.saveToStorage()
        }else{
            M.toast({html: 'An Input Field is empty', classes: 'red'})
        }
        
    })

    
});

