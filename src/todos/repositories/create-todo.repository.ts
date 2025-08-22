import { ConflictException } from "@nestjs/common";
import { Todo } from "../entities/todo.entity";
import { todosStorage } from "./todos.storage";
import cuid from "cuid";

export class CreateTodoRepository {
  create(todo: Omit<Todo, 'id'>): Todo {
    const newTodo: Todo = { id: cuid(), ...todo };

    const existingTodo = todosStorage.find(t => t.title === newTodo.title);
    if (existingTodo) {
      throw new ConflictException(`Todo with title "${newTodo.title}" already exists`);
    }

    todosStorage.push(newTodo);
    return newTodo;
  }
}