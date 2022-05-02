import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TransactionProvider } from './context/TransactionsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //envolver toda la aplicacion con transaccionProvider para que tenga acceso a los datos
  <TransactionProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
