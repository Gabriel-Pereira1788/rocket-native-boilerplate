import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { Icon, IconProps } from '../Icon';

type DrawerItemProps = {
  label: string;
  iconName: IconProps['iconName'];
  onPress?: () => void;
};

export function DrawerItem({ label, iconName, onPress }: DrawerItemProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className="flex-row w-full items-center"
      onPress={onPress}
      style={{ gap: 10 }}>
      <Icon iconName={iconName} size={30} color="#475569" />
      <Text className="text-lg text-slate-800 font-semibold">{label}</Text>
    </TouchableOpacity>
  );
}
