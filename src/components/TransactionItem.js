import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import ReactTimeAgo from 'react-time-ago';
import 'font-awesome/css/font-awesome.min.css';
import { Dialogs as dialog } from '../utils/Dialogs';

export default function TransactionItem({ transaction }) {
  const { deleteByTransactionId } = useContext(GlobalContext);

  function deleteTransaction(transactionId) {
    deleteByTransactionId(transactionId);
    dialog.displaySuccessMessage('Transaction Removed');
  }

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
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        <i className="fa fa-remove"></i>
      </button>
    </li>
  );
}
