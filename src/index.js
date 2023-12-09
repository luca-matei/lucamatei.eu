import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
import './assets/css/index.css';

// Get the element to attach the root to
const container = document.getElementById('app');
// Create a root
const root = createRoot(container);

// Render the App component to the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
