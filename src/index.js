import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ModalProvider from './Providers/ModalProvider';
import ToastProvider from './Providers/ToastProvider';
import UserProvider from './Providers/UserProvider';

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider>
      <ModalProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </ModalProvider>
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
