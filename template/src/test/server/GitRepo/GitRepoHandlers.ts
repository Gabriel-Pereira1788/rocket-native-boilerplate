import { http, HttpResponse } from 'msw';

import { mockListGitRepoFollowers } from './mock';

const BASE_URL = 'https://api.github.com/';

export const gitRepoHandlers = [
  http.get(
    BASE_URL + 'repos/Gabriel-Pereira1788/rocket-native-boilerplate/stargazers',
    ({ request }) => {
      const url = new URL(request.url);

      const page = url.searchParams.get('page');
      if (page === '2') {
        return HttpResponse.json([], { status: 200 });
      }

      const response = mockListGitRepoFollowers;
      return HttpResponse.json(response, { status: 200 });
    },
  ),
  http.get(BASE_URL + 'user/:id', ({ params }) => {
    const id = Number(params.id);
    const response = mockListGitRepoFollowers.find(item => item.id === id);
    return HttpResponse.json(response, { status: 200 });
  }),
];
