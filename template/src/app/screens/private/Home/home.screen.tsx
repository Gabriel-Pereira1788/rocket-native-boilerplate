import { useHomeController } from './home.controller';
import { HomeView } from './home.view';

export function HomeScreen() {
  const controller = useHomeController({});

  return <HomeView controller={controller} />;
}
