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
        className="w-full p-5 rounded-md flex-row bg-slate-50 border-2 border-gray-200"
        style={{ gap: 10 }}>
        <Image
          source={{ uri: follower.avatarUrl }}
          width={70}
          height={70}
          className="rounded-full"
        />
        <View style={{ gap: 5 }}>
          <Text className="text-white font-bold text-slate-800">
            {follower.username}
          </Text>
          <Text className="text-white font-bold text-slate-800">
            {follower.fullname}
          </Text>
          <Text className="text-white font-bold text-slate-800">
            {follower.bio}
          </Text>
        </View>
      </View>
    </AnimatedFadeEntrance>
  );
}
