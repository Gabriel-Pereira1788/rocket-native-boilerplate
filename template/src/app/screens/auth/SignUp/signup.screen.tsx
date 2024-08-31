import { useAuthSignUp } from '@domain';
import { toasterService } from '@services';

import { useSignUpController } from './signup.controller';
import { SignUpView } from './signup.view';

export function SignUpScreen() {
  const signUpUseCase = useAuthSignUp({
    onSuccess: () => {
      toasterService.success(
        'everything ok!',
        'registration completed successfully',
      );
    },
    onError: () => {
      toasterService.error('Failed!', 'try again later');
    },
  });
  const controller = useSignUpController({ signUpUseCase });

  return <SignUpView controller={controller} />;
}
