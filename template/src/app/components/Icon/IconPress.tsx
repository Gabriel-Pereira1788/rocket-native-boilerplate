import { Icon, IconProps } from './Icon';
import { TouchableOpacityBox } from '../TouchableOpacityBox/TouchableOpacityBox';
import { BoxProps } from '../Box/Box';

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
  const boxProps: BoxProps | undefined =
    variant === 'filled'
      ? {
          backgroundColor: 'neutralWhite',
          padding: 'sp12',
          borderRadius: 'rd12',
          alignItems: 'center',
          justifyContent: 'center',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
          shadowColor: 'neutralGray500',
          elevation: 2,
        }
      : undefined;
  return (
    <TouchableOpacityBox
      onPress={onPress}
      activeOpacity={0.8}
      testID={testID}
      boxProps={boxProps}>
      <Icon {...iconProps} />
    </TouchableOpacityBox>
  );
}
