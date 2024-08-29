import React from 'react';

import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';

import { TextInputProps, SecurityInput } from '../TextInput';

type FormInputPasswordProps = {} & Omit<
  TextInputProps,
  'value' | 'error' | 'onChange' | 'onChangeText'
>;

export function FormInputPassword<TFieldValue extends FieldValues>({
  control,
  name,
  rules,
  errorMessage,
  ...props
}: FormInputPasswordProps & UseControllerProps<TFieldValue>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ fieldState, field }) => (
        <SecurityInput
          errorMessage={fieldState.error?.message || errorMessage}
          onChangeText={field.onChange}
          value={field.value}
          {...props}
        />
      )}
    />
  );
}
