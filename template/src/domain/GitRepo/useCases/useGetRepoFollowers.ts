import { QueryKeys } from '@infra';
import { useQuery } from '@tanstack/react-query';

import { gitRepoService } from '../gitRepoService';

export function useGetRepoFollowers() {
  const { data, isPending, isError } = useQuery({
    queryKey: [QueryKeys.GetRepoFollowers],
    queryFn: () => gitRepoService.getRepoFollowers(),
  });

  return {
    followers: data,
    loading: isPending,
    isError,
  };
}
export type GetRepoFollowersUseCase = ReturnType<typeof useGetRepoFollowers>;
