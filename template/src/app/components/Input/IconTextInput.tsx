import { IconPress } from '../Icon';
import { Icon, IconProps } from '../Icon/Icon';

import { Input, InputProps } from './Input';

export type IconTextInputProps = {
  leftIconProps?: Omit<IconProps, 'size'>;
  rightIconProps?: Omit<IconProps, 'size'> & { onPress?: () => void };
} & InputProps;

export function IconTextInput({
  leftIconProps,
  rightIconProps,
  ...inputProps
}: IconTextInputProps) {
  return (
    <Input
      {...inputProps}
      LeftElement={leftIconProps && <Icon {...leftIconProps} size={25} />}
      RightElement={
        rightIconProps && (
          <IconPress {...rightIconProps} size={25} variant="transparent" />
        )
      }
    />
  );
}
