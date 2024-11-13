import { Todo } from "../models/todo.model";
import { ITodo } from "../models/ITodo";

export class TodoView {
    private app: HTMLElement;
    private form: HTMLFormElement;
    private input: HTMLInputElement;
    private submitButton: HTMLButtonElement;
    private title: HTMLElement;
    private todoList: HTMLElement;
    private _temporaryTodoText: string = "";

    constructor() {
        this.app = this.getElement("#root");
        this.form = this.createElement("form") as HTMLFormElement;
        this.input = this.createElement("input") as HTMLInputElement;
        this.input.type = "text";
        this.input.placeholder = "Add todo";
        this.input.name = "todo";
        this.submitButton = this.createElement("button") as HTMLButtonElement;
        this.submitButton.textContent = "Submit";
        this.form.append(this.input, this.submitButton);
        this.title = this.createElement("h1");
        this.title.textContent = "Todos";
        this.todoList = this.createElement("ul", "todo-list");
        this.app.append(this.title, this.form, this.todoList);

        this._initLocalListeners();
    }

    // Implementació del mètode displayTodos per mostrar la llista de tasques
    public displayTodos(todos: ITodo[]): void {
        // Elimina tots els elements existents de la llista
        while (this.todoList.firstChild) {
            this.todoList.removeChild(this.todoList.firstChild);
        }

        // Mostra un missatge per defecte si no hi ha tasques
        if (todos.length === 0) {
            const p = this.createElement("p");
            p.textContent = "Nothing to do! Add a task?";
            this.todoList.append(p);
        } else {
            // Crea elements per a cada tasca
            todos.forEach(todo => {
                const li = this.createElement("li");
                li.id = todo.id;

                const checkbox = this.createElement("input") as HTMLInputElement;
                checkbox.type = "checkbox";
                checkbox.checked = todo.complete;

                const span = this.createElement("span");
                span.contentEditable = "true";
                span.classList.add("editable");

                if (todo.complete) {
                    const strike = this.createElement("s");
                    strike.textContent = todo.text;
                    span.append(strike);
                } else {
                    span.textContent = todo.text;
                }

                const deleteButton = this.createElement("button", "delete");
                deleteButton.textContent = "Delete";
                li.append(checkbox, span, deleteButton);

                this.todoList.append(li);
            });
        }
    }


    // Funció per a bindAddTodo
    public bindAddTodo(handler: (todoText: string) => void): void {
        this.form.addEventListener("submit", (event: Event) => {
            event.preventDefault();
            if (this.input.value) {
                handler(this.input.value);
                this.input.value = ""; // Reseteja el valor de l'input després d'afegir
            }
        });
    }

    // Funció per a bindDeleteTodo
    public bindDeleteTodo(handler: (id: string) => void): void {
        this.todoList.addEventListener("click", (event: Event) => {
            const target = event.target as HTMLElement;
            if (target.classList.contains("delete")) {
                const id = target.parentElement!.id; // Obté l'ID de la tasca
                handler(id);
            }
        });
    }

    public bindEditTodo(handler: (id: string, updatedText: string) => void): void {
        this.todoList.addEventListener("focusout", (event: Event) => {
            const target = event.target as HTMLElement;
            if (target.classList.contains("editable") && this._temporaryTodoText) {
                const id = target.parentElement!.id;
                handler(id, this._temporaryTodoText);
                this._temporaryTodoText = ""; // Reseteja el valor temporal després de l'edició
            }
        });
    }

    public bindToggleTodo(handler: (id: string) => void): void {
        this.todoList.addEventListener("change", (event: Event) => {
            const target = event.target as HTMLInputElement;
            if (target.type === "checkbox") {
                const id = target.parentElement!.id;
                handler(id);
            }
        });
    }

    private createElement(tag: string, className?: string): HTMLElement {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        return element;
    }

    private getElement(selector: string): HTMLElement {
        const element = document.querySelector(selector);
        if (!element) {
            throw new Error(`No element found with selector: ${selector}`);
        }
        return element as HTMLElement;
    }

    private _initLocalListeners(): void {
        this.todoList.addEventListener("input", (event: Event) => {
            const target = event.target as HTMLElement;
            if (target.classList.contains("editable")) {
                this._temporaryTodoText = target.innerText;
            }
        });
    }
}
