// todo.service.ts
import { IService } from "./IService";
import { Todo } from "../models/todo.model";
import { ITodo } from "../models/ITodo";

export class TodoService implements IService {
    private todos: ITodo[] = [];

    addTodo(text: string): void {
        const todo: ITodo = new Todo(text);
        this.todos.push(todo);
        this.onTodoListChanged(this.todos);
    }

    editTodo(id: string, updatedText: string): void {
        this.todos = this.todos.map(todo =>
            todo.id === id ? { ...todo, text: updatedText } : todo
        );
        this.onTodoListChanged(this.todos);
    }

    deleteTodo(id: string): void {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.onTodoListChanged(this.todos);
    }

    toggleTodo(id: string): void {
        this.todos = this.todos.map(todo =>
            todo.id === id ? { ...todo, complete: !todo.complete } : todo
        );
        this.onTodoListChanged(this.todos);
    }

    getTodos(): ITodo[] {
        return this.todos;
    }

    bindTodoListChanged(callback: (todos: ITodo[]) => void): void {
        this.onTodoListChanged = callback;
    }

    private onTodoListChanged(todos: ITodo[]): void {}
}
