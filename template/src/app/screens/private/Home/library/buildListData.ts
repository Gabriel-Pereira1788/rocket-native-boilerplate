import { GitHubFollower, GitHubPaginatedResult } from '@domain';
import { InfiniteData } from '@tanstack/react-query';

export function mergeListData(
  data: InfiniteData<GitHubPaginatedResult, unknown>,
) {
  const newList = data.pages.reduce<GitHubFollower[]>((acc, curr) => {
    if (curr && curr.data) {
      return [...acc, ...curr.data];
    }
    return acc;
  }, []);

  return newList;
}
