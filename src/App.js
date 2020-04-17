import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import AccountStatement from './components/AccountStatement';
import TransactionHistory from './components/TransactionHistory';
import AddTransactionForm from './components/AddTransactionForm';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <Balance />
        <AccountStatement />
        <AddTransactionForm />
        <TransactionHistory />
      </div>
    </GlobalProvider>
  );
}

export default App;
