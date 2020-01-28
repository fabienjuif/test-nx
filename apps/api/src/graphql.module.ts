import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    TodosModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    })
  ]
})
export class ApplicationModule {}
