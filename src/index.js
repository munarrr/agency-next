import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Layout from "./components/layout/Layout";
import './assets/boxicons-2.0.7/css/boxicons.css'
import './assets/css/grid.css'
import './assets/css/index.css'

document.title = 'Hello'

ReactDOM.render(
  <React.StrictMode>
   <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
