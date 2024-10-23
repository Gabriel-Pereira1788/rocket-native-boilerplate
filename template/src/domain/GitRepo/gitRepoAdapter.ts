import {
  GitHubFollower,
  GitHubFollowerApi,
  GitHubPaginatedResult,
} from './gitRepoTypes';

function toPaginatedGitHubFollowers(
  followersListApi: GitHubFollowerApi[],
  page: number,
): GitHubPaginatedResult {
  return {
    data: followersListApi.map(followerApi => toGitHubFollower(followerApi)),
    hasNextPage: followersListApi.length > 0,
    nextPage: page + 1,
  };
}
function toGitHubFollower(followerApi: GitHubFollowerApi): GitHubFollower {
  return {
    id: followerApi.id,
    avatarUrl: followerApi.avatar_url,
    username: followerApi.login,
    fullname: followerApi?.name,
    bio: followerApi?.bio,
  };
}
export const gitRepoAdapter = {
  toPaginatedGitHubFollowers,
  toGitHubFollower,
};
