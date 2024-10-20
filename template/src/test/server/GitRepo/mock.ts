import { GitHubFollowerApi } from '@domain';

export const mockListGitRepoFollowers: GitHubFollowerApi[] = [
  {
    login: 'John-Doe',
    id: 12345,
    node_id: '1234-y2g',
    avatar_url: 'https://example.com',
    gravatar_id: '',
    url: 'https://example.com',
    html_url: 'https://example.com',
    followers_url: 'https://example.com',
    following_url: 'https://example.com',
    gists_url: 'https://example.com',
    starred_url: 'https://example.com',
    subscriptions_url: 'https://example.com',
    organizations_url: 'https://example.com',
    repos_url: 'https://example.com',
    events_url: 'https://example.com',
    received_events_url: 'https://example.com',
    type: 'User',
    user_view_type: 'public',
    site_admin: false,
  },
];
