import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function Balance() {
  const { transactions } = useContext(GlobalContext);
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
