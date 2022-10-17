import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    backgroundColor: theme.palette.background.default,
    display: 'grid',
    position: 'fixed',
    inset: 0,
    gridTemplateColumns: '200px 1fr',
  },
  pageContainer: {
    gridArea: '1 / 2 / 2 / 3',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(2),
    gap: theme.spacing(2),
  },
}));


const App = () => {
  const classes = useStyles();
  return (
    <div>
      hello world
    </div>
  )
}

export default App;
