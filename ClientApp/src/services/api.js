import axios from 'axios';
import env from '../env';

let api = axios.create({
  baseURL: env.BASE_URL_API,
});

export default api;