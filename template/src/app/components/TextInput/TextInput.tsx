import React from 'react';
import { TextInput, TextInputProps as RNTextInputProps } from 'react-native';

import { If } from '@helpers';

import { buildInputStatus, buildStatusStyles } from './library';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

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
    <Box width={'100%'} style={{ gap: 5 }}>
      <Box
        width={'100%'}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        px="sp10"
        borderRadius="rd15"
        height={64}
        shadowOffset={{ width: 0, height: 1 }}
        shadowOpacity={0.1}
        shadowRadius={10}
        shadowColor={'neutralBlack'}
        {..._statusStyles}>
        <If condition={!!LeftElement}>
          <Box mr="sp15">{LeftElement}</Box>
        </If>

        <TextInput
          {...textInputProps}
          placeholderTextColor={'#ACADB9'}
          style={{ flex: 1 }}
          autoCapitalize="none"
        />
        <If condition={!!RightElement}>
          <Box>{RightElement}</Box>
        </If>
      </Box>
      <If condition={!!errorMessage}>
        <Box width={'100%'} pl="sp10">
          <Text
            preset="semiBold/16"
            color="feedbackError"
            text={errorMessage ?? ''}
          />
        </Box>
      </If>
    </Box>
  );
}
