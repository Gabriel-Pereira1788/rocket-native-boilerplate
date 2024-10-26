import { AuthServiceFactory } from '@domain';
import { ToasterServiceFactory, useUserCredentialsActions } from '@services';

import { useLoginController } from './login.controller';
import { LoginView } from './login.view';

export function LoginScreen() {
  const { setCredentials } = useUserCredentialsActions();
  const authServiceDomain = AuthServiceFactory();
  const toasterService = ToasterServiceFactory();

  const controller = useLoginController({
    authServiceDomain,
    toasterService,
    setCredentials,
  });
  return <LoginView controller={controller} />;
}
