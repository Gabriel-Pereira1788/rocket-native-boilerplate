import React from 'react';

import { Controller, FieldValues, UseControllerProps } from 'react-hook-form';

import { InputProps, SecurityInput } from '../Input';

type FormInputPasswordProps = {} & Omit<
  InputProps,
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
