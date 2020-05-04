import axios from './axios';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = `Bearer ${token}`;
    console.log('TEST - ', axios.defaults.headers.common);
    localStorage.setItem('ifaranga-token', `Bearer ${token}`);
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
    // delete axios.defaults.headers.common['authorization'];
    localStorage.removeItem('ifaranga-token');
  }
};

export default setAuthToken;
