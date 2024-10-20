import { QueryKeys } from '@infra';
import { useQuery } from '@tanstack/react-query';

import { gitRepoService } from '../gitRepoService';

export function useGetFollowerDetails(id: number) {
  const { data, isPending, isError } = useQuery({
    queryKey: [QueryKeys.GetFollowerDetails, id],
    queryFn: () => gitRepoService.getFollowerDetails(id),
  });

  return {
    details: data,
    loading: isPending,
    isError,
  };
}

export type GetFollowerDetailsUseCase = ReturnType<
  typeof useGetFollowerDetails
>;
