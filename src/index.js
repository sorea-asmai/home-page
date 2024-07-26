import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import global styles
import App from './App'; // Import the main App component
import reportWebVitals from './reportWebVitals'; // Import performance measurement

// Render the App component into the DOM element with ID 'root'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to measure performance in your app, you can pass a function
// to log results (e.g., reportWebVitals(console.log))
// or send them to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
