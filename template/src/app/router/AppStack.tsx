import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FollowerDetailsScreen } from '@screens';

import { AppDrawerNavigator, AppDrawerParamList } from './AppDrawerNavigator';

export type AppStackParamList = {
  AppDrawerStack: NavigatorScreenParams<AppDrawerParamList>;
  FollowerDetailsScreen: { id: number };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

type Props = {
  initialRouteName?: keyof AppStackParamList;
};
export function AppStack({ initialRouteName = 'AppDrawerStack' }: Props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName={initialRouteName}>
      <Stack.Screen name="AppDrawerStack" component={AppDrawerNavigator} />
      <Stack.Screen
        name="FollowerDetailsScreen"
        component={FollowerDetailsScreen}
      />
    </Stack.Navigator>
  );
}
