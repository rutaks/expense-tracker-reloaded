import React, { Fragment, useContext, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Balance from '../components/Balance';
import { TransactionContext } from '../context/TransactionState';
import AccountStatement from '../components/AccountStatement';
import TransactionHistory from '../components/TransactionHistory';
import AddTransactionForm from '../components/AddTransactionForm';
export default function Dashboard() {
  const { getTransactions } = useContext(TransactionContext);
  useEffect(() => {
    getTransactions();
  }, []);
  return (
    <div>
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
    </div>
  );
}
