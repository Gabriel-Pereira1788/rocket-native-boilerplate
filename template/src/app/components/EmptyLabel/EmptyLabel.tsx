import { Text, View } from 'react-native';

import { Icon, IconProps } from '../Icon';

export type EmptyLabelProps = {
  title: string;
  message: string;
  iconName: IconProps['iconName'];
};
export function EmptyLabel({ title, message, iconName }: EmptyLabelProps) {
  return (
    <View className="items-center justify-center">
      <Icon iconName={iconName} color="#dddddd" size={100} />
      <Text className="text-3xl text-slate-800">{title}</Text>
      <Text className="text-base text-slate-800">{message}</Text>
    </View>
  );
}
