import React, { useCallback, useRef, useEffect } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { wrapSubmit } from 'from-form-submit';
import TextField from '@material-ui/core/TextField';
import { QUERY_TODOS, ADD_TODO } from '../queries/todos';

const NewTodo = () => {
  const formRef = useRef(undefined);
  const [addTodo, { loading }] = useMutation(ADD_TODO);

  const onSubmit = useCallback(
    (todo, e) => {
      addTodo({
        variables: { todo },
        update: (cache, { data: { addTodo } }) => {
          const data: { todos: [] } = cache.readQuery({ query: QUERY_TODOS });
          cache.writeQuery({
            query: QUERY_TODOS,
            data: { todos: [...data.todos, addTodo] }
          });
        }
      });
    },
    [addTodo]
  );

  useEffect(() => {
    if (loading) return;
    if (!formRef.current) return;
    formRef.current.reset();
  }, [formRef, loading]);

  return (
    <form
      ref={formRef}
      noValidate
      autoComplete="off"
      className="newTodo"
      onSubmit={wrapSubmit(onSubmit)}
    >
      <TextField
        name="title"
        id="standard-basic"
        label="Speak your mind"
        variant="outlined"
        fullWidth
      />
    </form>
  );
};

export default NewTodo;
