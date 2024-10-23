import { gitRepoAdapter } from './gitRepoAdapter';
import { gitRepoGateway } from './gitRepoGateway';

async function getRepoFollowersStarGazers(page: number) {
  const starGazersList = await gitRepoGateway.getRepoStarGazers({
    page,
  });

  const followersData =
    starGazersList.length > 0
      ? await Promise.all(
          starGazersList.map(async data => {
            return await gitRepoGateway.getFollower(data.id);
          }),
        )
      : [];

  return gitRepoAdapter.toPaginatedGitHubFollowers(followersData, page);
}

async function getFollowerDetails(id: number) {
  const followerData = await gitRepoGateway.getFollower(id);
  return gitRepoAdapter.toGitHubFollower(followerData);
}

export const gitRepoService = {
  getRepoFollowersStarGazers,
  getFollowerDetails,
};
