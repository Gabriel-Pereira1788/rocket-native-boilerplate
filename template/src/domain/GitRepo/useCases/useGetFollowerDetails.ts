import { QueryKeys } from '@infra';
import { useQuery } from '@tanstack/react-query';

import { GitRepoServiceDomain } from '../gitRepoTypes';

export function useGetFollowerDetails(
  id: number,
  getFollowerDetails: GitRepoServiceDomain['getFollowerDetails'],
) {
  const { data, isPending, isError } = useQuery({
    queryKey: [QueryKeys.GetFollowerDetails, id],
    queryFn: () => getFollowerDetails(id),
  });

  return {
    details: data,
    loading: isPending,
    isError,
  };
}
