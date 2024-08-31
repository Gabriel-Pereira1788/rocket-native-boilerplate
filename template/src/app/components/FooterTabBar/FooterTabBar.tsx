import { View } from 'react-native';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { AppTabParamList } from '@router';

import { FooterTabItem } from './FooterTabItem';
import { buildTabItem } from './library';

export function FooterTabBar({ state, navigation }: BottomTabBarProps) {
  return (
    <View className=" flex-row pt-4 bg-slate-50 shadow-md">
      {state.routes.map((route, index) => {
        const tabItem = buildTabItem(route.name as keyof AppTabParamList);
        const isFocused = state.index === index;

        function onPress() {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true } as any);
          }
        }
        return (
          <FooterTabItem
            key={index}
            iconColor="#475569"
            iconName={tabItem.iconName}
            focused={isFocused}
            onPress={onPress}
          />
        );
      })}
    </View>
  );
}
