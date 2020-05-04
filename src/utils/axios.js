import axios from 'axios';
import getAuthToken from './getAuthToken';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_ROUTE,
  headers: {
    Authorization: getAuthToken(),
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
