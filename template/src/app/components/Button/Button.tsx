import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {buildVariant} from './library';

export type ButtonProps = {
  text: string;
  variant?: 'outline' | 'filled' | 'transparent';
} & TouchableOpacityProps;

export function Button({
  text,
  variant = 'filled',
  ...touchableOpacityProps
}: ButtonProps) {
  const _variant = buildVariant(variant);

  return (
    <TouchableOpacity
      {...touchableOpacityProps}
      activeOpacity={0.8}
      className={
        'rounded-lg items-center justify-center shadow-lg ' + _variant.container
      }>
      <Text className={'text-base ' + _variant.text}>{text}</Text>
    </TouchableOpacity>
  );
}
