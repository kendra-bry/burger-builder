import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-de320.firebaseio.com/',
});

export default instance;