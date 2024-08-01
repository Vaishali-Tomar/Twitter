import axios from 'axios';

export const getPosts = () => {
  return axios.get('http://localhost:7000/api/post');
};

export const createPost = (post) => {
  return axios.post('http://localhost:7000/api/post', post);
};
