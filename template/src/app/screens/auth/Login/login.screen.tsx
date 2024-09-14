import { useAuthSignIn } from '@domain';
import { toasterService, useUserCredentialsActions } from '@services';

import { useLoginController } from './login.controller';
import { LoginView } from './login.view';

export function LoginScreen() {
  const { setCredentials } = useUserCredentialsActions();
  const signInUseCase = useAuthSignIn({
    onSuccess: response => {
      toasterService.success('Success', 'Welcome John doe!');
      setCredentials(response);
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
