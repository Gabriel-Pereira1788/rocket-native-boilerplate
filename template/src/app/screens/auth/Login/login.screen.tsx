import { useAuthSignIn } from '@domain';
import { toasterService } from '@services';

import { useLoginController } from './login.controller';
import { LoginView } from './login.view';

export function LoginScreen() {
  const signInUseCase = useAuthSignIn({
    onSuccess: () => {
      toasterService.success('Success', 'Welcome John doe!');
    },
    onError: () => {
      toasterService.error(
        'Invalid credentials',
        'Verify your email or password and try again.',
      );
    },
  });

  const controller = useLoginController({ signInUseCase });
  return <LoginView controller={controller} />;
}
