import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';
import "antd/dist/reset.css"
import { ContextProvider } from './context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextProvider>
    <App />
    </ContextProvider>
  </React.StrictMode>
);



