import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Dialogs as dialog } from '../utils/Dialogs';
import Button from './Button';
export default function AddTransactionForm() {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);
  const { addTransaction, isAdding } = useContext(GlobalContext);

  function onSubmit(e) {
    e.preventDefault();
    if (description.length < 1) {
      dialog.displayErrorMessage('Enter A Transaction Description');
      return;
    }
    if (amount === 0) {
      dialog.displayErrorMessage('Enter A Valid Amount');
      return;
    }
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      description,
      amount: +amount,
      currency: 'RWF',
      date: new Date(),
    };
    addTransaction(newTransaction);
    clearFields();
  }

  function clearFields() {
    setAmount(0);
    setDescription('');
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h3>Add Your Transaction</h3>
        <div class="form-group">
          <label for="description">What did you spend / get from?</label>
          <input
            type="text"
            class="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
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
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                class="form-control"
                aria-label="Amount"
              />
              <div class="input-group-append">
                <span class="input-group-text">.00</span>
              </div>
            </div>
          </div>
        </div>
        <Button placeholder="Add Transaction" isLoading={isAdding}></Button>
      </form>
    </div>
  );
}
