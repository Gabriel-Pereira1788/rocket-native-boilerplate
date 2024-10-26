import React from 'react';
import { RefreshControl, View } from 'react-native';

import { FlashList, FlashListProps } from '@shopify/flash-list';

import { ActivityIndicator, EmptyLabel, EmptyLabelProps } from '@components';

type InfinityScrollListProps<Data> = {
  isLoading?: boolean;
  loadingNextPage?: boolean;
  emptyLabelProps?: EmptyLabelProps;
  fetchNextPage: () => void;
} & Omit<
  FlashListProps<Data>,
  | 'refreshControl'
  | 'ListEmptyComponent'
  | 'ListFooterComponent'
  | 'onEndReached'
>;

export function InfinityScrollList<Data>({
  data,
  renderItem,
  isLoading,
  loadingNextPage,
  onRefresh,
  testID,
  fetchNextPage,
  refreshing,
  emptyLabelProps,
  ...flatListProps
}: InfinityScrollListProps<Data>) {
  if (isLoading) {
    return (
      <View className="flex[1] items-center justify-center">
        <ActivityIndicator testID="infinity-scroll-loading-element" size={20} />
      </View>
    );
  }
  return (
    <FlashList
      testID={testID}
      data={data}
      renderItem={renderItem}
      estimatedItemSize={10}
      ListEmptyComponent={
        emptyLabelProps && (
          <View className="items-center mt-10">
            <EmptyLabel {...emptyLabelProps} />
          </View>
        )
      }
      ItemSeparatorComponent={() => (
        <View style={{ width: '100%', height: 10 }} />
      )}
      ListFooterComponent={
        loadingNextPage ? (
          <View className="my-4">
            <ActivityIndicator size={15} />
          </View>
        ) : undefined
      }
      refreshControl={
        onRefresh ? (
          <RefreshControl
            testID="refresh-scroll-list-controll"
            onRefresh={onRefresh}
            refreshing={!!refreshing}
          />
        ) : undefined
      }
      onEndReachedThreshold={0.3}
      showsVerticalScrollIndicator={false}
      onEndReached={() => fetchNextPage()}
      {...flatListProps}
    />
  );
}
