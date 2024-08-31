import { AppTabParamList } from '@router';

import { IconProps } from '../../Icon';

const mappedScreenToProps: Record<
  keyof AppTabParamList,
  { iconName: IconProps['iconName'] }
> = {
  HomeScreen: {
    iconName: 'house',
  },
  ProfileScreen: {
    iconName: 'user',
  },
  SearchScreen: {
    iconName: 'magnifyingGlass',
  },
};
export function buildTabItem(routeName: keyof AppTabParamList) {
  return mappedScreenToProps[routeName];
}
