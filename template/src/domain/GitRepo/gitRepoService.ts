import { gitRepoAdapter } from './gitRepoAdapter';
import { gitRepoGateway } from './gitRepoGateway';

async function getRepoFollowers() {
  const data = await gitRepoGateway.getRepoFollowersStar();

  return gitRepoAdapter.toListGitHubFollowers(data);
}

async function getFollowerDetails(id: number) {
  const data = await gitRepoGateway.getFollower(id);
  return gitRepoAdapter.toGitHubFollower(data);
}

export const gitRepoService = {
  getRepoFollowers,
  getFollowerDetails,
};
