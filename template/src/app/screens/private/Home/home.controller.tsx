import { GetRepoFollowersUseCase, GitHubFollower } from '@domain';
import { useNavigation } from '@react-navigation/native';

type HomeControllerProps = {
  getRepoFollowersUseCase: GetRepoFollowersUseCase;
};

export function useHomeController({
  getRepoFollowersUseCase,
}: HomeControllerProps) {
  const navigation = useNavigation();
  function redirectToFollowerScreen(followerId: GitHubFollower['id']) {
    navigation.navigate('FollowerDetailsScreen', { id: followerId });
  }

  return {
    followers: getRepoFollowersUseCase.followers,
    isLoading: getRepoFollowersUseCase.loading,
    redirectToFollowerScreen,
  };
}

export type HomeController = ReturnType<typeof useHomeController>;
