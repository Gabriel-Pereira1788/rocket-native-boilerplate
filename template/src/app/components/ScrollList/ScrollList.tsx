import React from 'react';
import { FlatList, FlatListProps, RefreshControl, View } from 'react-native';

import { EmptyLabel, EmptyLabelProps } from '../EmptyLabel/EmptyLabel';

type ScrollListProps<Data> = {
  emptyLabelProps?: EmptyLabelProps;
} & Omit<FlatListProps<Data>, 'refreshControl' | 'ListEmptyComponent'>;

export function ScrollList<Data>({
  data,
  renderItem,
  onRefresh,
  testID,
  refreshing,
  emptyLabelProps,
  ...flatListProps
}: ScrollListProps<Data>) {
  return (
    <FlatList
      testID={testID}
      data={data}
      renderItem={renderItem}
      ListEmptyComponent={
        emptyLabelProps && (
          <View className="items-center justify-center  h-full">
            <EmptyLabel {...emptyLabelProps} />
          </View>
        )
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
      showsVerticalScrollIndicator={false}
      style={{
        width: '100%',
      }}
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 50,
        gap: 25,
      }}
      {...flatListProps}
    />
  );
}
