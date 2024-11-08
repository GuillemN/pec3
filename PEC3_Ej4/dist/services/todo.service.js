var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Todo } from "../models/todo.model.js";
var TodoService = /** @class */ (function () {
    function TodoService() {
        this.todos = [];
    }
    TodoService.prototype.addTodo = function (text) {
        var todo = new Todo(text);
        this.todos.push(todo);
        this.onTodoListChanged(this.todos);
    };
    TodoService.prototype.editTodo = function (id, updatedText) {
        this.todos = this.todos.map(function (todo) {
            return todo.id === id ? __assign(__assign({}, todo), { text: updatedText }) : todo;
        });
        this.onTodoListChanged(this.todos);
    };
    TodoService.prototype.deleteTodo = function (id) {
        this.todos = this.todos.filter(function (todo) { return todo.id !== id; });
        this.onTodoListChanged(this.todos);
    };
    TodoService.prototype.toggleTodo = function (id) {
        this.todos = this.todos.map(function (todo) {
            return todo.id === id ? __assign(__assign({}, todo), { complete: !todo.complete }) : todo;
        });
        this.onTodoListChanged(this.todos);
    };
    TodoService.prototype.getTodos = function () {
        return this.todos;
    };
    TodoService.prototype.bindTodoListChanged = function (callback) {
        this.onTodoListChanged = callback;
    };
    TodoService.prototype.onTodoListChanged = function (todos) { };
    return TodoService;
}());
export { TodoService };
