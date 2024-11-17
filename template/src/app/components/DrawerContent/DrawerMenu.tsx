import React from 'react';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { AppDrawerParamList } from '@router';

import { IconPress } from '../Icon';
import { Box } from '../Box/Box';

export function DrawerMenu() {
  const navigation = useNavigation<DrawerNavigationProp<AppDrawerParamList>>();

  return (
    <Box ml="sp15">
      <IconPress iconName="list" onPress={navigation.openDrawer} />
    </Box>
  );
}
