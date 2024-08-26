import { TouchableOpacity } from 'react-native';

import { Icon, IconProps } from './Icon';

export type IconPressProps = {
  onPress?: () => void;
  testID?: string;
  variant?: 'filled' | 'transparent';
} & IconProps;
export function IconPress({
  onPress,
  testID,
  variant = 'filled',
  ...iconProps
}: IconPressProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      testID={testID}
      activeOpacity={0.8}
      className={
        variant === 'filled'
          ? 'bg-white rounded-xl p-3 items-center justify-center shadow'
          : undefined
      }>
      <Icon {...iconProps} />
    </TouchableOpacity>
  );
}
