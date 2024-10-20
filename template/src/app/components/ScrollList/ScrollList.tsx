import React from 'react';
import { FlatList, FlatListProps, RefreshControl, View } from 'react-native';

import { EmptyLabel, EmptyLabelProps } from '../EmptyLabel/EmptyLabel';

type ScrollListProps<Data> = {
  data: Data[] | undefined | null;
  renderItem: FlatListProps<Data>['renderItem'];
  onRefresh?: () => Promise<void> | void;
  refreshing?: boolean;
  emptyLabelProps?: EmptyLabelProps;
};

export function ScrollList<Data>({
  data,
  renderItem,
  onRefresh,
  refreshing,
  emptyLabelProps,
}: ScrollListProps<Data>) {
  return (
    <FlatList
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
        <RefreshControl onRefresh={onRefresh} refreshing={!!refreshing} />
      }
      style={{
        width: '100%',
      }}
      contentContainerStyle={{
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 50,
        gap: 25,
      }}
    />
  );
}
