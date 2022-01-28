import { useEffect, useState } from 'react';
import axios from 'axios';
import { requireNativeComponent } from 'react-native';

const useFetchData = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          'https://hn.algolia.com/api/v1/search?query=redux',
        );
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return { data };
};