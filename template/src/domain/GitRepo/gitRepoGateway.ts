import axios from 'axios';

import { GitHubFollowerApi, QueryParams } from './gitRepoTypes';

const ghApi = axios.create({
  baseURL: 'https://api.github.com/',
});

async function getRepoStarGazers({
  page = 1,
  perPage = 3,
}: QueryParams): Promise<GitHubFollowerApi[]> {
  const response = await ghApi.get<GitHubFollowerApi[]>(
    `repos/Gabriel-Pereira1788/rocket-native-boilerplate/stargazers?page=${page}&per_page=${perPage}`,
  );

  return response.data;
}

async function getFollower(id: number): Promise<GitHubFollowerApi> {
  const response = await ghApi.get<GitHubFollowerApi>(`user/${id}`);
  return response.data;
}

export const gitRepoGateway = {
  getRepoStarGazers,
  getFollower,
};
