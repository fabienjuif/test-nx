import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todo } from '../interfaces/todo';

class UnknownTodo extends Error {
  todoId: string;

  constructor(message: string, todoId: string) {
    super(message);
    this.todoId = todoId;
  }
}

@Injectable()
export class TodosService {
  constructor(@InjectModel('Todo') private readonly TodoModel: Model<Todo>) {}

  create(todo: Todo): Promise<Todo> {
    const createdTodo = new this.TodoModel(todo);
    return createdTodo.save();
  }

  findAll(): Promise<Todo[]> {
    return this.TodoModel.find().exec();
  }

  async update(todo: Todo): Promise<Todo> {
    const updatedTodo = await this.TodoModel.findOneAndUpdate(
      { _id: todo.id },
      todo,
      { omitUndefined: true, new: true }
    ).exec();

    if (!updatedTodo) throw new UnknownTodo('Unknown todo', todo.id);

    return updatedTodo;
  }
}
