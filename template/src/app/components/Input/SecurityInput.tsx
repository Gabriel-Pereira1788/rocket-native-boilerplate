import {useState} from 'react';

import {IconTextInput} from './IconTextInput';
import {InputProps} from './Input';

export type SecurityInputProps = {} & Omit<
  InputProps,
  'LeftElement' | 'RightElement'
>;
export function SecurityInput({...inputProps}: SecurityInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword(prev => !prev);
  }
  return (
    <IconTextInput
      {...inputProps}
      secureTextEntry={!showPassword}
      leftIconProps={{
        iconName: 'lock',
      }}
      rightIconProps={{
        iconName: showPassword ? 'eye' : 'eyeSlash',
        color: '#ACADB9',
        onPress: toggleShowPassword,
      }}
    />
  );
}
