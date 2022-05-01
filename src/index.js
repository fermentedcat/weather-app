import React from 'react';
import ReactDOM from 'react-dom/client';
import { SnackBarProvider } from './utils/SnackBarContext';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SnackBarProvider>
      <App />
    </SnackBarProvider>
  </React.StrictMode>
);