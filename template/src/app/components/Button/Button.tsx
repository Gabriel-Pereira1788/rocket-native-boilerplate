import React from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

import { If } from '@helpers';

import { buildVariant } from './library';

export type ButtonProps = {
  text: string;
  loading?: boolean;
  variant?: 'outline' | 'filled' | 'transparent';
} & TouchableOpacityProps;

export function Button({
  text,
  loading,
  variant = 'filled',
  ...touchableOpacityProps
}: ButtonProps) {
  const _variant = buildVariant(variant);
  const _loadingStyle = loading ? ' opacity-70' : '';

  return (
    <TouchableOpacity
      {...touchableOpacityProps}
      activeOpacity={0.8}
      disabled={loading}
      className={
        'rounded-lg items-center justify-center shadow-lg ' +
        _variant.container +
        _loadingStyle
      }>
      <If
        condition={!!loading}
        elseRender={
          <Text className={'text-base ' + _variant.text}>{text}</Text>
        }>
        <ActivityIndicator size={20} />
      </If>
    </TouchableOpacity>
  );
}
