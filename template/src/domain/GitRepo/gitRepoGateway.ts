import axios from 'axios';

import { GitHubFollowerApi } from './gitRepoTypes';

const ghApi = axios.create({
  baseURL: 'https://api.github.com/',
});

async function getRepoFollowersStar(): Promise<GitHubFollowerApi[]> {
  const response = await ghApi.get<GitHubFollowerApi[]>(
    'repos/Gabriel-Pereira1788/rocket-native-boilerplate/stargazers',
  );

  return response.data;
}

async function getFollower(id: number): Promise<GitHubFollowerApi> {
  const response = await ghApi.get<GitHubFollowerApi>(`user/${id}`);
  return response.data;
}

export const gitRepoGateway = {
  getRepoFollowersStar,
  getFollower,
};
