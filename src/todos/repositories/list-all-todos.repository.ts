import { NotFoundException } from "@nestjs/common";
import { Todo } from "../entities/todo.entity";
import { todosStorage } from "./todos.storage";

export class ListAllTodosRepository {
  findAll(): Todo[] {
    if (todosStorage.length === 0) {
      throw new NotFoundException("No todos found");
    }

    return todosStorage;
  }
}