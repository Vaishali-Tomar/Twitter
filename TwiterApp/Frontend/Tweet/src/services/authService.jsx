import axios from 'axios';

export const login = (email, password) => {
  return axios.post('http://localhost:7000/api/auth/login', { email, password });
};

export const register = (email, password, name, fullName) => {
  return axios.post('http://localhost:7000/api/auth/register', { email, password, name, fullName });
};

export const logout = () => {
  localStorage.removeItem('token');
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'));
};
