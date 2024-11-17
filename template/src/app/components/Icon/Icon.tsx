import React from 'react';

import { IconWeight } from 'phosphor-react-native/lib/typescript/index';

import { buildIcon, mappedIcons } from './library/buildIcon';
import { useTheme } from '@helpers';
import { Theme } from '@styles';
export type IconProps = {
  iconName: keyof typeof mappedIcons;
  size?: number;
  weight?: IconWeight;
  color?: keyof Theme['colors'];
};

export function Icon({
  iconName,
  color = 'neutralBlack',
  weight = 'regular',
  size = 20,
}: IconProps) {
  const IconRender = buildIcon(iconName);
  const { colors } = useTheme();
  const _color = colors[color];
  return <IconRender color={_color} weight={weight} size={size} />;
}
