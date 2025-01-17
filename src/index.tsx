import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import Shell from './shell/shell';
import { AuthProvider } from './context/authContext';
import { AppDataProvider } from './context/appDataContext';

import { initializeIcons } from '@fluentui/react/lib/Icons';
initializeIcons();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <AppDataProvider>
          <Shell />
        </AppDataProvider>
      </AuthProvider>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);
