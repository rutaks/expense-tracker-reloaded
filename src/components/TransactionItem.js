import React from 'react';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import 'font-awesome/css/font-awesome.min.css';

export default function TransactionItem() {
  return (
    <li className="minus">
      KFC
      <span>
        <div className="col-lg">
          <div class="row">
            <b>1200 Rwf </b>
          </div>

          <div class="row">
            <small>3 days ago</small>
          </div>
        </div>
      </span>
      <button className="delete-btn">
        <i className="fa fa-remove"></i>
      </button>
    </li>
  );
}
