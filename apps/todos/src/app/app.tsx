import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { AppBar, Todo, NewTodo } from './components';
import { QUERY_TODOS } from './queries/todos';

export const App = () => {
  const { loading, data } = useQuery(QUERY_TODOS);

  console.log('app', data);

  return (
    <div className="app">
      <AppBar />
      <Container maxWidth="sm" className="listContainer">
        <Card>
          <CardHeader title="What you have to do" />
          <NewTodo />
          <List>
            {!loading &&
              data.todos.map(todo => <Todo {...todo} key={todo.id} />)}
          </List>
        </Card>
      </Container>
    </div>
  );
};

export default App;
