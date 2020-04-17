import React, { createContext, useReducer } from 'react';
import TransactionReducer from './reducers/TransactionReducer';
import { ActionTypes } from './actions/ActionTypes';

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

export function GlobalProvider({ children }) {
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
        transactions: state.transactions,
        addTransaction: addTransaction,
        deleteByTransactionId: deleteByTransactionId,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
