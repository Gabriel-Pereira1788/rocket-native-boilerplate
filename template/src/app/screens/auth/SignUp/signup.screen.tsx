import { useSignUpController } from './signup.controller';
import { SignUpView } from './signup.view';

export function SignUpScreen() {
  const controller = useSignUpController();

  return <SignUpView controller={controller} />;
}
