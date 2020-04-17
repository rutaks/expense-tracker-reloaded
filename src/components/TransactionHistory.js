import React, { useContext } from 'react';
import TransactionItem from './TransactionItem';
import { GlobalContext } from '../context/GlobalState';

export default function TransactionHistory() {
  const { transactions } = useContext(GlobalContext);
  return (
    <div>
      <h3>Transaction History</h3>
      {transactions.length < 1 && (
        <center>
          <small>No Transaction Found</small>
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
