import { NotFoundException } from "@nestjs/common";
import { Todo } from "../entities/todo.entity";
import { todosStorage } from "./todos.storage";

export class ListTodoByIdRepository {
  findOne(id: string): Todo {
    const todo = todosStorage.find(todo => todo.id === id);

    if (!todo) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }

    return todo;
  }
}