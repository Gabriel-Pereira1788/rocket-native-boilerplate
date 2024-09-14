import React from 'react';
import { View } from 'react-native';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

import { DrawerMenu, FooterTabBar, IconPress } from '@components';
import { HomeScreen, ProfileScreen, SearchScreen } from '@screens';

import { AppDrawerParamList } from './AppDrawerNavigator';

export type AppTabParamList = {
  HomeScreen: undefined;
  SearchScreen: undefined;
  ProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<AppTabParamList>();
export function AppTabNavigator() {
  function renderTabBar(props: BottomTabBarProps) {
    return <FooterTabBar {...props} />;
  }
  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerTransparent: true,
        headerTitle: '',
        headerLeft: DrawerMenu,
      }}>
      <Tab.Screen component={HomeScreen} name="HomeScreen" />
      <Tab.Screen component={SearchScreen} name="SearchScreen" />
      <Tab.Screen component={ProfileScreen} name="ProfileScreen" />
    </Tab.Navigator>
  );
}
