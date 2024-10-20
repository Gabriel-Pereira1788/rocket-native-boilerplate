import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppDrawerParamList } from './AppDrawerNavigator';
import { AppStackParamList } from './AppStack';
import { AppTabParamList } from './AppTabNavigator';
import { AuthStackParamList } from './AuthStack';

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends AuthStackParamList,
        AppStackParamList,
        AppDrawerParamList {}
  }
}

export type AppScreenProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>;
export type AppTabScreenProps<RouteName extends keyof AppTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<AppTabParamList, RouteName>,
    DrawerScreenProps<AppDrawerParamList, 'AppTabNavigator'>
  >;

export type AppDrawerScreenProps<RouteName extends keyof AppDrawerParamList> =
  CompositeScreenProps<
    DrawerScreenProps<AppDrawerParamList, RouteName>,
    BottomTabScreenProps<AppTabParamList>
  >;
