import React from 'react';
import setAuthToken from '../utils/setAuthToken';
import { Redirect } from 'react-router-dom';

export default function Logout() {
  return (
    <div>
      {setAuthToken()}
      <Redirect to="/login" />
    </div>
  );
}
