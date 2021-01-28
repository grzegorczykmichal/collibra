import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App, root } from './application';
import './index.css';
import { Providers } from './infrastucture';

ReactDOM.render(
  <React.StrictMode>
    <Providers root={root}>
      <Router>
        <App />
      </Router>
    </Providers>
  </React.StrictMode>,
  document.getElementById('root'),
);
