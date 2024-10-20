import { http, HttpResponse } from 'msw';

import { mockListGitRepoFollowers } from './mock';

const BASE_URL = 'https://api.github.com/';

export const gitRepoHandlers = [
  http.get(
    BASE_URL + 'repos/Gabriel-Pereira1788/rocket-native-boilerplate/stargazers',
    () => {
      const response = mockListGitRepoFollowers;

      return HttpResponse.json(response, { status: 200 });
    },
  ),
  http.get(BASE_URL + 'user/:id', () => {
    const response = mockListGitRepoFollowers[0];
    return HttpResponse.json(response, { status: 200 });
  }),
];
