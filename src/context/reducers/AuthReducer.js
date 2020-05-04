import { ActionTypes } from '../actions/ActionTypes';

export default (state, action) => {
  let { type, payload, error } = action;
  switch (type) {
    case ActionTypes.auth.FORM_SUBMITTING:
      return {
        ...state,
        isPosting: true,
        postingDone: false,
        error: null,
      };
    case ActionTypes.auth.LOGGING_IN:
      return {
        ...state,
        isAuthenticated: true,
        isPosting: false,
        postingDone: true,
        token: payload.token,
        error: null,
      };
    case ActionTypes.auth.AUTH_ERROR:
      return {
        ...state,
        user: {},
        postingDone: true,
        isPosting: false,
        error: error,
      };
    default:
      return state;
  }
};
