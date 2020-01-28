import React, { useCallback } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import { MdRemove as RemoveIcon } from 'react-icons/md';

const UPDATE_TODO = gql`
  mutation UpdateTodo($id: String!, $todo: InputUpdateTodo!) {
    updateTodo(id: $id, todo: $todo) {
      id
      checked
      title
    }
  }
`;

const Todo = ({
  id,
  title,
  checked
}: {
  id: string;
  checked?: boolean;
  title: string;
}) => {
  const [updateTodo, { loading }] = useMutation(UPDATE_TODO);

  const onToggleChecked = useCallback(
    e => {
      e.preventDefault();

      if (loading) return;
      updateTodo({ variables: { id, todo: { checked: !checked } } });
    },
    [checked, loading, id, updateTodo]
  );

  return (
    <ListItem button onClick={onToggleChecked}>
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={checked}
          onChange={onToggleChecked}
          disableRipple
          value="primary"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </ListItemIcon>
      <ListItemText primary={title} />
      <ListItemSecondaryAction>
        <IconButton>
          <RemoveIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default Todo;
