import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'http://192.168.1.2:8080/api',
});

export default apiClient;
