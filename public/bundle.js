/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "public";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Task */ \"./src/classes/Task.ts\");\n\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n    // Initialize materialize css select\r\n    var elems = document.querySelectorAll('select');\r\n    M.FormSelect.init(elems);\r\n    // Get DOM Elements\r\n    const form = document.querySelector('#todo-form');\r\n    const snippet = document.querySelector(\"#snippet\");\r\n    const message = document.querySelector(\"#message\");\r\n    const task_importance = document.querySelector(\"#task_importance\");\r\n    const todo_tasks = document.querySelector(\".todo-tasks\");\r\n    //  Set Task Class Parameters\r\n    let values;\r\n    // Gets tasks from Local Storage If they exist\r\n    const getTasks = () => {\r\n        let todos;\r\n        if (localStorage.getItem(\"todos\") === null) {\r\n            todos = [];\r\n        }\r\n        else {\r\n            todos = JSON.parse(localStorage.getItem(\"todos\"));\r\n        }\r\n        todos.forEach((task) => {\r\n            values = [task.id, task.snippet, task.message, task.importanceClass];\r\n            var savedTask = new _classes_Task__WEBPACK_IMPORTED_MODULE_0__[\"Task\"](...values);\r\n            savedTask.displayTask(todo_tasks);\r\n        });\r\n    };\r\n    getTasks();\r\n    // Listen for form submission\r\n    form.addEventListener('submit', (e) => {\r\n        e.preventDefault();\r\n        if (task_importance.value == \"important\" || task_importance.value == \"trivial\") {\r\n            values = [\r\n                `TID${Math.ceil(Math.random() * 10000000)}`,\r\n                snippet.value, message.value,\r\n                task_importance.value\r\n            ];\r\n            snippet.value = \"\";\r\n            message.value = \"\";\r\n            task_importance.value = \"0\";\r\n            M.FormSelect.init(task_importance);\r\n            var task = new _classes_Task__WEBPACK_IMPORTED_MODULE_0__[\"Task\"](...values);\r\n            task.displayTask(todo_tasks);\r\n            task.saveToStorage();\r\n        }\r\n        else {\r\n            M.toast({ html: 'An Input Field is empty', classes: 'red' });\r\n        }\r\n    });\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzP2YxYjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGtEQUFJO0FBQ3BDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG9DQUFvQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixrREFBSTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixrREFBa0Q7QUFDdkU7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsImZpbGUiOiIuL3NyYy9hcHAudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi9jbGFzc2VzL1Rhc2snO1xyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG4gICAgLy8gSW5pdGlhbGl6ZSBtYXRlcmlhbGl6ZSBjc3Mgc2VsZWN0XHJcbiAgICB2YXIgZWxlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKTtcclxuICAgIE0uRm9ybVNlbGVjdC5pbml0KGVsZW1zKTtcclxuICAgIC8vIEdldCBET00gRWxlbWVudHNcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kby1mb3JtJyk7XHJcbiAgICBjb25zdCBzbmlwcGV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzbmlwcGV0XCIpO1xyXG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVzc2FnZVwiKTtcclxuICAgIGNvbnN0IHRhc2tfaW1wb3J0YW5jZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza19pbXBvcnRhbmNlXCIpO1xyXG4gICAgY29uc3QgdG9kb190YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9kby10YXNrc1wiKTtcclxuICAgIC8vICBTZXQgVGFzayBDbGFzcyBQYXJhbWV0ZXJzXHJcbiAgICBsZXQgdmFsdWVzO1xyXG4gICAgLy8gR2V0cyB0YXNrcyBmcm9tIExvY2FsIFN0b3JhZ2UgSWYgdGhleSBleGlzdFxyXG4gICAgY29uc3QgZ2V0VGFza3MgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRvZG9zO1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvZG9zXCIpID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRvZG9zID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0b2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2Rvc1wiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvZG9zLmZvckVhY2goKHRhc2spID0+IHtcclxuICAgICAgICAgICAgdmFsdWVzID0gW3Rhc2suaWQsIHRhc2suc25pcHBldCwgdGFzay5tZXNzYWdlLCB0YXNrLmltcG9ydGFuY2VDbGFzc107XHJcbiAgICAgICAgICAgIHZhciBzYXZlZFRhc2sgPSBuZXcgVGFzayguLi52YWx1ZXMpO1xyXG4gICAgICAgICAgICBzYXZlZFRhc2suZGlzcGxheVRhc2sodG9kb190YXNrcyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgZ2V0VGFza3MoKTtcclxuICAgIC8vIExpc3RlbiBmb3IgZm9ybSBzdWJtaXNzaW9uXHJcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICh0YXNrX2ltcG9ydGFuY2UudmFsdWUgPT0gXCJpbXBvcnRhbnRcIiB8fCB0YXNrX2ltcG9ydGFuY2UudmFsdWUgPT0gXCJ0cml2aWFsXCIpIHtcclxuICAgICAgICAgICAgdmFsdWVzID0gW1xyXG4gICAgICAgICAgICAgICAgYFRJRCR7TWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMCl9YCxcclxuICAgICAgICAgICAgICAgIHNuaXBwZXQudmFsdWUsIG1lc3NhZ2UudmFsdWUsXHJcbiAgICAgICAgICAgICAgICB0YXNrX2ltcG9ydGFuY2UudmFsdWVcclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgc25pcHBldC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgICB0YXNrX2ltcG9ydGFuY2UudmFsdWUgPSBcIjBcIjtcclxuICAgICAgICAgICAgTS5Gb3JtU2VsZWN0LmluaXQodGFza19pbXBvcnRhbmNlKTtcclxuICAgICAgICAgICAgdmFyIHRhc2sgPSBuZXcgVGFzayguLi52YWx1ZXMpO1xyXG4gICAgICAgICAgICB0YXNrLmRpc3BsYXlUYXNrKHRvZG9fdGFza3MpO1xyXG4gICAgICAgICAgICB0YXNrLnNhdmVUb1N0b3JhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIE0udG9hc3QoeyBodG1sOiAnQW4gSW5wdXQgRmllbGQgaXMgZW1wdHknLCBjbGFzc2VzOiAncmVkJyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/app.ts\n");

