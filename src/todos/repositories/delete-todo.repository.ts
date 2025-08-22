import { NotFoundException } from "@nestjs/common";
import { todosStorage } from "./todos.storage";

export class DeleteTodoRepository {
  remove(id: string): void {
    const index = todosStorage.findIndex(todo => todo.id === id);

    if (index === -1) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }

    todosStorage.splice(index, 1);
  }
}