import React from 'react';

export default function AddTransactionForm() {
  return (
    <div>
      <h3>Add Your Transaction</h3>
      <div class="form-group">
        <label for="amount">What did you spend / get from?</label>
        <input
          type="email"
          class="form-control"
          id="amount"
          aria-describedby="amountHelp"
          placeholder="Eggs for breakfast"
        />
        <small id="amountHelp" class="form-text text-muted">
          This can be a short description of the transaction
        </small>
      </div>
      <div class="form-group">
        <label class="control-label">How much was it?</label>
        <div class="form-group">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">Rwf</span>
            </div>
            <input type="number" class="form-control" aria-label="Amount" />
            <div class="input-group-append">
              <span class="input-group-text">.00</span>
            </div>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-block btn-success">
        Add Transaction
      </button>
    </div>
  );
}
