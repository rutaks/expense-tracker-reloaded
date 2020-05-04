import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionState';

export default function AccountStatement() {
  let { transactions } = useContext(TransactionContext);
  const amount = transactions.map((transaction) => transaction.amount);
  let income = amount
    .filter((item) => item > 1)
    .reduce((acc, currVal) => (acc += currVal), 0)
    .toFixed(2);
  let expense = amount
    .filter((item) => item < -1)
    .reduce((acc, currVal) => (acc += currVal), 0)
    .toFixed(2);
  const totalAmount = Math.abs(income) + Math.abs(expense);
  let incomePercent = (100 * income) / totalAmount;
  let expensePercent = (100 * Math.abs(expense)) / totalAmount;

  return (
    <div>
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
      {totalAmount !== 0 && (
        <div class="progress">
          <div
            class="progress-bar bg-success progress-bar-striped progress-bar-animated"
            role="progressbar"
            style={{ width: `${incomePercent}%` }}
            aria-valuenow="30"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
          <div
            class="progress-bar bg-danger progress-bar-striped progress-bar-animated"
            role="progressbar"
            style={{ width: `${expensePercent}%` }}
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      )}
    </div>
  );
}
