import { randomUUID, UUID } from "crypto";
import { TodoListT, TodoServiceI } from "../models";
import _ from "lodash";

class TodoService implements TodoServiceI {
    private todos: TodoListT = []

    getTodo = (): TodoListT => {
        return this.todos
    };

    addTodo = (text: string): TodoListT => {
        this.todos.push({
            id: randomUUID(),
            text,
            complete: false
        })
        return this.todos
    };

    updateTodoById = (id: UUID): TodoListT => {
        this.todos = this.todos.map(task => (
            !_.isEqual(task.id, id) ? task : { ...task, complete: !task.complete }
        ))
        return this.todos
    }

    deleteTodoById = (id: UUID): TodoListT => {
        this.todos = this.todos.filter(task => !_.isEqual(task.id, id))
        return this.todos
    }
}

export default TodoService