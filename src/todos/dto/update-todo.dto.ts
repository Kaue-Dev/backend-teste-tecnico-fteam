import { IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class UpdateTodoDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  @IsBoolean()
  completed?: boolean = false;
}