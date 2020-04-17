import React from 'react';

export default function AccountStatement() {
  let income = 1200.0;
  let expense = 3000.0;
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
