import React from 'react';
import {
  TextInput,
  View,
  TextInputProps as RNTextInputProps,
  Text,
} from 'react-native';

import { If } from '@helpers';

import { buildInputStatus, buildStatusStyles } from './library';

export type TextInputProps = {
  LeftElement?: JSX.Element;
  RightElement?: JSX.Element;
  errorMessage?: string;
  disabled?: boolean;
} & RNTextInputProps;

export function Input(props: TextInputProps) {
  const { LeftElement, RightElement, errorMessage, ...textInputProps } = props;
  const _status = buildInputStatus(props);
  const _statusStyles = buildStatusStyles(_status);

  return (
    <View className="w-full" style={{ gap: 5 }}>
      <View
        className={
          'w-full flex-row items-center justify-between px-3 h-16  rounded-xl shadow-lg ' +
          _statusStyles
        }>
        <If condition={!!LeftElement}>
          <View className="mr-4">{LeftElement}</View>
        </If>

        <TextInput
          {...textInputProps}
          placeholderTextColor={'#ACADB9'}
          className="flex-1"
          autoCapitalize="none"
        />
        <If condition={!!RightElement}>
          <View>{RightElement}</View>
        </If>
      </View>
      <If condition={!!errorMessage}>
        <View className="w-full pl-2">
          <Text className="font-semibold text-red-500 text-base">
            {errorMessage}
          </Text>
        </View>
      </If>
    </View>
  );
}
