import App from './App';
import React from 'react';
import lightTheme from './theme';
import { Provider } from 'react-redux';
import { store } from './services/store';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </Provider>
);
