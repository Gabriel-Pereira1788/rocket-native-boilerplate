import { GetRepoFollowersUseCase, GitHubFollower } from '@domain';
import { QueryKeys } from '@infra';
import { useNavigation } from '@react-navigation/native';
import { useQueryClient } from '@tanstack/react-query';

type HomeControllerProps = {
  getRepoFollowersUseCase: GetRepoFollowersUseCase;
};

export function useHomeController({
  getRepoFollowersUseCase,
}: HomeControllerProps) {
  const navigation = useNavigation();
  const queryClient = useQueryClient();

  function redirectToFollowerScreen(followerId: GitHubFollower['id']) {
    navigation.navigate('FollowerDetailsScreen', { id: followerId });
  }

  async function onRefresh() {
    queryClient.invalidateQueries({
      queryKey: [QueryKeys.GetRepoFollowers],

      refetchType: 'all',
    });
  }

  return {
    followers: getRepoFollowersUseCase.followers,
    isLoading: getRepoFollowersUseCase.loading,
    refreshing: getRepoFollowersUseCase.refetching,
    redirectToFollowerScreen,
    onRefresh,
  };
}

export type HomeController = ReturnType<typeof useHomeController>;
