import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';

import { If } from '@helpers';

import { buildVariant } from './library';
import { TouchableOpacityBox } from '../TouchableOpacityBox/TouchableOpacityBox';
import { Text } from '../Text/Text';

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

  return (
    <TouchableOpacityBox
      boxProps={{
        borderRadius: 'rd8',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: loading ? 0.7 : 1,
        ..._variant.container,
      }}
      activeOpacity={0.8}
      disabled={loading}
      {...touchableOpacityProps}>
      <If
        condition={!!loading}
        elseRender={
          <Text preset="medium/16" text={text} color={_variant.textColor} />
        }>
        <ActivityIndicator size={20} />
      </If>
    </TouchableOpacityBox>
  );
}
