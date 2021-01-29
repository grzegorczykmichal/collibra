import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App, root } from './application';
import './index.css';
import { Providers } from './infrastucture';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

ReactDOM.render(
  // <React.StrictMode>
  <Providers root={root}>
    <Router>
      <App />
    </Router>
  </Providers>,
  // </React.StrictMode>,
  document.getElementById('root'),
);
