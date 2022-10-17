import React from 'react';
import { render } from "react-dom";
import { createTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import App from './App';

const customTheme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#896beb',
    },
    background: {
      default: '#17121b',
      paper: '#1d1920',
    }
  }
});


const container = document.getElementById('app');

render(
  <ThemeProvider theme={customTheme}>
    <CssBaseline/>
    <App/>
  </ThemeProvider>,
  container,
);

