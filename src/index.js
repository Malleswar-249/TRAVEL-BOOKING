// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider, createTheme, CssBaseline, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2', // Blue
    },
    secondary: {
      main: '#f50057', // Pink
    },
    background: {
      default: '#f4f6f8',
    },
  },
  typography: {
    fontFamily: `'Roboto', 'Segoe UI', 'Helvetica Neue', sans-serif`,
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h6: { fontWeight: 500 },
    button: { textTransform: 'none' },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'body': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        '*': {
          boxSizing: 'inherit',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> { }
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
