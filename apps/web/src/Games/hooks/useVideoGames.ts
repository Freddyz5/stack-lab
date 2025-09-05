import { useSnack } from '../../shared/hooks/useSnack';
import { useQuery } from '@tanstack/react-query';
import { getVideoGames } from '../services/videoGames';
import { VideoGame } from '../../shared/types/VideoGames';
import { useEffect } from 'react';

export const useVideoGames = () => {
  const { enqueueSnack } = useSnack();

  const {data: videoGames = [], isLoading, isError,error} = useQuery<VideoGame[], Error>({
    queryKey: ['videoGames'],
    queryFn: getVideoGames,
  });

  useEffect(() => {
    if (isError && error) {
      enqueueSnack(error.message, 'error');
      console.log(error);
    }
  }, [isError, error, enqueueSnack]);

  return {
    videoGames,
    isLoading,
    isError,
    error,
  };
};
