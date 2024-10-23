import { useEffect, useState } from 'react';

import { GetRepoFollowersUseCase, GitHubFollower } from '@domain';
import { useNavigation } from '@react-navigation/native';

type HomeControllerProps = {
  getRepoFollowersUseCase: GetRepoFollowersUseCase;
};

export function useHomeController({
  getRepoFollowersUseCase,
}: HomeControllerProps) {
  const [followers, setFollowers] = useState<GitHubFollower[]>([]);

  const navigation = useNavigation();

  function redirectToFollowerScreen(followerId: GitHubFollower['id']) {
    navigation.navigate('FollowerDetailsScreen', { id: followerId });
  }

  async function onRefresh() {
    getRepoFollowersUseCase.refresh();
  }

  async function fetchNextPage() {
    getRepoFollowersUseCase.getMore();
  }

  useEffect(() => {
    if (getRepoFollowersUseCase.data) {
      const newList = getRepoFollowersUseCase.data.pages.reduce<
        GitHubFollower[]
      >((acc, curr) => {
        return [...acc, ...curr.data];
      }, []);

      setFollowers(newList);
    }
  }, [getRepoFollowersUseCase.data]);

  return {
    followers,
    isLoading: getRepoFollowersUseCase.isLoading,
    refreshing: getRepoFollowersUseCase.refreshing,
    redirectToFollowerScreen,
    fetchNextPage,
    onRefresh,
  };
}

export type HomeController = ReturnType<typeof useHomeController>;
