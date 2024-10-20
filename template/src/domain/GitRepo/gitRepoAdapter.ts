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
    username: followerApi.login,
    fullname: followerApi?.name,
    bio: followerApi?.bio,
  };
}
export const gitRepoAdapter = {
  toListGitHubFollowers,
  toGitHubFollower,
};
