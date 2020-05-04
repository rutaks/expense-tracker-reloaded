import React, { createContext, useReducer } from 'react';
import TransactionReducer from './reducers/TransactionReducer';
import TransactionAction from './actions/TransactionActions';

const initialState = {
  transactions: [],
  isFetching: false,
  isDeleting: false,
  isAdding: false,
  actionDone: false,
  error: null,
};
export const TransactionContext = createContext(initialState);

export function TransactionProvider({ children }) {
  const [state, dispatch] = useReducer(TransactionReducer, initialState);

  async function getTransactions() {
    await TransactionAction.getTransactions(dispatch);
  }

  async function addTransaction(transaction) {
    await TransactionAction.addTransaction(dispatch, transaction);
  }

  async function deleteByTransactionId(transactionId) {
    await TransactionAction.deleteTransactions(dispatch, transactionId);
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        isFetching: state.isFetching,
        isDeleting: state.isDeleting,
        isAdding: state.isAdding,
        error: state.error,
        getTransactions: getTransactions,
        addTransaction: addTransaction,
        deleteByTransactionId: deleteByTransactionId,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
