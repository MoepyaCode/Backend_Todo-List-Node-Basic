import { UUID } from "crypto";
import { Request, Response } from "express";

/**
 * Task Model
 */
interface TaskI {
    readonly id: UUID
    text: string
    complete: boolean
}

type TodoListT = TaskI[]

/**
 * Service Model
 */
interface TodoServiceI {
    getTodo: () => TodoListT
    addTodo: (text: string) => TodoListT
    updateTodoById: (id: UUID) => TodoListT
    deleteTodoById: (id: UUID) => TodoListT
}

/**
 * Controller Model
 */
type RequestHandler = (request: Request, response: Response) => void

interface TodoControllerI {
    getTodo: RequestHandler
    addTodo: RequestHandler
    updateTodoById: RequestHandler
    deleteTodoById: RequestHandler
}

export type {
    TaskI,
    TodoListT,
    TodoServiceI,
    TodoControllerI
}