import { Router } from "express";
import TodoService from "../services";
import TodoController from "../controller";

const router = Router()
const todoService = new TodoService()
const todoController = new TodoController(todoService)

/**
 * Routes
 */
router.get('/', todoController.getTodo)
router.post('/', todoController.addTodo)
router.patch('/:id', todoController.updateTodoById)
router.delete('/:id', todoController.deleteTodoById)

export { router as TodoRouter }