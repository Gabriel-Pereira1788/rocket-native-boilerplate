import React from 'react';

import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';

import { IconTextInput, IconTextInputProps } from '../TextInput';

type FormInputProps = {} & Omit<
  IconTextInputProps,
  'value' | 'error' | 'onChange' | 'onChangeText'
>;

export function FormInput<TFieldValue extends FieldValues>({
  control,
  name,
  rules,
  errorMessage,
  ...textInputProps
}: FormInputProps & UseControllerProps<TFieldValue>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ fieldState, field }) => {
        return (
          <IconTextInput
            errorMessage={fieldState.error?.message || errorMessage}
            onChangeText={field.onChange}
            value={field.value}
            {...textInputProps}
          />
        );
      }}
    />
  );
}
