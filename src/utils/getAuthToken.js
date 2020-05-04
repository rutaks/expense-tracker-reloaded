const getAuthToken = () => {
  return localStorage.getItem('ifaranga-token');
};

export default getAuthToken;
