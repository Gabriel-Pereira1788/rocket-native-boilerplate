import { Text } from 'react-native';

import { ScreenLayout } from '@shared';

import { ProfileController } from './profile.controller';

type ProfileViewProps = {
  controller: ProfileController;
};

export function ProfileView({ controller }: ProfileViewProps) {
  const screenName = 'Profile';
  return (
    <ScreenLayout>
      <Text>{screenName}</Text>
    </ScreenLayout>
  );
}
