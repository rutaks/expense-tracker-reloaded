import React, { createContext, useReducer } from 'react';
import AuthActions from './actions/AuthActions';
import AuthReducer from './reducers/AuthReducer';

const initialState = {
  user: {},
  token: null,
  postingDone: false,
  isPosting: false,
  isAuthenticated: false,
  error: null,
};

export const AuthContext = createContext(initialState);

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  async function login(username = '', password = '') {
    await AuthActions.login(dispatch, username, password);
  }
  async function register(account) {
    await AuthActions.register(dispatch, account);
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        token: state.token,
        postingDone: state.postingDone,
        isPosting: state.isPosting,
        error: state.error,
        login: login,
        register: register,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
