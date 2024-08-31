import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppTabNavigator, AppTabParamList } from './AppTabNavigator';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabParamList>;
};

const Stack = createNativeStackNavigator<AppStackParamList>();
export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName={'AppTabNavigator'}>
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
    </Stack.Navigator>
  );
}
