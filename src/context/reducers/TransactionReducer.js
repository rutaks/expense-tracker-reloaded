import { ActionTypes } from '../actions/ActionTypes';

export default (state, action) => {
  let { type, payload } = action;
  switch (type) {
    case ActionTypes.transaction.FETCHING_TRANSACTIONS:
      return {
        ...state,
        isFetching: true,
      };
    case ActionTypes.transaction.GET_TRANSACTIONS:
      return {
        ...state,
        isFetching: false,
        transactions: payload,
      };
    case ActionTypes.transaction.ADDING_TRANSACTIONS:
      return {
        ...state,
        isAdding: true,
      };
    case ActionTypes.transaction.ADD_TRANSACTION:
      return {
        ...state,
        isAdding: false,
        transactions: [...state.transactions, action.payload],
      };
    case ActionTypes.transaction.DELETING_TRANSACTIONS:
      return {
        ...state,
        isDeleting: true,
      };
    case ActionTypes.transaction.DETETE_TRANSACTION:
      return {
        ...state,
        isDeleting: false,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== payload
        ),
      };
    case ActionTypes.transaction.TRANSACTIONS_ERROR:
      return {
        ...state,
        isDeleting: false,
        isAdding: false,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
