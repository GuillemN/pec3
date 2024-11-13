var Todo = /** @class */ (function () {
    function Todo(text, complete) {
        if (complete === void 0) { complete = false; }
        this.id = this.generateUUID();
        this.text = text;
        this.complete = complete;
    }
    // Mètode per generar un identificador únic per a cada tasca
    Todo.prototype.generateUUID = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (Math.random() * 16) | 0;
            var v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    };
    return Todo;
}());
export { Todo };
