import client from './client';

const endPoint = '/auth';

const login = (email, password) => {
  return client.post(endPoint, { email, password });
};

const register = (userInfo) => {
  return client.post('/users', userInfo);
};

export default {
  login,
  register,
};
