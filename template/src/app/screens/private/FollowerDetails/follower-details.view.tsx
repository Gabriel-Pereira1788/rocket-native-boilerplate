import { Image, Text } from 'react-native';

import { ScreenLayout } from '@shared';

import { FollowerDetailsController } from './follower-details.controller';

type FollowerDetailsViewProps = {
  controller: FollowerDetailsController;
};

export function FollowerDetailsView({ controller }: FollowerDetailsViewProps) {
  return (
    <ScreenLayout goBack>
      <Image
        className="mb-5 rounded-full"
        source={{ uri: controller.details?.avatarUrl }}
        width={100}
        height={100}
      />
      <Text>{controller.details?.username}</Text>
      <Text>{controller.details?.fullname}</Text>
      <Text>{controller.details?.bio}</Text>
    </ScreenLayout>
  );
}
