import { useEffect, useState } from 'react';

import {
  GitHubFollower,
  GitRepoServiceDomain,
  useGetRepoFollowers,
} from '@domain';
import { useNavigation } from '@react-navigation/native';

import { mergeListData } from './library';

type HomeControllerProps = {
  gitRepoServiceDomain: GitRepoServiceDomain;
};

export function useHomeController({
  gitRepoServiceDomain,
}: HomeControllerProps) {
  const { refresh, getMore, data, isLoading, refreshing, loadingNextPage } =
    useGetRepoFollowers(gitRepoServiceDomain.getRepoFollowersStarGazers);

  const [followers, setFollowers] = useState<GitHubFollower[]>([]);

  const navigation = useNavigation();

  function redirectToFollowerScreen(followerId: GitHubFollower['id']) {
    navigation.navigate('FollowerDetailsScreen', { id: followerId });
  }

  useEffect(() => {
    if (data) {
      const newListData = mergeListData(data);
      setFollowers(newListData);
    }
  }, [data]);

  return {
    followers,
    isLoading: isLoading,
    refreshing: refreshing,
    redirectToFollowerScreen,
    fetchNextPage: getMore,
    onRefresh: refresh,
    loadingNextPage,
  };
}

export type HomeController = ReturnType<typeof useHomeController>;
