import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionState';

export default function Balance() {
  const { transactions } = useContext(TransactionContext);
  const transactionAmountList = transactions.map(
    (transaction) => transaction.amount
  );
  let total = transactionAmountList
    .reduce((acc, currVal) => acc + currVal, 0)
    .toFixed(2);

  return (
    <div>
      <br />
      <h5>Your Balance</h5>
      <h2>Rwf {total}</h2>
    </div>
  );
}
