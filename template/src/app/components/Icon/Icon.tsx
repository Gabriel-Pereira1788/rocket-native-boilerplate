import React from 'react';
import { TouchableOpacity } from 'react-native';

import { IconWeight } from 'phosphor-react-native';

import { buildIcon, mappedIcons } from './library/buildIcon';
export type IconProps = {
  iconName: keyof typeof mappedIcons;
  size?: number;
  weight?: IconWeight;
  color?: string;
};

export function Icon({
  iconName,
  color = '#141718',
  weight = 'regular',
  size = 20,
}: IconProps) {
  const IconRender = buildIcon(iconName);
  return <IconRender color={color} weight={weight} size={size} />;
}
