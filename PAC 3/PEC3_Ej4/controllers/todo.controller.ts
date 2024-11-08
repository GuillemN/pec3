import { ITodo } from "../models/ITodo.js";
import { TodoService } from "../services/todo.service.js";
import { TodoView } from "../views/todo.views.js";

export class TodoController {
    private service: TodoService;
    private view: TodoView;

    constructor(service: TodoService, view: TodoView) {
        this.service = service;
        this.view = view;

        this.service.bindTodoListChanged(this.onTodoListChanged);
        this.view.bindAddTodo(this.handleAddTodo);
        this.view.bindEditTodo(this.handleEditTodo);
        this.view.bindDeleteTodo(this.handleDeleteTodo);
        this.view.bindToggleTodo(this.handleToggleTodo);

        this.onTodoListChanged(this.service.getTodos());
    }

    private onTodoListChanged = (todos: ITodo[]) => {
        this.view.displayTodos(todos);
    };

    private handleAddTodo = (todoText: string) => {
        this.service.addTodo(todoText);
    };

    private handleEditTodo = (id: string, todoText: string) => {
        this.service.editTodo(id, todoText);
    };

    private handleDeleteTodo = (id: string) => {
        this.service.deleteTodo(id);
    };

    private handleToggleTodo = (id: string) => {
        this.service.toggleTodo(id);
    };
}
