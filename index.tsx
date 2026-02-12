
import React from 'react';
import ReactDOM from 'react-dom/client';
// Fix: Change react-router-dom import to react-router to resolve missing HashRouter export
import { HashRouter } from 'react-router';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);