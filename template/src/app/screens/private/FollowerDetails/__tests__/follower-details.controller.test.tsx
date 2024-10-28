import { renderHook, waitFor } from '@test';

import { useFollowerDetailsController } from '../follower-details.controller';

const mockDataResolved = {
  id: 1,
  username: 'John-doe',
  bio: 'bio',
  fullname: 'John doe',
  avatarUrl: 'http://www.avatar.com',
};

const mockGitRepoService = {
  getFollowerDetails: jest.fn(),
  getRepoFollowersStarGazers: jest.fn(),
};

describe('useFollowerDetailsController', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return details correctly when the request succeeds', async () => {
    mockGitRepoService.getFollowerDetails.mockResolvedValueOnce(
      mockDataResolved,
    );

    const { result } = renderHook(() =>
      useFollowerDetailsController({
        gitRepoServiceDomain: mockGitRepoService,
        id: 1,
      }),
    );

    expect(result.current.loading).toBe(true);
    expect(result.current.details).toBeUndefined();
    expect(result.current.isError).toBe(false);

    await waitFor(() => {
      expect(result.current.details).toEqual(mockDataResolved);
      expect(result.current.loading).toBe(false);
      expect(result.current.isError).toBe(false);
    });
  });

  it('should return error when the request fails', async () => {
    mockGitRepoService.getFollowerDetails.mockRejectedValueOnce(
      new Error('Failed to fetch data'),
    );

    const { result } = renderHook(() =>
      useFollowerDetailsController({
        gitRepoServiceDomain: mockGitRepoService,
        id: 1,
      }),
    );

    expect(result.current.loading).toBe(true);
    expect(result.current.details).toBeUndefined();
    expect(result.current.isError).toBe(false);

    await waitFor(() => {
      expect(result.current.details).toBeUndefined();
      expect(result.current.loading).toBe(false);
      expect(result.current.isError).toBe(true);
    });
  });

  it('should be loading initially while fetching data', async () => {
    mockGitRepoService.getFollowerDetails.mockImplementationOnce(
      () => new Promise(() => {}), // Simula uma requisição que está carregando
    );

    const { result } = renderHook(() =>
      useFollowerDetailsController({
        gitRepoServiceDomain: mockGitRepoService,
        id: 1,
      }),
    );

    expect(result.current.loading).toBe(true);
    expect(result.current.details).toBeUndefined();
    expect(result.current.isError).toBe(false);
  });
});
