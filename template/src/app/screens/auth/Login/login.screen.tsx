import {useLoginController} from './login.controller';
import {LoginView} from './login.view';

export function LoginScreen() {
  return <LoginView controller={useLoginController()} />;
}
