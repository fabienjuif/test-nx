import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TodosService } from './todos.service';
import { Todo, InputTodo, InputUpdateTodo } from '../interfaces/todo';

@Resolver(() => Todo)
export class TodosResolver {
  constructor(private readonly todosService: TodosService) {}

  @Query(() => [Todo], { name: 'todos' })
  getTodos() {
    return this.todosService.findAll();
  }

  @Mutation(() => Todo)
  addTodo(@Args('todo') todo: InputTodo) {
    return this.todosService.create(todo as Todo);
  }

  @Mutation(() => Todo)
  updateTodo(@Args('id') id: string, @Args('todo') todo: InputUpdateTodo) {
    return this.todosService.update({ ...todo, id });
  }
}
