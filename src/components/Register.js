import React, { useState, useContext, useEffect } from 'react';
import Button from './Button';
import { AuthContext } from '../context/AuthState';
import { Redirect } from 'react-router-dom';
import setAuthToken from '../utils/setAuthToken';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('MALE');
  const [dob, setDob] = useState('');
  const { isPosting, error, register, token } = useContext(AuthContext);

  function submit(e) {
    e.preventDefault();
    register({ firstName, lastName, gender, dob, username, password });
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
      <h2>Register</h2>
      <form onSubmit={submit}>
        <div className="row">
          <div class="form-group col-lg-6">
            <label>First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              class="form-control"
              placeholder="John"
            />
          </div>
          <div class="form-group col-lg-6">
            <label>Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              class="form-control"
              placeholder="Doe"
            />
          </div>
        </div>
        <div class="form-group">
          <label>Gender</label>
          <select
            class="form-control"
            id="gender"
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </select>
        </div>
        <div class="form-group">
          <label>Date Of Birth</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            class="form-control"
          />
        </div>
        <div class="form-group">
          <label>Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            class="form-control"
            placeholder="john.doe"
          />
        </div>
        <div class="form-group">
          <label>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            class="form-control"
            placeholder="•••••••"
          />
        </div>
        <Button placeholder="Register" isLoading={isPosting} />
        <center>
          {error && <label style={{ color: 'red' }}>{error}</label>}
        </center>
      </form>
    </div>
  );
}
