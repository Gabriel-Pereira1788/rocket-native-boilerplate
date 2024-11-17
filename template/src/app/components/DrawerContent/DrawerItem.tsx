import React from 'react';

import { Icon, IconProps } from '../Icon';
import { TouchableOpacityBox } from '../TouchableOpacityBox/TouchableOpacityBox';
import { Text } from '../Text/Text';

type DrawerItemProps = {
  label: string;
  iconName: IconProps['iconName'];
  onPress?: () => void;
};

export function DrawerItem({ label, iconName, onPress }: DrawerItemProps) {
  return (
    <TouchableOpacityBox
      activeOpacity={0.8}
      boxProps={{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        gap: 'sp10',
      }}
      onPress={onPress}>
      <Icon iconName={iconName} size={30} color="#475569" />
      <Text preset="semiBold/16" text={label} />
    </TouchableOpacityBox>
  );
}