/***/ }),

/***/ "./src/classes/Task.ts":
/*!*****************************!*\
  !*** ./src/classes/Task.ts ***!
  \*****************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Task\", function() { return Task; });\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nclass Task {\r\n    constructor(taskID, snippet, message, importanceClass) {\r\n        this.taskID = taskID;\r\n        this.snippet = snippet;\r\n        this.message = message;\r\n        this.importanceClass = importanceClass;\r\n        this.taskObject = {\r\n            \"id\": this.taskID,\r\n            \"snippet\": this.snippet,\r\n            \"message\": this.message,\r\n            \"importanceClass\": this.importanceClass\r\n        };\r\n    }\r\n    deleteTaskListener(taskCard, deleteButton) {\r\n        deleteButton.addEventListener('click', (e) => __awaiter(this, void 0, void 0, function* () {\r\n            e.preventDefault();\r\n            deleteButton.style.cursor = 'not-allowed';\r\n            this.fadeout(taskCard, 0.5);\r\n            yield this.sleep(600);\r\n            taskCard.remove();\r\n            this.deleteFromStorage();\r\n        }));\r\n    }\r\n    fadeout(element, s) {\r\n        element.style.transition = `${s}s linear opacity`;\r\n        element.style.opacity = '0';\r\n    }\r\n    sleep(ms) {\r\n        return new Promise(resolve => setTimeout(resolve, ms));\r\n    }\r\n    deleteFromStorage() {\r\n        let todos;\r\n        if (localStorage.getItem('todos') == null) {\r\n            todos = [];\r\n        }\r\n        else {\r\n            todos = JSON.parse(localStorage.getItem('todos'));\r\n        }\r\n        let index = todos.map((task) => { return task.id; }).indexOf(this.taskID);\r\n        todos.splice(index, 1);\r\n        localStorage.setItem(\"todos\", JSON.stringify(todos));\r\n    }\r\n    saveToStorage() {\r\n        let todos;\r\n        if (localStorage.getItem('todos') == null) {\r\n            todos = [];\r\n        }\r\n        else {\r\n            todos = JSON.parse(localStorage.getItem('todos'));\r\n        }\r\n        todos.push(this.taskObject);\r\n        localStorage.setItem('todos', JSON.stringify(todos));\r\n    }\r\n    displayTask(todo_tasks) {\r\n        // task_card = \r\n        // `<div class=\"col s12\">\r\n        // \t     <div class=\"card ${this.importanceClass}\">\r\n        //          <div class=\"card-content\">\r\n        //              <span class=\"card-title\">${this.snippet}</span>\r\n        //              <p>${this.message}</p>\r\n        //          </div>\r\n        // \t        <div class=\"card-action\">\r\n        //             <a>DELETE</a>\r\n        //          </div>\r\n        //      </div>\r\n        //  </div>`;\r\n        // Create Task Card Elements\r\n        const col = document.createElement('div');\r\n        col.setAttribute('class', 'col s12');\r\n        col.setAttribute('id', `${this.taskID}`);\r\n        const card = document.createElement('div');\r\n        card.setAttribute('class', `card ${this.importanceClass}`);\r\n        col.append(card);\r\n        const cardContent = document.createElement('div');\r\n        cardContent.setAttribute('class', 'card-content');\r\n        const cardAction = document.createElement('div');\r\n        cardAction.setAttribute('class', 'card-action');\r\n        card.append(cardContent, cardAction);\r\n        const cardTitle = document.createElement('span');\r\n        cardTitle.textContent = this.snippet;\r\n        cardTitle.setAttribute('class', 'card-title truncate');\r\n        const cardMessage = document.createElement('p');\r\n        cardMessage.textContent = this.message;\r\n        cardContent.append(cardTitle, cardMessage);\r\n        const deleteButton = document.createElement('a');\r\n        deleteButton.textContent = 'DELETE';\r\n        cardAction.append(deleteButton);\r\n        // Add to DOM\r\n        if (this.importanceClass == \"important\") {\r\n            todo_tasks.prepend(col);\r\n        }\r\n        else {\r\n            todo_tasks.append(col);\r\n        }\r\n        // Add delete listener\r\n        this.deleteTaskListener(col, deleteButton);\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9UYXNrLnRzPzY1NzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBLGlCQUFpQixTQUFJLElBQUksU0FBSTtBQUM3QiwyQkFBMkIsK0RBQStELGdCQUFnQixFQUFFLEVBQUU7QUFDOUc7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IscUZBQXFGO0FBQ3BIO0FBQ0EsS0FBSztBQUNMO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxzQ0FBc0MsRUFBRTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxnQkFBZ0IsRUFBRTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHFCQUFxQjtBQUN6RDtBQUNBLG1EQUFtRCxhQUFhO0FBQ2hFLDZCQUE2QixhQUFhO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxZQUFZO0FBQzlDO0FBQ0EsMkNBQTJDLHFCQUFxQjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL2NsYXNzZXMvVGFzay50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuZXhwb3J0IGNsYXNzIFRhc2sge1xyXG4gICAgY29uc3RydWN0b3IodGFza0lELCBzbmlwcGV0LCBtZXNzYWdlLCBpbXBvcnRhbmNlQ2xhc3MpIHtcclxuICAgICAgICB0aGlzLnRhc2tJRCA9IHRhc2tJRDtcclxuICAgICAgICB0aGlzLnNuaXBwZXQgPSBzbmlwcGV0O1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XHJcbiAgICAgICAgdGhpcy5pbXBvcnRhbmNlQ2xhc3MgPSBpbXBvcnRhbmNlQ2xhc3M7XHJcbiAgICAgICAgdGhpcy50YXNrT2JqZWN0ID0ge1xyXG4gICAgICAgICAgICBcImlkXCI6IHRoaXMudGFza0lELFxyXG4gICAgICAgICAgICBcInNuaXBwZXRcIjogdGhpcy5zbmlwcGV0LFxyXG4gICAgICAgICAgICBcIm1lc3NhZ2VcIjogdGhpcy5tZXNzYWdlLFxyXG4gICAgICAgICAgICBcImltcG9ydGFuY2VDbGFzc1wiOiB0aGlzLmltcG9ydGFuY2VDbGFzc1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBkZWxldGVUYXNrTGlzdGVuZXIodGFza0NhcmQsIGRlbGV0ZUJ1dHRvbikge1xyXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLnN0eWxlLmN1cnNvciA9ICdub3QtYWxsb3dlZCc7XHJcbiAgICAgICAgICAgIHRoaXMuZmFkZW91dCh0YXNrQ2FyZCwgMC41KTtcclxuICAgICAgICAgICAgeWllbGQgdGhpcy5zbGVlcCg2MDApO1xyXG4gICAgICAgICAgICB0YXNrQ2FyZC5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5kZWxldGVGcm9tU3RvcmFnZSgpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIGZhZGVvdXQoZWxlbWVudCwgcykge1xyXG4gICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbiA9IGAke3N9cyBsaW5lYXIgb3BhY2l0eWA7XHJcbiAgICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgfVxyXG4gICAgc2xlZXAobXMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcbiAgICB9XHJcbiAgICBkZWxldGVGcm9tU3RvcmFnZSgpIHtcclxuICAgICAgICBsZXQgdG9kb3M7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpID09IG51bGwpIHtcclxuICAgICAgICAgICAgdG9kb3MgPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBpbmRleCA9IHRvZG9zLm1hcCgodGFzaykgPT4geyByZXR1cm4gdGFzay5pZDsgfSkuaW5kZXhPZih0aGlzLnRhc2tJRCk7XHJcbiAgICAgICAgdG9kb3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvZG9zXCIsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XHJcbiAgICB9XHJcbiAgICBzYXZlVG9TdG9yYWdlKCkge1xyXG4gICAgICAgIGxldCB0b2RvcztcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0b2RvcyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9kb3MucHVzaCh0aGlzLnRhc2tPYmplY3QpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSk7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5VGFzayh0b2RvX3Rhc2tzKSB7XHJcbiAgICAgICAgLy8gdGFza19jYXJkID0gXHJcbiAgICAgICAgLy8gYDxkaXYgY2xhc3M9XCJjb2wgczEyXCI+XHJcbiAgICAgICAgLy8gXHQgICAgIDxkaXYgY2xhc3M9XCJjYXJkICR7dGhpcy5pbXBvcnRhbmNlQ2xhc3N9XCI+XHJcbiAgICAgICAgLy8gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgIC8vICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmQtdGl0bGVcIj4ke3RoaXMuc25pcHBldH08L3NwYW4+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgIDxwPiR7dGhpcy5tZXNzYWdlfTwvcD5cclxuICAgICAgICAvLyAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAvLyBcdCAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uXCI+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPGE+REVMRVRFPC9hPlxyXG4gICAgICAgIC8vICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIC8vICAgICAgPC9kaXY+XHJcbiAgICAgICAgLy8gIDwvZGl2PmA7XHJcbiAgICAgICAgLy8gQ3JlYXRlIFRhc2sgQ2FyZCBFbGVtZW50c1xyXG4gICAgICAgIGNvbnN0IGNvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbCBzMTInKTtcclxuICAgICAgICBjb2wuc2V0QXR0cmlidXRlKCdpZCcsIGAke3RoaXMudGFza0lEfWApO1xyXG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBgY2FyZCAke3RoaXMuaW1wb3J0YW5jZUNsYXNzfWApO1xyXG4gICAgICAgIGNvbC5hcHBlbmQoY2FyZCk7XHJcbiAgICAgICAgY29uc3QgY2FyZENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjYXJkQ29udGVudC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NhcmQtY29udGVudCcpO1xyXG4gICAgICAgIGNvbnN0IGNhcmRBY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjYXJkQWN0aW9uLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2FyZC1hY3Rpb24nKTtcclxuICAgICAgICBjYXJkLmFwcGVuZChjYXJkQ29udGVudCwgY2FyZEFjdGlvbik7XHJcbiAgICAgICAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGNhcmRUaXRsZS50ZXh0Q29udGVudCA9IHRoaXMuc25pcHBldDtcclxuICAgICAgICBjYXJkVGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdjYXJkLXRpdGxlIHRydW5jYXRlJyk7XHJcbiAgICAgICAgY29uc3QgY2FyZE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgY2FyZE1lc3NhZ2UudGV4dENvbnRlbnQgPSB0aGlzLm1lc3NhZ2U7XHJcbiAgICAgICAgY2FyZENvbnRlbnQuYXBwZW5kKGNhcmRUaXRsZSwgY2FyZE1lc3NhZ2UpO1xyXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnREVMRVRFJztcclxuICAgICAgICBjYXJkQWN0aW9uLmFwcGVuZChkZWxldGVCdXR0b24pO1xyXG4gICAgICAgIC8vIEFkZCB0byBET01cclxuICAgICAgICBpZiAodGhpcy5pbXBvcnRhbmNlQ2xhc3MgPT0gXCJpbXBvcnRhbnRcIikge1xyXG4gICAgICAgICAgICB0b2RvX3Rhc2tzLnByZXBlbmQoY29sKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRvZG9fdGFza3MuYXBwZW5kKGNvbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEFkZCBkZWxldGUgbGlzdGVuZXJcclxuICAgICAgICB0aGlzLmRlbGV0ZVRhc2tMaXN0ZW5lcihjb2wsIGRlbGV0ZUJ1dHRvbik7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/classes/Task.ts\n");

/***/ })

/******/ });