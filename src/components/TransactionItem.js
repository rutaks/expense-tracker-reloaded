import React, { useContext, Fragment, useState } from 'react';
import { TransactionContext } from '../context/TransactionState';
import ReactTimeAgo from 'react-time-ago';
import FadeIn from 'react-fade-in';
import 'font-awesome/css/font-awesome.min.css';
import { CircleSpinner } from 'react-spinners-kit';

export default function TransactionItem({ transaction }) {
  const { deleteByTransactionId, isDeleting } = useContext(TransactionContext);
  const [currentItem, setCurrentItem] = useState(false);
  let itemStatusStyle = transaction.amount > 0 ? 'plus' : 'minus';

  function deleteTransaction(transactionId) {
    setCurrentItem(true);
    deleteByTransactionId(transactionId);
  }

  if (isDeleting && currentItem) {
    itemStatusStyle = 'pending';
  }

  return (
    <FadeIn>
      <li className={itemStatusStyle}>
        {isDeleting && currentItem ? (
          <center>
            <CircleSpinner size={20} color="gray" />
          </center>
        ) : (
          <Fragment>
            {transaction.description}
            <span>
              <div className="col-lg">
                <div class="row">
                  <b>{`${transaction.amount} ${transaction.currency}`} </b>
                </div>
                <div class="row">
                  <small>
                    <ReactTimeAgo date={transaction.createdOn} />
                  </small>
                </div>
              </div>
            </span>
            <button
              className="delete-btn"
              onClick={() => deleteTransaction(transaction._id)}
            >
              <i className="fa fa-remove"></i>
            </button>
          </Fragment>
        )}
      </li>
    </FadeIn>
  );
}
