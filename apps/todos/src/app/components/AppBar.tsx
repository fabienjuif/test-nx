import React from 'react';
import MAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { MdMenu as MenuIcon } from 'react-icons/md';
import Typography from '@material-ui/core/Typography';

const AppBar = () => {
  return (
    <MAppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Todos</Typography>
      </Toolbar>
    </MAppBar>
  );
};

export default AppBar;
