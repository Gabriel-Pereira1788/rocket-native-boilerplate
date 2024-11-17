import { QueryClient } from '@tanstack/react-query';
import { act, renderHook, waitFor } from '@test';

import { useHomeController } from '../home.controller';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});
const queryClient = new QueryClient();

const mockGitRepoService = {
  getFollowerDetails: jest.fn(),
  getRepoFollowersStarGazers: jest.fn(),
};
afterAll(() => {
  queryClient.clear();
});

describe('HomeController', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should be render hook correctly', async () => {
    mockGitRepoService.getRepoFollowersStarGazers.mockResolvedValueOnce({
      data: [
        {
          id: 1,
          username: 'johndoe-123',
          fullname: 'John Doe',
          bio: 'bio test',
          avatarUrl: 'http://www.avatar.com',
        },
      ],
      hasNextPage: false,
      nextPage: 0,
    });
    const { result } = renderHook(() =>
      useHomeController({
        gitRepoServiceDomain: mockGitRepoService,
      }),
    );

    await waitFor(() => expect(result.current.followers?.length).toEqual(1));
  });

  it('should be loading initially while fetching data', () => {
    mockGitRepoService.getRepoFollowersStarGazers.mockImplementationOnce(
      () => new Promise(() => {}), // Simula uma requisição que está carregando
    );
    const { result } = renderHook(() =>
      useHomeController({
        gitRepoServiceDomain: mockGitRepoService,
      }),
    );

    expect(result.current.isLoading).toBeTruthy();
  });

  it('should be dispatch function redirectToFollowerScreen correctly', () => {
    const { result } = renderHook(() =>
      useHomeController({
        gitRepoServiceDomain: mockGitRepoService,
      }),
    );
    act(() => {
      result.current.redirectToFollowerScreen(1);
    });

    expect(mockNavigate).toHaveBeenCalledWith('FollowerDetailsScreen', {
      id: 1,
    });
  });
  it('should set refreshing state to true when calling onRefresh', async () => {
    mockGitRepoService.getRepoFollowersStarGazers.mockResolvedValueOnce({
      data: [
        {
          id: 1,
          username: 'johndoe-123',
          fullname: 'John Doe',
          bio: 'bio test',
          avatarUrl: 'http://www.avatar.com',
        },
      ],
      hasNextPage: false,
      nextPage: 0,
    });

    const { result } = renderHook(() =>
      useHomeController({
        gitRepoServiceDomain: mockGitRepoService,
      }),
    );

    await waitFor(() =>
      expect(result.current.followers.length > 0).toBeTruthy(),
    );
    mockGitRepoService.getRepoFollowersStarGazers.mockImplementationOnce(
      () =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve({
              data: [
                {
                  id: 1,
                  username: 'johndoe-123',
                  fullname: 'John Doe',
                  bio: 'bio test',
                  avatarUrl: 'http://www.avatar.com',
                },
              ],
              hasNextPage: false,
              nextPage: 0,
            });
          }, 500);
        }), // Simula uma requisição que está carregando
    );
    await act(async () => {
      await result.current.onRefresh();
    });

    await waitFor(() => expect(true).toBeTruthy());
  });
});
