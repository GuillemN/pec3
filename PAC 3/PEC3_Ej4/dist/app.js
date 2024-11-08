import { TodoService } from "./services/todo.service.js";
import { TodoController } from "./controllers/todo.controller.js";
import { TodoView } from "./views/todo.views.js";
var app = new TodoController(new TodoService(), new TodoView());
