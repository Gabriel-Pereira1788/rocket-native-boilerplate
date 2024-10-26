import { QueryKeys } from '@infra';
import { useInfiniteQuery } from '@tanstack/react-query';

import { GitHubPaginatedResult, GitRepoServiceDomain } from '../gitRepoTypes';

export function useGetRepoFollowers(
  getRepoFollowersStarGazers: GitRepoServiceDomain['getRepoFollowersStarGazers'],
) {
  const query = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: [QueryKeys.GetRepoFollowers],
    getNextPageParam: (lastPage: GitHubPaginatedResult) =>
      lastPage.hasNextPage ? lastPage.nextPage : null,
    queryFn: ({ pageParam = 1 }) => getRepoFollowersStarGazers(pageParam),
  });

  return {
    data: query.data,
    getMore: query.fetchNextPage,
    isLoading: query.isPending,
    loadingNextPage: query.isFetchingNextPage,
    error: query.error,
    refresh: query.refetch,
    hasNextPage: query.hasNextPage,
    refreshing: query.isRefetching,
  };
}

export type GetRepoFollowersUseCase = ReturnType<typeof useGetRepoFollowers>;
