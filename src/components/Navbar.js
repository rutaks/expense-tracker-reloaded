import React, { useContext } from 'react';
import { TransactionContext } from '../context/TransactionState';
import { Link } from 'react-router-dom';

export default function Navbar() {
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
      <nav
        class={`navbar navbar-default navbar-dark ${
          incomePercent < expensePercent ? 'bg-danger' : 'bg-dark'
        }`}
      >
        <div class="mx-auto order-0">
          <a class="navbar-brand" href="#">
            <img
              src="../logo.png"
              style={{ height: '50px', width: '50px' }}
              alt="logo"
            />
          </a>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <Link style={{ color: 'white' }} to="/logout">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
