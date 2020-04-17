import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import AccountStatement from './components/AccountStatement';
import TransactionHistory from './components/TransactionHistory';
import AddTransactionForm from './components/AddTransactionForm';

function App() {
  return (
    <div className="container">
      <Header />
      <Balance />
      <AccountStatement />
      <AddTransactionForm />
      <TransactionHistory />
    </div>
  );
}

export default App;
