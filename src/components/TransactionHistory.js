import React, { useContext, useEffect } from 'react';
import TransactionItem from './TransactionItem';
import { GlobalContext } from '../context/GlobalState';
import { GridSpinner } from 'react-spinners-kit';

export default function TransactionHistory() {
  const { transactions, getTransactions, isFetching } = useContext(
    GlobalContext
  );

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <div>
      <h3>Transaction History</h3>
      {transactions.length < 1 && !isFetching && (
        <center>
          <small>No Transaction Found</small>
        </center>
      )}
      {isFetching && (
        <center>
          <GridSpinner color="gray" />
        </center>
      )}
      <ul className="list">
        {transactions.map((transaction) => (
          <TransactionItem transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}
