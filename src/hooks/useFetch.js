import { useState, useEffect } from 'react';
import axios from '../axios';


const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);


  useEffect(() => {
    const makeGetRequest = async (urlStr) => {
      try {
        const { data } = await axios.get(urlStr);
        setIsLoading(false);
        setData(data);

      } catch (err) {
        setIsLoading(false);
        setIsError(true);

        if (err.response) { setError(err.message) }
        
        if (err.request) {
          setError('Oops, something went wrong!');
        } else {
          setError(err.message);
        }
      }
    };

    makeGetRequest(url);
  }, [url]);

  return {isLoading, isError, data, error};
}

export default useFetch;