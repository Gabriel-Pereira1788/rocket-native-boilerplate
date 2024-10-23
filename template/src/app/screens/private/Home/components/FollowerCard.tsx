import { Image, Text, View } from 'react-native';

import { AnimatedFadeEntrance } from '@animations';
import { GitHubFollower } from '@domain';

export type FollowerCardProps = {
  follower: GitHubFollower;
};
export function FollowerCard({ follower }: FollowerCardProps) {
  return (
    <AnimatedFadeEntrance entrance="up">
      <View
        className="w-full p-5 rounded-md flex-row bg-slate-50 border-2 border-gray-200 items-center h-28"
        style={{ gap: 10 }}>
        <Image
          source={{ uri: follower.avatarUrl }}
          width={60}
          height={60}
          className="rounded-full"
        />
        <View style={{ gap: 5 }}>
          <Text className="text-white text-base font-bold text-slate-800">
            {follower.fullname}
          </Text>
          <Text className="text-white text-xs font-bold text-slate-800">
            {'@' + follower.username}
          </Text>
        </View>
      </View>
    </AnimatedFadeEntrance>
  );
}
