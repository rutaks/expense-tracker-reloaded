import APIActions from './APIActions';
import { ActionTypes } from './ActionTypes';

class TransactionAction {
  static async addTransaction(dispatch, transaction) {
    await APIActions.post(
      dispatch,
      '/api/v1/transactions',
      transaction,
      ActionTypes.transaction.ADDING_TRANSACTIONS,
      ActionTypes.transaction.ADD_TRANSACTION,
      ActionTypes.transaction.TRANSACTIONS_ERROR
    );
  }
  static async getTransactions(dispatch) {
    await APIActions.get(
      dispatch,
      '/api/v1/transactions',
      ActionTypes.transaction.FETCHING_TRANSACTIONS,
      ActionTypes.transaction.GET_TRANSACTIONS,
      ActionTypes.transaction.TRANSACTIONS_ERROR
    );
  }
  static async deleteTransactions(dispatch, transactionId) {
    await APIActions.delete(
      dispatch,
      `/api/v1/transactions/${transactionId}`,
      ActionTypes.transaction.DELETING_TRANSACTIONS,
      ActionTypes.transaction.DETETE_TRANSACTION,
      ActionTypes.transaction.TRANSACTIONS_ERROR
    );
  }
}

export default TransactionAction;
