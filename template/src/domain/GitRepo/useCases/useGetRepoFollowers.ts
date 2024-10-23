import { QueryKeys } from '@infra';
import { useInfiniteQuery } from '@tanstack/react-query';

import { gitRepoService } from '../gitRepoService';
import { GitHubPaginatedResult } from '../gitRepoTypes';

export function useGetRepoFollowers() {
  const query = useInfiniteQuery({
    initialPageParam: 1,
    queryKey: [QueryKeys.GetRepoFollowers],
    getNextPageParam: (lastPage: GitHubPaginatedResult) =>
      lastPage.hasNextPage ? lastPage.nextPage : null,
    queryFn: ({ pageParam = 1 }) =>
      gitRepoService.getRepoFollowersStarGazers(pageParam),
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
