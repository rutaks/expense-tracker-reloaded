import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { TransactionProvider } from './context/TransactionState';
import { AuthProvider } from './context/AuthState';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

const App = () => {
  return (
    <TransactionProvider>
      <AuthProvider>
        <PrivateRoute exact path="/" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/logout" component={Logout} />
      </AuthProvider>
    </TransactionProvider>
  );
};
export default App;
