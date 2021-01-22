import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ReactQueryProvider } from './infrastucture/react-query';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReactQueryProvider>
        <App />
      </ReactQueryProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
