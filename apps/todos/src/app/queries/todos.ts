import { gql } from 'apollo-boost';

export const QUERY_TODOS = gql`
  {
    todos {
      id
      title
      checked
    }
  }
`;

export const ADD_TODO = gql`
  mutation AddTodo($todo: InputTodo!) {
    addTodo(todo: $todo) {
      id
      title
      checked
    }
  }
`;
