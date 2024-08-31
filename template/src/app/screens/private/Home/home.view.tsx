import { Text } from 'react-native';

import { ScreenLayout } from '@shared';

import { HomeController } from './home.controller';

type HomeViewProps = {
  controller: HomeController;
};

export function HomeView({ controller }: HomeViewProps) {
  const screenName = 'Home';
  return (
    <ScreenLayout>
      <Text>{screenName}</Text>
    </ScreenLayout>
  );
}
