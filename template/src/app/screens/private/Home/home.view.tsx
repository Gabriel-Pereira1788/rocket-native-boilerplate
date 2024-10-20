import { useCallback } from 'react';
import { ListRenderItemInfo, TouchableOpacity } from 'react-native';

import { GitHubFollower } from '@domain';
import { If } from '@helpers';
import { ScreenLayout } from '@shared';

import { ActivityIndicator, ScrollList } from '@components';

import { FollowerCard } from './components/FollowerCard';
import { HomeController } from './home.controller';

type HomeViewProps = {
  controller: HomeController;
};

export function HomeView({ controller }: HomeViewProps) {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<GitHubFollower>) => {
      return (
        <TouchableOpacity
          testID="follower-card"
          activeOpacity={0.8}
          onPress={() => controller.redirectToFollowerScreen(item.id)}>
          <FollowerCard follower={item} />
        </TouchableOpacity>
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  return (
    <ScreenLayout>
      <If condition={controller.isLoading}>
        <ActivityIndicator testID="home-loading-element" size={20} />
      </If>
      <If condition={!controller.isLoading}>
        <ScrollList
          data={controller.followers}
          renderItem={renderItem}
          emptyLabelProps={{
            title: 'Empty Data',
            message: 'try again later',
            iconName: 'placeHolder',
          }}
        />
      </If>
    </ScreenLayout>
  );
}
