import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000', 

});


instance.interceptors.response.use(
  response => response,
  error => {

    return Promise.reject(error);
  }
);

export default instance;
