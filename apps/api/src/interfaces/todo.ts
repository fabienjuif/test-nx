import { Field, Int, ObjectType, InputType } from 'type-graphql';

// FIXME: Can we use some inheritance?

@InputType()
export class InputTodo {
  @Field()
  title: string;

  @Field()
  checked?: boolean = false;
}

@ObjectType()
export class Todo {
  @Field()
  id: string;

  @Field({ nullable: false })
  title?: string;

  @Field({ nullable: false })
  checked?: boolean;
}

@InputType()
export class InputUpdateTodo {
  @Field({ nullable: true }) // FIXME: woot? I have to set nullable true ??? my type is "title?"
  title?: string;

  @Field()
  checked?: boolean;
}
