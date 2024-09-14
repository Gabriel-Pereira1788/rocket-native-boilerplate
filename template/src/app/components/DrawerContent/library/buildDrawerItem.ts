import { AppDrawerParamList } from 'src/app/router/AppDrawerNavigator';

import { IconProps } from '../../Icon';

export const mappedScreenToProps: Record<
  keyof AppDrawerParamList,
  { label: string; iconName: IconProps['iconName'] }
> = {
  AppTabNavigator: {
    label: 'Home',
    iconName: 'house',
  },
  SettingsScreen: {
    label: 'Settings',
    iconName: 'gear',
  },
};
export function buildDrawerItem(routeName: keyof AppDrawerParamList) {
  return mappedScreenToProps[routeName];
}
