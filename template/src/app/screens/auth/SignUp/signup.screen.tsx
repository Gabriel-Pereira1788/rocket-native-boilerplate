import { AuthServiceFactory } from '@domain';
import { ToasterServiceFactory } from '@services';

import { useSignUpController } from './signup.controller';
import { SignUpView } from './signup.view';

export function SignUpScreen() {
  const authServiceDomain = AuthServiceFactory();
  const toasterService = ToasterServiceFactory();

  const controller = useSignUpController({ toasterService, authServiceDomain });

  return <SignUpView controller={controller} />;
}
