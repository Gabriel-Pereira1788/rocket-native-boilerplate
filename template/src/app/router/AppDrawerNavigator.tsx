import { useAuthSignOut } from '@domain';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { NavigatorScreenParams } from '@react-navigation/native';

import { DrawerContent, DrawerMenu } from '@components';
import { SettingsScreen } from '@screens';

import { AppTabNavigator, AppTabParamList } from './AppTabNavigator';

export type AppDrawerParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabParamList>;
  SettingsScreen: undefined;
};
const Drawer = createDrawerNavigator<AppDrawerParamList>();

export function AppDrawerNavigator() {
  const { signOut } = useAuthSignOut();

  function renderDrawerContent(props: DrawerContentComponentProps) {
    return <DrawerContent {...props} signOut={signOut} />;
  }

  return (
    <Drawer.Navigator
      drawerContent={renderDrawerContent}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Drawer.Screen
        options={{
          headerShown: true,
          headerTransparent: true,
          headerTitle: '',
          headerLeft: DrawerMenu,
        }}
        name="SettingsScreen"
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
}
