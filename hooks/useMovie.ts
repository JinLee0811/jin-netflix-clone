import useSWR from 'swr';
import fetcher from '@/lib/fetcher';

const useMovie = (id?: string) => {
  const { data, error, isLoading } = useSWR(
    id ? `/api/movies/${id}` : null,
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  console.log('Data:', data);
  console.log('Error:', error);

  return {
    data,
    error,
    isLoading,
  };
};

export default useMovie;
