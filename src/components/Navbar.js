import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function Navbar() {
  let { transactions } = useContext(GlobalContext);
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
      <nav
        class={`navbar navbar-expand-lg navbar-dark ${
          incomePercent < expensePercent ? 'bg-danger' : 'bg-dark'
        }`}
      >
        <a class="navbar-brand" href="#">
          <img
            src="../logo.png"
            style={{ height: '30px', width: '30px' }}
            alt="logo"
          />
        </a>
      </nav>
    </div>
  );
}
