import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppStackParamList } from './AppStack';
import { AppTabParamList } from './AppTabNavigator';
import { AuthStackParamList } from './AuthStack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthStackParamList, AppStackParamList {}
  }
}

export type AppTabScreenProps<RouteName extends keyof AppTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<AppTabParamList, RouteName>,
    NativeStackScreenProps<AppStackParamList, 'AppTabNavigator'>
  >;
