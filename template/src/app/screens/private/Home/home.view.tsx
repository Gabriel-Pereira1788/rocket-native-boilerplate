import { TouchableOpacity } from 'react-native';

import { GitHubFollower } from '@domain';
import { InfinityScrollList } from '@helpers';
import { ScreenLayout } from '@shared';
import { ListRenderItemInfo } from '@shopify/flash-list';

import { HomeScreenListHeader, FollowerCard } from './components';
import { HomeController } from './home.controller';

type HomeViewProps = {
  controller: HomeController;
};

export function HomeView({ controller }: HomeViewProps) {
  const renderItem = ({ item }: ListRenderItemInfo<GitHubFollower>) => {
    return (
      <TouchableOpacity
        testID="follower-card"
        activeOpacity={0.8}
        onPress={() => controller.redirectToFollowerScreen(item.id)}>
        <FollowerCard follower={item} />
      </TouchableOpacity>
    );
  };
  return (
    <ScreenLayout>
      <InfinityScrollList
        testID="followers-list"
        fetchNextPage={controller.fetchNextPage}
        isLoading={controller.isLoading}
        loadingNextPage={controller.loadingNextPage}
        data={controller.followers}
        refreshing={controller.refreshing}
        keyExtractor={item => String(item.id)}
        onRefresh={controller.onRefresh}
        renderItem={renderItem}
        ListHeaderComponent={HomeScreenListHeader}
        contentContainerStyle={{
          paddingTop: 50,
          paddingBottom: 20,
        }}
        emptyLabelProps={{
          title: 'Empty Data',
          message: 'try again later',
          iconName: 'placeHolder',
        }}
      />
    </ScreenLayout>
  );
}
