import { ActionTypes } from '../actions/ActionTypes';

export default (state, action) => {
  let { type, payload } = action;
  switch (type) {
    case ActionTypes.transaction.ADD_TRANSACTION:
      return {
        ...state,
        transactions: [payload, ...state.transactions],
      };
    case ActionTypes.transaction.DETETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== payload
        ),
      };
    default:
      return state;
  }
};
