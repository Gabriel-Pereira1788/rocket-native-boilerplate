import { GetRepoFollowersUseCase } from '@domain';
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

const mockGetRepoFollowersUseCase: GetRepoFollowersUseCase = {
  followers: [],
  isError: false,
  loading: false,
};

describe('HomeController', () => {
  it('should be render hook correctly', () => {
    const { result } = renderHook(() =>
      useHomeController({
        getRepoFollowersUseCase: mockGetRepoFollowersUseCase,
      }),
    );

    expect(result.current.followers?.length).toEqual(
      mockGetRepoFollowersUseCase.followers?.length,
    );
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
});
