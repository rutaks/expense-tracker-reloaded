import APIActions from './APIActions';
import { ActionTypes } from './ActionTypes';

class AuthActions {
  static async login(dispatch, username, password) {
    await APIActions.post(
      dispatch,
      '/api/v1/auth/login',
      {
        username,
        password,
      },
      ActionTypes.auth.FORM_SUBMITTING,
      ActionTypes.auth.LOGGING_IN,
      ActionTypes.auth.AUTH_ERROR
    );
  }

  static async register(dispatch, account) {
    const { firstName, lastName, gender, dob, username, password } = account;
    await APIActions.post(
      dispatch,
      '/api/v1/auth/register',
      { firstName, lastName, gender, dob, username, password },
      ActionTypes.auth.FORM_SUBMITTING,
      ActionTypes.auth.LOGGING_IN,
      ActionTypes.auth.AUTH_ERROR
    );
  }
}

export default AuthActions;
