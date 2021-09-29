import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'http://192.168.8.103:8080/api',
});

export default apiClient;
