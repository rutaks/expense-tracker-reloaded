import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import getAuthToken from '../utils/getAuthToken';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        getAuthToken() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
