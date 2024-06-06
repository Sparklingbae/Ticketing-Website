export { default as Navbar } from './Navbar';
export { default as EventList } from './EventList';
export { default as Footer } from './Footer';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);