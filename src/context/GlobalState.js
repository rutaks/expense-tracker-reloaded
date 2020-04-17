import React, { createContext, useReducer } from 'react';
import TransactionReducer from './reducers/TransactionReducer';
import ActionTypes from './actions/ActionTypes';

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

export function GlobalContext({ children }) {
  const [state, dispatch] = useReducer(TransactionReducer, initialState);

  function deleteByTransactionId(transactionId) {
    dispatch({
      type: ActionTypes.transaction.DETETE_TRANSACTION,
      payload: transactionId,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: ActionTypes.transaction.ADD_TRANSACTION,
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transaction,
        addTransaction: addTransaction,
        deleteByTransactionId: deleteByTransactionId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
