import axios from 'axios';

export const getNotifications = () => {
  return axios.get('http://localhost:7000/api/notification');
};
