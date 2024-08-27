import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen, SignUpScreen, WelcomeScreen } from '@screens';

export type AppStackParamList = {
  WelcomeScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AuthStack({
  initialRouteName = 'WelcomeScreen',
}: {
  initialRouteName: keyof AppStackParamList;
}) {
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
