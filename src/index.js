import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./containers/App.js";
import reportWebVitals from './reportWebVitals';
import "tachyons";

const root = ReactDOM.createRoot (
  document.getElementById("root")
);
root.render(
  <React.StrictMode>
  <div>
    <App />
  </div>
  </React.StrictMode>
);


reportWebVitals();
