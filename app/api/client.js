import { create } from 'apisauce';
import cache from '../utility/cache';

const apiClient = create({
  baseURL: 'http://192.168.8.100:8080/api',
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
  try {
    const response = await get(url, params, axiosConfig);

    if (response.ok) {
      cache.store(url, response.data); 
      return response;
    }

    const data = await cache.get(url);
    

    return data ? { ok: true, data } : response;
  } catch (error) {
    console.log(error);
  }
};

export default apiClient;
