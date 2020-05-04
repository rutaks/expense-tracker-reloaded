import React, { useState, useContext } from 'react';
import Button from './Button';
import { AuthContext } from '../context/AuthState';
import { Redirect, Link } from 'react-router-dom';
import setAuthToken from '../utils/setAuthToken';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { isPosting, error, login, token } = useContext(AuthContext);

  function submit(e) {
    e.preventDefault();
    login(username, password);
  }

  function goToMainView() {
    setAuthToken(token);
    return <Redirect to="/" />;
  }

  return (
    <div className="container">
      {token && goToMainView()}
      <br />
      <br />
      <br />
      <br />
      <h2>Login</h2>
      <form onSubmit={submit}>
        <div class="form-group">
          <label for="exampleInputEmail1">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            class="form-control"
            placeholder="Enter username"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            class="form-control"
            placeholder="Password"
          />
        </div>
        <Button placeholder="Login" isLoading={isPosting} />
        <br />
        <center>
          <span>
            Don't Have An Account? Click <Link to="/register">Here</Link>
          </span>
          {error && <label style={{ color: 'red' }}>{error}</label>}
        </center>
      </form>
    </div>
  );
}
