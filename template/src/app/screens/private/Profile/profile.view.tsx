import { Text } from 'react-native';

import { ScreenLayout } from '@shared';

import { SCREEN_NAME } from './constants';
import { ProfileController } from './profile.controller';

type ProfileViewProps = {
  controller: ProfileController;
};

export function ProfileView({ controller }: ProfileViewProps) {
  return (
    <ScreenLayout>
      <Text>{SCREEN_NAME}</Text>
    </ScreenLayout>
  );
}
