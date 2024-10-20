import { gitRepoAdapter } from './gitRepoAdapter';
import { gitRepoGateway } from './gitRepoGateway';

async function getRepoFollowersStarGazers() {
  const starGazersList = await gitRepoGateway.getRepoStarGazers();

  const followersData = await Promise.all(
    starGazersList.map(async data => {
      return await gitRepoGateway.getFollower(data.id);
    }),
  );

  return gitRepoAdapter.toListGitHubFollowers(followersData);
}

async function getFollowerDetails(id: number) {
  const followerData = await gitRepoGateway.getFollower(id);
  return gitRepoAdapter.toGitHubFollower(followerData);
}

export const gitRepoService = {
  getRepoFollowersStarGazers,
  getFollowerDetails,
};
