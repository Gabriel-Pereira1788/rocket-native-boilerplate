import React, { useCallback, useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { If } from '@helpers';
import Animated, {
  BounceIn,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { Icon, IconProps } from '../Icon';

type FooterTabItemProps = {
  iconName: IconProps['iconName'];
  iconColor: string;
  focused: boolean;
  onPress?: () => void;
};

const TouchableOpacityAnimated =
  Animated.createAnimatedComponent(TouchableOpacity);

export function FooterTabItem({
  iconName,
  focused,
  iconColor,
  onPress,
}: FooterTabItemProps) {
  const scale = useSharedValue(1);

  const runFocusedAnimation = useCallback(() => {
    if (focused) {
      scale.value = withTiming(1.2);
    } else {
      scale.value = withTiming(1);
    }
  }, [focused, scale]);

  useEffect(() => {
    runFocusedAnimation();
  }, [focused, runFocusedAnimation]);

  return (
    <TouchableOpacityAnimated
      activeOpacity={0.8}
      onPress={onPress}
      className="items-center flex-1 relative mb-5"
      style={{ transform: [{ scale }] }}
      accessibilityRole="button">
      <Icon iconName={iconName} color={iconColor} size={25} />
      <If condition={focused}>
        <Animated.View
          entering={BounceIn}
          style={{ position: 'absolute', bottom: -8, zIndex: 10 }}>
          <View className="rounded-full p-1 mt-1 bg-slate-500" />
        </Animated.View>
      </If>
    </TouchableOpacityAnimated>
  );
}
