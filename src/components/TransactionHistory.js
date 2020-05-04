import React, { useContext, useEffect } from 'react';
import TransactionItem from './TransactionItem';
import { TransactionContext } from '../context/TransactionState';
import { GridSpinner } from 'react-spinners-kit';

export default function TransactionHistory() {
  const { transactions, isFetching } = useContext(TransactionContext);
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
