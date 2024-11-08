// todo.model.ts
import { ITodo } from "./ITodo";

export class Todo implements ITodo {
    id: string;
    text: string;
    complete: boolean;

    constructor(text: string, complete: boolean = false) {
        this.id = this.generateUUID();
        this.text = text;
        this.complete = complete;
    }

    // Mètode per generar un identificador únic per a cada tasca
    private generateUUID(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            const r = (Math.random() * 16) | 0;
            const v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }
}
