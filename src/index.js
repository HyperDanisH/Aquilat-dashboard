import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UsefulState } from './context';

const root = ReactDOM.createRoot(document.getElementById('app-mount'));
root.render(
  <React.StrictMode>
    <UsefulState>
      <App />
    </UsefulState>
  </React.StrictMode>
);

