import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App, root } from './application';
import './index.css';
import { ReactQueryProvider, ReduxProvider } from './infrastucture';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider root={root}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
