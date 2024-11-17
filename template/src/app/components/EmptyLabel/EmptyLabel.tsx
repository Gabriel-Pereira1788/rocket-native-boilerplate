import { Icon, IconProps } from '../Icon';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

export type EmptyLabelProps = {
  title: string;
  message: string;
  iconName: IconProps['iconName'];
};
export function EmptyLabel({ title, message, iconName }: EmptyLabelProps) {
  return (
    <Box alignItems="center" justifyContent="center">
      <Icon iconName={iconName} color="#dddddd" size={100} />
      <Text preset="medium/30" text={title} />
      <Text text={message} />
    </Box>
  );
}
