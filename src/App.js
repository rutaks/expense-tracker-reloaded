import React from 'react';
import logo from './logo.png';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import AccountStatement from './components/AccountStatement';
import TransactionHistory from './components/TransactionHistory';
import AddTransactionForm from './components/AddTransactionForm';
import { GlobalProvider } from './context/GlobalState';
import Navbar from './components/Navbar';

function App() {
  return (
    <GlobalProvider>
      <Navbar />
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
