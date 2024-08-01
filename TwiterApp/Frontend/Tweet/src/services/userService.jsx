import axios from 'axios';

export const getUser = (userId) => {
  return axios.get(`http://localhost:7000/api/user/${userId}`);
};
