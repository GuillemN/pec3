import { ITodo } from "../models/ITodo";

// IService.ts
export interface IService {
    addTodo(text: string): void;
    editTodo(id: string, updatedText: string): void;
    deleteTodo(id: string): void;
    toggleTodo(id: string): void;
    getTodos(): ITodo[];
}
