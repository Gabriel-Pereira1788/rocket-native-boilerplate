import React from 'react';
import { View } from 'react-native';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { AppDrawerParamList } from '@router';

import { IconPress } from '../Icon';

export function DrawerMenu() {
  const navigation = useNavigation<DrawerNavigationProp<AppDrawerParamList>>();

  return (
    <View className="pl-5">
      <IconPress iconName="list" onPress={navigation.openDrawer} />
    </View>
  );
}
