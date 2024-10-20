import { Text, View } from 'react-native';

import { HOME_HEADER_SUBTITLE, HOME_HEADER_TITLE } from '../constants';

export function HomeScreenListHeader() {
  return (
    <View className="w-full my-2">
      <Text className="text-3xl px-2 -tracking-widest font-bold  text-left text-slate-800">
        {HOME_HEADER_TITLE}
      </Text>
      <View className="w-full items-start justify-center p-4">
        <Text className="font-semibold text-base">{HOME_HEADER_SUBTITLE}</Text>
      </View>
    </View>
  );
}
