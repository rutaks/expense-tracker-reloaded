import React from 'react';
import TransactionItem from './TransactionItem';

export default function TransactionHistory() {
  return (
    <div>
      <h3>Your Transaction History</h3>
      <ul className="list">
        <TransactionItem />
        <TransactionItem />
        <TransactionItem />
      </ul>
    </div>
  );
}
