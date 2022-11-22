// Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';
import Snowfall from 'react-snowfall';

// Components
import AdventApp from './AdventApp';

// CSS and assets
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AdventApp />
  </React.StrictMode>
);
