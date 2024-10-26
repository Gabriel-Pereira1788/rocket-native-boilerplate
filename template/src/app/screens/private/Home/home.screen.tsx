import { GitRepoServiceFactory } from '@domain';

import { useHomeController } from './home.controller';
import { HomeView } from './home.view';

export function HomeScreen() {
  const gitRepoServiceDomain = GitRepoServiceFactory();
  const controller = useHomeController({ gitRepoServiceDomain });

  return <HomeView controller={controller} />;
}
