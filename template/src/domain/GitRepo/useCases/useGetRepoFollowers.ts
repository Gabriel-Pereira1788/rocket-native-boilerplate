import { QueryKeys } from '@infra';
import { useQuery } from '@tanstack/react-query';

import { gitRepoService } from '../gitRepoService';

export function useGetRepoFollowers() {
  const { data, isError, isLoading, isRefetching } = useQuery({
    queryKey: [QueryKeys.GetRepoFollowers],
    queryFn: () => gitRepoService.getRepoFollowersStarGazers(),
  });

  return {
    followers: data,
    loading: isLoading,
    refetching: isRefetching,
    isError,
  };
}

export type GetRepoFollowersUseCase = ReturnType<typeof useGetRepoFollowers>;
