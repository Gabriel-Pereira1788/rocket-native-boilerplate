import { GitHubFollower, GitHubFollowerApi } from './gitRepoTypes';

function toListGitHubFollowers(
  followersListApi: GitHubFollowerApi[],
): GitHubFollower[] {
  return followersListApi.map(followerApi => toGitHubFollower(followerApi));
}
function toGitHubFollower(followerApi: GitHubFollowerApi): GitHubFollower {
  return {
    id: followerApi.id,
    avatarUrl: followerApi.avatar_url,
    followerName: followerApi.login,
  };
}
export const gitRepoAdapter = {
  toListGitHubFollowers,
  toGitHubFollower,
};
