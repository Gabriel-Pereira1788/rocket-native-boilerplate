import { useGetRepoFollowers } from '@domain';

import { useHomeController } from './home.controller';
import { HomeView } from './home.view';

export function HomeScreen() {
  const getRepoFollowersUseCase = useGetRepoFollowers();
  const controller = useHomeController({ getRepoFollowersUseCase });

  return <HomeView controller={controller} />;
}
