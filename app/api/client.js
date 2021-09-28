import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'http://192.168.8.101:8080/api',
});

export default apiClient;
