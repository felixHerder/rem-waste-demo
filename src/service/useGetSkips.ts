import {useEffect, useState} from 'react';
import {Nullable} from '@/types/util';
import {Skip} from '@/types/skip';
import camelize from 'camelize';

const skipsUrl = import.meta.env.VITE_SKIPS_URL;

export default function useGetSkips() {
  const [isFetching, setIsFetching] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<Nullable<Skip>[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const fetchSkips = async () => {
    setIsFetching(true);
    setIsError(false);
    setError(null);

    try {
      const response = await fetch(skipsUrl);
      if (response.ok) {
        const rawData = await response.json();
        const data: Nullable<Skip>[] = camelize(rawData);
        setData(data);
      } else {
        const error = new Error('Something went wrong, please try again later!');
        throw error;
      }
    } catch (error) {
      setIsError(true);
      setError(error as Error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchSkips();
  }, []);

  return {isFetching, isError, data, error};
}
