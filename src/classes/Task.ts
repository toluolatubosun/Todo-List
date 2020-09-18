import { TaskInterface } from '../interfaces/TaskInterface';
import { taskObject } from '../types/TaskTypes'

export class Task implements TaskInterface{
    
    private taskObject: taskObject;

    constructor(
        private taskID: string,
        private snippet : string,
        private message : string,
        private importanceClass: "important" | "trivial",
    ){
        this.taskObject = {
            "id": this.taskID,
            "snippet": this.snippet,
            "message": this.message,
            "importanceClass": this.importanceClass
        };
    }

    private deleteTaskListener(taskCard: HTMLDivElement, deleteButton: HTMLAnchorElement){
        deleteButton.addEventListener('click', async (e: Event) => {
            e.preventDefault();
            deleteButton.style.cursor = 'not-allowed';

            this.fadeout(taskCard, 0.5);
            await this.sleep(600);

            taskCard.remove();
            this.deleteFromStorage();
        })
    }

    private fadeout(element: HTMLElement, s: number){
        element.style.transition = `${s}s linear opacity`;
        element.style.opacity = '0';
    }

    private sleep(ms: number){
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    private deleteFromStorage():void{
        let todos: taskObject[]
        if( localStorage.getItem('todos') == null){
            todos = []
        }else{
            todos = JSON.parse(localStorage.getItem('todos')!)
        }
        let index = todos.map((task: taskObject) => { return task.id }).indexOf(this.taskID);
        todos.splice(index, 1);
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    saveToStorage():void{
        let todos: taskObject[]
        if( localStorage.getItem('todos') == null){
            todos = []
        }else{
            todos = JSON.parse(localStorage.getItem('todos')!)
        }
        todos.push(this.taskObject);
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    displayTask(todo_tasks: HTMLDivElement):void {
        // task_card = 
        // `<div class="col s12">
        // 	     <div class="card ${this.importanceClass}">
        //          <div class="card-content">
        //              <span class="card-title">${this.snippet}</span>
        //              <p>${this.message}</p>
        //          </div>
        // 	        <div class="card-action">
        //             <a>DELETE</a>
        //          </div>
        //      </div>
        //  </div>`;

        // Create Task Card Elements
        const col = document.createElement('div');
        col.setAttribute('class', 'col s12');
        col.setAttribute('id', `${this.taskID}`);

        const card = document.createElement('div');
        card.setAttribute('class', `card ${this.importanceClass}`)
        col.append(card);

        const cardContent = document.createElement('div');
        cardContent.setAttribute('class', 'card-content');

        const cardAction = document.createElement('div');
        cardAction.setAttribute('class', 'card-action');

        card.append(cardContent, cardAction);

        const cardTitle = document.createElement('span');
        cardTitle.textContent = this.snippet;
        cardTitle.setAttribute('class', 'card-title truncate');
    
        const cardMessage = document.createElement('p');
        cardMessage.textContent = this.message;
        
        cardContent.append(cardTitle, cardMessage);

        const deleteButton = document.createElement('a');
        deleteButton.textContent = 'DELETE';

        cardAction.append(deleteButton);

        // Add to DOM
        if( this.importanceClass == "important"){
            todo_tasks.prepend(col);
        }else{
            todo_tasks.append(col);
        }
        
        // Add delete listener
        this.deleteTaskListener(col, deleteButton);

    }
}