import { gitRepoAdapter } from './gitRepoAdapter';
import { gitRepoGateway } from './gitRepoGateway';

async function getRepoFollowers() {
  const data = await gitRepoGateway.getRepoFollowersStar();
  return gitRepoAdapter.toListGitHubFollowers(data);
}
export const gitRepoService = {
  getRepoFollowers,
};
