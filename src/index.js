import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './services/store';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
