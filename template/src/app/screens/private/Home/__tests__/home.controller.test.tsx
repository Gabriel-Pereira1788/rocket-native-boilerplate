import { GitRepoServiceDomain } from '@domain';
import { QueryKeys } from '@infra';
import { QueryClient } from '@tanstack/react-query';
import { act, renderHook } from '@test';

import { useHomeController } from '../home.controller';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: mockNavigate,
    }),
  };
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});

const mockGitRepoService: GitRepoServiceDomain = {
  getFollowerDetails: jest.fn(),
  getRepoFollowersStarGazers: async () => {
    return {
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
    };
  },
};
afterAll(() => {
  queryClient.clear();
});

describe('HomeController', () => {
  it('should be render hook correctly', () => {
    const { result } = renderHook(() =>
      useHomeController({
        gitRepoServiceDomain: mockGitRepoService,
      }),
    );

    console.log('RESULT', result.current.followers);
    expect(result.current.followers?.length).toEqual(0);
  });

  it('should be return loading state correctly', () => {
    const { result } = renderHook(() =>
      useHomeController({
        getRepoFollowersUseCase: mockGetRepoFollowersUseCase,
      }),
    );

    expect(result.current.isLoading).toEqual(
      mockGetRepoFollowersUseCase.loading,
    );
  });

  it('should be return refreshing state correctly', () => {
    const { result } = renderHook(() =>
      useHomeController({
        getRepoFollowersUseCase: mockGetRepoFollowersUseCase,
      }),
    );

    expect(result.current.refreshing).toEqual(
      mockGetRepoFollowersUseCase.refetching,
    );
  });

  it('should be dispatch function redirectToFollowerScreen correctly', () => {
    const { result } = renderHook(() =>
      useHomeController({
        getRepoFollowersUseCase: mockGetRepoFollowersUseCase,
      }),
    );
    act(() => {
      result.current.redirectToFollowerScreen(1);
    });

    expect(mockNavigate).toHaveBeenCalledWith('FollowerDetailsScreen', {
      id: 1,
    });
  });
  it('should be refetch GetRepoFollowers query on refresh', async () => {
    await queryClient.fetchQuery({
      queryKey: [QueryKeys.GetRepoFollowers],
      queryFn: () => [],
    });

    const { result } = renderHook(
      () =>
        useHomeController({
          getRepoFollowersUseCase: mockGetRepoFollowersUseCase,
        }),
      { queryClient },
    );

    await act(async () => {
      result.current.onRefresh();
    });
    const queryState = queryClient.getQueryState([QueryKeys.GetRepoFollowers]);

    expect(queryState).toBeTruthy();
    expect(queryState!.dataUpdateCount > 1).toBeTruthy();
  });
});
