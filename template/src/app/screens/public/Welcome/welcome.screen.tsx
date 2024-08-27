import { useWelcomeScreenController } from './welcome.controller';
import { WelcomeView } from './welcome.view';

export function WelcomeScreen() {
  return <WelcomeView controller={useWelcomeScreenController()} />;
}
