import {
  ActivityIndicatorProps as RNActivityIndicatorProps,
  ActivityIndicator as RNActivityIndicator,
} from 'react-native';

export type ActivityIndicatorProps = {} & Omit<
  RNActivityIndicatorProps,
  'color'
>;
export function ActivityIndicator({ ...rest }: ActivityIndicatorProps) {
  return <RNActivityIndicator color={'#4b5563'} {...rest} />;
}
