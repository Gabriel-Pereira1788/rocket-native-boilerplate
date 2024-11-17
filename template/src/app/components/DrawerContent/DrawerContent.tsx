import React from 'react';

import { useAppSafeArea } from '@helpers';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { AppDrawerParamList } from 'src/app/router/AppDrawerNavigator';

import { DrawerItem } from './DrawerItem';
import { buildDrawerItem } from './library';
import { Box } from '../Box/Box';

type DrawerContentProps = {
  signOut: () => void;
};

export function DrawerContent({
  state,
  navigation,
  signOut,
}: DrawerContentComponentProps & DrawerContentProps) {
  const { top } = useAppSafeArea();
  return (
    <Box pl="sp15" style={{ paddingTop: top + 10, gap: 25 }}>
      {state.routes.map(route => {
        const drawerItem = buildDrawerItem(
          route.name as keyof AppDrawerParamList,
        );

        function onPress() {
          navigation.navigate({ name: route.name, merge: true } as any);
        }

        return (
          <DrawerItem
            key={route.key}
            label={drawerItem.label}
            iconName={drawerItem.iconName}
            onPress={onPress}
          />
        );
      })}
      <DrawerItem label="Logout" iconName="doorOpen" onPress={signOut} />
    </Box>
  );
}
