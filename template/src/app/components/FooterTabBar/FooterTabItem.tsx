import React, { useCallback, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';

import { If } from '@helpers';
import Animated, {
  BounceIn,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { Icon, IconProps } from '../Icon';
import { Box } from '../Box/Box';

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
      style={{
        transform: [{ scale }],
        alignItems: 'center',
        flex: 1,
        position: 'relative',
        marginBottom: 20,
      }}
      accessibilityRole="button">
      <Icon iconName={iconName} color={iconColor} size={25} />
      <If condition={focused}>
        <Animated.View
          entering={BounceIn}
          style={{ position: 'absolute', bottom: -8, zIndex: 10 }}>
          <Box borderRadius={'rd100'} p="sp3" backgroundColor="secondaryMain" />
        </Animated.View>
      </If>
    </TouchableOpacityAnimated>
  );
}
