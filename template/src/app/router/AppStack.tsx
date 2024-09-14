import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppDrawerNavigator, AppDrawerParamList } from './AppDrawerNavigator';

export type AppStackParamList = {
  AppDrawerStack: NavigatorScreenParams<AppDrawerParamList>;
};

const Stack = createNativeStackNavigator<AppStackParamList>();
export function AppStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}
      initialRouteName={'AppDrawerStack'}>
      <Stack.Screen name="AppDrawerStack" component={AppDrawerNavigator} />
    </Stack.Navigator>
  );
}
