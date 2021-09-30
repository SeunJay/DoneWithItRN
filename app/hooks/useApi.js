import { useEffect, useState } from 'react';

const useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    try {
      setLoading(true);
      const response = await apiFunc();
      setLoading(false);

      if (!response.ok) return setError(true);

      setError(false);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    data,
    error,
    loading,
    request,
  };
};

export default useApi;
