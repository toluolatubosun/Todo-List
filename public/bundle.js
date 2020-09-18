!function(t){var g={};function I(c){if(g[c])return g[c].exports;var e=g[c]={i:c,l:!1,exports:{}};return t[c].call(e.exports,e,e.exports,I),e.l=!0,e.exports}I.m=t,I.c=g,I.d=function(t,g,c){I.o(t,g)||Object.defineProperty(t,g,{enumerable:!0,get:c})},I.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},I.t=function(t,g){if(1&g&&(t=I(t)),8&g)return t;if(4&g&&"object"==typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(I.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&g&&"string"!=typeof t)for(var e in t)I.d(c,e,function(g){return t[g]}.bind(null,e));return c},I.n=function(t){var g=t&&t.__esModule?function(){return t.default}:function(){return t};return I.d(g,"a",g),g},I.o=function(t,g){return Object.prototype.hasOwnProperty.call(t,g)},I.p="public",I(I.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./src/classes/Task.ts\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nclass Task {\r\n    constructor(taskID, snippet, message, importanceClass) {\r\n        this.taskID = taskID;\r\n        this.snippet = snippet;\r\n        this.message = message;\r\n        this.importanceClass = importanceClass;\r\n        this.taskObject = {\r\n            \"id\": this.taskID,\r\n            \"snippet\": this.snippet,\r\n            \"message\": this.message,\r\n            \"importanceClass\": this.importanceClass\r\n        };\r\n    }\r\n    deleteTaskListener(taskCard, deleteButton) {\r\n        deleteButton.addEventListener('click', (e) => __awaiter(this, void 0, void 0, function* () {\r\n            e.preventDefault();\r\n            deleteButton.style.cursor = 'not-allowed';\r\n            this.fadeout(taskCard, 0.5);\r\n            yield this.sleep(600);\r\n            taskCard.remove();\r\n            this.deleteFromStorage();\r\n        }));\r\n    }\r\n    fadeout(element, s) {\r\n        element.style.transition = `${s}s linear opacity`;\r\n        element.style.opacity = '0';\r\n    }\r\n    sleep(ms) {\r\n        return new Promise(resolve => setTimeout(resolve, ms));\r\n    }\r\n    deleteFromStorage() {\r\n        let todos;\r\n        if (localStorage.getItem('todos') == null) {\r\n            todos = [];\r\n        }\r\n        else {\r\n            todos = JSON.parse(localStorage.getItem('todos'));\r\n        }\r\n        todos.splice(todos.indexOf(this.taskObject), 1);\r\n        localStorage.setItem(\"todos\", JSON.stringify(todos));\r\n    }\r\n    saveToStorage() {\r\n        let todos;\r\n        if (localStorage.getItem('todos') == null) {\r\n            todos = [];\r\n        }\r\n        else {\r\n            todos = JSON.parse(localStorage.getItem('todos'));\r\n        }\r\n        todos.push(this.taskObject);\r\n        localStorage.setItem('todos', JSON.stringify(todos));\r\n    }\r\n    displayTask(todo_tasks) {\r\n        // task_card = \r\n        // `<div class=\"col s12\">\r\n        // \t     <div class=\"card ${this.importanceClass}\">\r\n        //          <div class=\"card-content\">\r\n        //              <span class=\"card-title\">${this.snippet}</span>\r\n        //              <p>${this.message}</p>\r\n        //          </div>\r\n        // \t        <div class=\"card-action\">\r\n        //             <a>DELETE</a>\r\n        //          </div>\r\n        //      </div>\r\n        //  </div>`;\r\n        // Create Task Card Elements\r\n        const col = document.createElement('div');\r\n        col.setAttribute('class', 'col s12');\r\n        col.setAttribute('id', `${this.taskID}`);\r\n        const card = document.createElement('div');\r\n        card.setAttribute('class', `card ${this.importanceClass}`);\r\n        col.append(card);\r\n        const cardContent = document.createElement('div');\r\n        cardContent.setAttribute('class', 'card-content');\r\n        const cardAction = document.createElement('div');\r\n        cardAction.setAttribute('class', 'card-action');\r\n        card.append(cardContent, cardAction);\r\n        const cardTitle = document.createElement('span');\r\n        cardTitle.textContent = this.snippet;\r\n        cardTitle.setAttribute('class', 'card-title truncate');\r\n        const cardMessage = document.createElement('p');\r\n        cardMessage.textContent = this.message;\r\n        cardContent.append(cardTitle, cardMessage);\r\n        const deleteButton = document.createElement('a');\r\n        deleteButton.textContent = 'DELETE';\r\n        cardAction.append(deleteButton);\r\n        // Add to DOM\r\n        if (this.importanceClass == \"important\") {\r\n            todo_tasks.prepend(col);\r\n        }\r\n        else {\r\n            todo_tasks.append(col);\r\n        }\r\n        // Add delete listener\r\n        this.deleteTaskListener(col, deleteButton);\r\n    }\r\n}\r\n\n// CONCATENATED MODULE: ./src/app.ts\n\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n    // Initialize materialize css select\r\n    var elems = document.querySelectorAll('select');\r\n    M.FormSelect.init(elems);\r\n    // Get DOM Elements\r\n    const form = document.querySelector('#todo-form');\r\n    const snippet = document.querySelector(\"#snippet\");\r\n    const message = document.querySelector(\"#message\");\r\n    const task_importance = document.querySelector(\"#task_importance\");\r\n    const todo_tasks = document.querySelector(\".todo-tasks\");\r\n    //  Set Task Class Parameters\r\n    let values;\r\n    // Gets tasks from Local Storage If they exist\r\n    const getTasks = () => {\r\n        let todos;\r\n        if (localStorage.getItem(\"todos\") === null) {\r\n            todos = [];\r\n        }\r\n        else {\r\n            todos = JSON.parse(localStorage.getItem(\"todos\"));\r\n        }\r\n        todos.forEach((task) => {\r\n            values = [task.id, task.snippet, task.message, task.importanceClass];\r\n            var savedTask = new Task(...values);\r\n            savedTask.displayTask(todo_tasks);\r\n        });\r\n    };\r\n    getTasks();\r\n    // Listen for form submission\r\n    form.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n        if (task_importance.value == \"important\" || task_importance.value == \"trivial\") {\r\n            values = [\r\n                `TID${Math.ceil(Math.random() * 10000000)}`,\r\n                snippet.value, message.value,\r\n                task_importance.value\r\n            ];\r\n            snippet.value = \"\";\r\n            message.value = \"\";\r\n            task_importance.value = \"0\";\r\n            M.FormSelect.init(task_importance);\r\n            var task = new Task(...values);\r\n            task.displayTask(todo_tasks);\r\n            task.saveToStorage();\r\n        }\r\n        else {\r\n            M.toast({ html: 'An Input Field is empty', classes: 'red' });\r\n        }\r\n    });\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9UYXNrLnRzPzY1NzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC50cz9mMWIyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxpQkFBaUIsU0FBSSxJQUFJLFNBQUk7QUFDN0IsMkJBQTJCLCtEQUErRCxnQkFBZ0IsRUFBRSxFQUFFO0FBQzlHO0FBQ0EsbUNBQW1DLE1BQU0sNkJBQTZCLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDakcsa0NBQWtDLE1BQU0saUNBQWlDLEVBQUUsWUFBWSxXQUFXLEVBQUU7QUFDcEcsK0JBQStCLHFGQUFxRjtBQUNwSDtBQUNBLEtBQUs7QUFDTDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0Esc0NBQXNDLEVBQUU7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHFCQUFxQjtBQUN6RDtBQUNBLG1EQUFtRCxhQUFhO0FBQ2hFLDZCQUE2QixhQUFhO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxZQUFZO0FBQzlDO0FBQ0EsMkNBQTJDLHFCQUFxQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUN6R3NDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsSUFBSTtBQUNwQztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixvQ0FBb0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsSUFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrREFBa0Q7QUFDdkU7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59O1xyXG5leHBvcnQgY2xhc3MgVGFzayB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YXNrSUQsIHNuaXBwZXQsIG1lc3NhZ2UsIGltcG9ydGFuY2VDbGFzcykge1xyXG4gICAgICAgIHRoaXMudGFza0lEID0gdGFza0lEO1xyXG4gICAgICAgIHRoaXMuc25pcHBldCA9IHNuaXBwZXQ7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcclxuICAgICAgICB0aGlzLmltcG9ydGFuY2VDbGFzcyA9IGltcG9ydGFuY2VDbGFzcztcclxuICAgICAgICB0aGlzLnRhc2tPYmplY3QgPSB7XHJcbiAgICAgICAgICAgIFwiaWRcIjogdGhpcy50YXNrSUQsXHJcbiAgICAgICAgICAgIFwic25pcHBldFwiOiB0aGlzLnNuaXBwZXQsXHJcbiAgICAgICAgICAgIFwibWVzc2FnZVwiOiB0aGlzLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIFwiaW1wb3J0YW5jZUNsYXNzXCI6IHRoaXMuaW1wb3J0YW5jZUNsYXNzXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGRlbGV0ZVRhc2tMaXN0ZW5lcih0YXNrQ2FyZCwgZGVsZXRlQnV0dG9uKSB7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBkZWxldGVCdXR0b24uc3R5bGUuY3Vyc29yID0gJ25vdC1hbGxvd2VkJztcclxuICAgICAgICAgICAgdGhpcy5mYWRlb3V0KHRhc2tDYXJkLCAwLjUpO1xyXG4gICAgICAgICAgICB5aWVsZCB0aGlzLnNsZWVwKDYwMCk7XHJcbiAgICAgICAgICAgIHRhc2tDYXJkLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZUZyb21TdG9yYWdlKCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgZmFkZW91dChlbGVtZW50LCBzKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gYCR7c31zIGxpbmVhciBvcGFjaXR5YDtcclxuICAgICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgICB9XHJcbiAgICBzbGVlcChtcykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxuICAgIH1cclxuICAgIGRlbGV0ZUZyb21TdG9yYWdlKCkge1xyXG4gICAgICAgIGxldCB0b2RvcztcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0b2RvcyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9kb3Muc3BsaWNlKHRvZG9zLmluZGV4T2YodGhpcy50YXNrT2JqZWN0KSwgMSk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xyXG4gICAgfVxyXG4gICAgc2F2ZVRvU3RvcmFnZSgpIHtcclxuICAgICAgICBsZXQgdG9kb3M7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpID09IG51bGwpIHtcclxuICAgICAgICAgICAgdG9kb3MgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvZG9zLnB1c2godGhpcy50YXNrT2JqZWN0KTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheVRhc2sodG9kb190YXNrcykge1xyXG4gICAgICAgIC8vIHRhc2tfY2FyZCA9IFxyXG4gICAgICAgIC8vIGA8ZGl2IGNsYXNzPVwiY29sIHMxMlwiPlxyXG4gICAgICAgIC8vIFx0ICAgICA8ZGl2IGNsYXNzPVwiY2FyZCAke3RoaXMuaW1wb3J0YW5jZUNsYXNzfVwiPlxyXG4gICAgICAgIC8vICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAvLyAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJkLXRpdGxlXCI+JHt0aGlzLnNuaXBwZXR9PC9zcGFuPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICA8cD4ke3RoaXMubWVzc2FnZX08L3A+XHJcbiAgICAgICAgLy8gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgLy8gXHQgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvblwiPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgIDxhPkRFTEVURTwvYT5cclxuICAgICAgICAvLyAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAvLyAgICAgIDwvZGl2PlxyXG4gICAgICAgIC8vICA8L2Rpdj5gO1xyXG4gICAgICAgIC8vIENyZWF0ZSBUYXNrIENhcmQgRWxlbWVudHNcclxuICAgICAgICBjb25zdCBjb2wgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb2wuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjb2wgczEyJyk7XHJcbiAgICAgICAgY29sLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHt0aGlzLnRhc2tJRH1gKTtcclxuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgYGNhcmQgJHt0aGlzLmltcG9ydGFuY2VDbGFzc31gKTtcclxuICAgICAgICBjb2wuYXBwZW5kKGNhcmQpO1xyXG4gICAgICAgIGNvbnN0IGNhcmRDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2FyZENvbnRlbnQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLWNvbnRlbnQnKTtcclxuICAgICAgICBjb25zdCBjYXJkQWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY2FyZEFjdGlvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtYWN0aW9uJyk7XHJcbiAgICAgICAgY2FyZC5hcHBlbmQoY2FyZENvbnRlbnQsIGNhcmRBY3Rpb24pO1xyXG4gICAgICAgIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0aGlzLnNuaXBwZXQ7XHJcbiAgICAgICAgY2FyZFRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC10aXRsZSB0cnVuY2F0ZScpO1xyXG4gICAgICAgIGNvbnN0IGNhcmRNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGNhcmRNZXNzYWdlLnRleHRDb250ZW50ID0gdGhpcy5tZXNzYWdlO1xyXG4gICAgICAgIGNhcmRDb250ZW50LmFwcGVuZChjYXJkVGl0bGUsIGNhcmRNZXNzYWdlKTtcclxuICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RFTEVURSc7XHJcbiAgICAgICAgY2FyZEFjdGlvbi5hcHBlbmQoZGVsZXRlQnV0dG9uKTtcclxuICAgICAgICAvLyBBZGQgdG8gRE9NXHJcbiAgICAgICAgaWYgKHRoaXMuaW1wb3J0YW5jZUNsYXNzID09IFwiaW1wb3J0YW50XCIpIHtcclxuICAgICAgICAgICAgdG9kb190YXNrcy5wcmVwZW5kKGNvbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0b2RvX3Rhc2tzLmFwcGVuZChjb2wpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgZGVsZXRlIGxpc3RlbmVyXHJcbiAgICAgICAgdGhpcy5kZWxldGVUYXNrTGlzdGVuZXIoY29sLCBkZWxldGVCdXR0b24pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRhc2sgfSBmcm9tICcuL2NsYXNzZXMvVGFzayc7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvLyBJbml0aWFsaXplIG1hdGVyaWFsaXplIGNzcyBzZWxlY3RcclxuICAgIHZhciBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpO1xyXG4gICAgTS5Gb3JtU2VsZWN0LmluaXQoZWxlbXMpO1xyXG4gICAgLy8gR2V0IERPTSBFbGVtZW50c1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvLWZvcm0nKTtcclxuICAgIGNvbnN0IHNuaXBwZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NuaXBwZXRcIik7XHJcbiAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZXNzYWdlXCIpO1xyXG4gICAgY29uc3QgdGFza19pbXBvcnRhbmNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrX2ltcG9ydGFuY2VcIik7XHJcbiAgICBjb25zdCB0b2RvX3Rhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b2RvLXRhc2tzXCIpO1xyXG4gICAgLy8gIFNldCBUYXNrIENsYXNzIFBhcmFtZXRlcnNcclxuICAgIGxldCB2YWx1ZXM7XHJcbiAgICAvLyBHZXRzIHRhc2tzIGZyb20gTG9jYWwgU3RvcmFnZSBJZiB0aGV5IGV4aXN0XHJcbiAgICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IHtcclxuICAgICAgICBsZXQgdG9kb3M7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb3NcIikgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgdG9kb3MgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9kb3MuZm9yRWFjaCgodGFzaykgPT4ge1xyXG4gICAgICAgICAgICB2YWx1ZXMgPSBbdGFzay5pZCwgdGFzay5zbmlwcGV0LCB0YXNrLm1lc3NhZ2UsIHRhc2suaW1wb3J0YW5jZUNsYXNzXTtcclxuICAgICAgICAgICAgdmFyIHNhdmVkVGFzayA9IG5ldyBUYXNrKC4uLnZhbHVlcyk7XHJcbiAgICAgICAgICAgIHNhdmVkVGFzay5kaXNwbGF5VGFzayh0b2RvX3Rhc2tzKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBnZXRUYXNrcygpO1xyXG4gICAgLy8gTGlzdGVuIGZvciBmb3JtIHN1Ym1pc3Npb25cclxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHRhc2tfaW1wb3J0YW5jZS52YWx1ZSA9PSBcImltcG9ydGFudFwiIHx8IHRhc2tfaW1wb3J0YW5jZS52YWx1ZSA9PSBcInRyaXZpYWxcIikge1xyXG4gICAgICAgICAgICB2YWx1ZXMgPSBbXHJcbiAgICAgICAgICAgICAgICBgVElEJHtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwMDAwMDAwKX1gLFxyXG4gICAgICAgICAgICAgICAgc25pcHBldC52YWx1ZSwgbWVzc2FnZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHRhc2tfaW1wb3J0YW5jZS52YWx1ZVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICBzbmlwcGV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgbWVzc2FnZS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIHRhc2tfaW1wb3J0YW5jZS52YWx1ZSA9IFwiMFwiO1xyXG4gICAgICAgICAgICBNLkZvcm1TZWxlY3QuaW5pdCh0YXNrX2ltcG9ydGFuY2UpO1xyXG4gICAgICAgICAgICB2YXIgdGFzayA9IG5ldyBUYXNrKC4uLnZhbHVlcyk7XHJcbiAgICAgICAgICAgIHRhc2suZGlzcGxheVRhc2sodG9kb190YXNrcyk7XHJcbiAgICAgICAgICAgIHRhc2suc2F2ZVRvU3RvcmFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgTS50b2FzdCh7IGh0bWw6ICdBbiBJbnB1dCBGaWVsZCBpcyBlbXB0eScsIGNsYXNzZXM6ICdyZWQnIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n")}]);