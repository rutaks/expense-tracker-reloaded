import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function AccountStatement() {
  let { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.amount);
  let income = amount
    .filter((item) => item > 1)
    .reduce((acc, currVal) => (acc += currVal), 0)
    .toFixed(2);
  let expense = amount
    .filter((item) => item < 1)
    .reduce((acc, currVal) => (acc += currVal), 0)
    .toFixed(2);
  return (
    <div className="inc-exp-container">
      <div>
        <h6>Income</h6>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h6>Expense</h6>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
}
