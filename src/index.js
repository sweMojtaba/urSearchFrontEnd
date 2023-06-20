import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import "bootstrap/dist/js/bootstrap.bundle.min.js"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./shared-styles/bootstrap-customized.scss";
import './shared-styles/buttons.scss';
import './shared-styles/form.scss';
import './shared-styles/index.scss';
import './shared-styles/layout.scss';
import './shared-styles/text.scss';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
