import { Request, Response } from "express";
import { TodoControllerI, TodoServiceI } from "../models";
import { UUID } from "crypto";


class TodoController implements TodoControllerI {
    private todoService: TodoServiceI;

    constructor(todoService: TodoServiceI) {
        this.todoService = todoService
    }

    getTodo = (request: Request, response: Response): void => {
        const todos = this.todoService.getTodo()
        response.json(todos)
    }

    addTodo = (request: Request, response: Response): void => {
        const { body } = request
        const todos = this.todoService.addTodo(body.text as string)
        response.json(todos)
    };

    updateTodoById = (request: Request, response: Response): void => {
        const { params } = request
        const todos = this.todoService.updateTodoById(params.id as UUID)
        response.json(todos)
    }

    deleteTodoById = (request: Request, response: Response): void => {
        const { params } = request
        const todos = this.todoService.deleteTodoById(params.id as UUID)
        response.json(todos)
    }
}

export default TodoController