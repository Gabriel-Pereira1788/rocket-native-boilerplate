export type GitRepoServiceDomain = {
  getFollowerDetails(id: number): Promise<GitHubFollower>;
  getRepoFollowersStarGazers(page: number): Promise<GitHubPaginatedResult>;
};

export interface GitHubFollowerApi {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  user_view_type: string;
  site_admin: boolean;
  name?: string;
  bio?: string;
}

export interface GitHubFollower {
  id: number;
  username: string;
  fullname?: string;
  bio?: string;
  avatarUrl: string;
}

export type QueryParams = {
  page?: number;
  perPage?: number;
};

export type GitHubPaginatedResult = {
  data: GitHubFollower[];
  hasNextPage: boolean;
  nextPage: number;
};
