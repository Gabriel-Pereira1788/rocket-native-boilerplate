import { http, HttpResponse } from 'msw';

import { mockListGitRepoFollowers } from './mock';

const FULL_URL = `https://api.github.com/repos/Gabriel-Pereira1788/rocket-native-boilerplate/stargazers`;
export const gitRepoHandlers = [
  http.get(FULL_URL, () => {
    const response = mockListGitRepoFollowers;
    return HttpResponse.json(response, { status: 200 });
  }),
];
