import { Image } from 'react-native';

import { AnimatedFadeEntrance } from '@animations';
import { GitHubFollower } from '@domain';
import { Box, Text } from '@components';

export type FollowerCardProps = {
  follower: GitHubFollower;
};

export function FollowerCard({ follower }: FollowerCardProps) {
  return (
    <AnimatedFadeEntrance entrance="up">
      <Box
        width={'100%'}
        padding="sp10"
        borderRadius="rd8"
        flexDirection="row"
        backgroundColor="background"
        borderColor="neutralGray200"
        borderWidth={2}
        alignItems="center"
        height={112}
        style={{ gap: 10 }}>
        <Image
          source={{ uri: follower.avatarUrl }}
          width={60}
          height={60}
          style={{ borderRadius: 100 }}
        />
        <Box style={{ gap: 5 }}>
          <Text
            color="textPrimary"
            preset="semiBold/14"
            text={follower.fullname ?? ''}
          />

          <Text
            color="textPrimary"
            preset="medium/14"
            text={'@' + follower.username}
          />
        </Box>
      </Box>
    </AnimatedFadeEntrance>
  );
}
