import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/global.css';

import Projetos from './pages/projetos';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Projetos />
  </React.StrictMode>
);

