import { Image, Text, TouchableOpacity, View } from 'react-native';

import { GitHubFollower } from '@domain';

export type FollowerCardProps = {
  follower: GitHubFollower;
};
export function FollowerCard({ follower }: FollowerCardProps) {
  return (
    <View
      className="w-full p-5 rounded-md flex-row bg-slate-50 border-2 border-gray-100"
      style={{ gap: 10 }}>
      <Image
        source={{ uri: follower.avatarUrl }}
        width={70}
        height={70}
        className="rounded-full"
      />
      <Text className="text-white font-bold text-slate-800">
        {follower.followerName}
      </Text>
    </View>
  );
}
