import { Text } from 'react-native';

import { ScreenLayout } from '@shared';

import { SCREEN_NAME } from './constants';
import { SettingsController } from './settings.controller';

type SettingsViewProps = {
  controller: SettingsController;
};

export function SettingsView({ controller }: SettingsViewProps) {
  return (
    <ScreenLayout>
      <Text>{SCREEN_NAME}</Text>
    </ScreenLayout>
  );
}
