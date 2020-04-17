import React from 'react';
import ReactTimeAgo from 'react-time-ago';
import en from 'javascript-time-ago/locale/en';
import 'font-awesome/css/font-awesome.min.css';

export default function TransactionItem({ transaction }) {
  return (
    <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
      {transaction.description}
      <span>
        <div className="col-lg">
          <div class="row">
            <b>{`${transaction.amount} ${transaction.currency}`} </b>
          </div>

          <div class="row">
            <small>
              <ReactTimeAgo date={transaction.date} />
            </small>
          </div>
        </div>
      </span>
      <button className="delete-btn">
        <i className="fa fa-remove"></i>
      </button>
    </li>
  );
}
