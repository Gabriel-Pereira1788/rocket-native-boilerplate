import { Text } from 'react-native';

import { ScreenLayout } from '@shared';

import { FollowerDetailsController } from './follower-details.controller';

type FollowerDetailsViewProps = {
  controller: FollowerDetailsController;
};

export function FollowerDetailsView({ controller }: FollowerDetailsViewProps) {
  const screenName = 'FollowerDetails';
  return (
    <ScreenLayout goBack>
      <Text>{screenName}</Text>
    </ScreenLayout>
  );
}
