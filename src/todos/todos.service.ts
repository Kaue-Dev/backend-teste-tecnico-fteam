import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { Todo } from './entities/todo.entity';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { CreateTodoRepository } from './repositories/create-todo.repository';
import { ListAllTodosRepository } from './repositories/list-all-todos.repository';
import { ListTodoByIdRepository } from './repositories/list-todo-by-id.repository';
import { UpdateTodoRepository } from './repositories/update-todo.repository';
import { DeleteTodoRepository } from './repositories/delete-todo.repository';

@Injectable()
export class TodosService {
  private readonly createTodoRepository = new CreateTodoRepository();
  private readonly listAllTodosRepository = new ListAllTodosRepository();
  private readonly listTodoByIdRepository = new ListTodoByIdRepository();
  private readonly updateTodoRepository = new UpdateTodoRepository();
  private readonly deleteTodoRepository = new DeleteTodoRepository();

  create(createTodoDto: CreateTodoDto): Todo {
    return this.createTodoRepository.create({
      title: createTodoDto.title,
      description: createTodoDto.description ?? "",
      completed: createTodoDto.completed ?? false,
    })
  }

  findAll(): Todo[] {
    return this.listAllTodosRepository.findAll();
  }

  findOne(id: string): Todo {
    return this.listTodoByIdRepository.findOne(id);
  }

  update(id: string, updateTodoDto: UpdateTodoDto): Todo {
    return this.updateTodoRepository.update(id, updateTodoDto);
  }

  remove(id: string): void {
    return this.deleteTodoRepository.remove(id);
  }
}
