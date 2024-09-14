import { Text } from 'react-native';

import { ScreenLayout } from '@shared';

import { SettingsController } from './settings.controller';

type SettingsViewProps = {
  controller: SettingsController;
};

export function SettingsView({ controller }: SettingsViewProps) {
  const screenName = 'Settings';
  return (
    <ScreenLayout>
      <Text>{screenName}</Text>
    </ScreenLayout>
  );
}
