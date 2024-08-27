import React from 'react';
import { TextInput, View, TextInputProps, Text } from 'react-native';

import { buildInputStatus, buildStatusStyles } from './library';

export type InputProps = {
  LeftElement?: JSX.Element;
  RightElement?: JSX.Element;
  errorMessage?: string;
  disabled?: boolean;
} & TextInputProps;

export function Input(props: InputProps) {
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
        {LeftElement && <View className="mr-4">{LeftElement}</View>}

        <TextInput
          {...textInputProps}
          placeholderTextColor={'#ACADB9'}
          className="flex-1"
          autoCapitalize="none"
        />

        {RightElement && <View>{RightElement}</View>}
      </View>
      {errorMessage && (
        <View className="w-full pl-2">
          <Text className="font-semibold text-red-500 text-base">
            {errorMessage}
          </Text>
        </View>
      )}
    </View>
  );
}
