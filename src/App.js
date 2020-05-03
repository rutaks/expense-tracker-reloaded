import React, { useContext, Fragment } from 'react';
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
        <Fragment>
          <Header />
          <Balance />
          <AccountStatement />
          <AddTransactionForm />
          <TransactionHistory />
        </Fragment>
      </div>
    </GlobalProvider>
  );
}

export default App;
