import { NotFoundException } from "@nestjs/common";
import { Todo } from "../entities/todo.entity";
import { todosStorage } from "./todos.storage";

export class UpdateTodoRepository {
  update(id: string, updateTodo: Omit<Todo, 'id'>): Todo {
    const todo = todosStorage.find(todo => todo.id === id);

    if (!todo) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }

    Object.assign(todo, updateTodo);
    return todo;
  }
}