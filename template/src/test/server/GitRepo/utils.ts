import { GitHubFollowerApi } from '@domain';

import { mockListGitRepoFollowers } from './mock';

function addInMemoryData(data: GitHubFollowerApi) {
  mockListGitRepoFollowers.push(data);
}

function clearInMemoryData() {
  mockListGitRepoFollowers.pop();
}

export const gitRepoServerHandlerUtils = {
  addInMemoryData,
  clearInMemoryData,
};
