import { AuthServiceDomain, useAuthSignIn } from '@domain';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { ToasterService, UserCredentialsActions } from '@services';
import { useForm } from 'react-hook-form';

import {
  TOASTER_ERROR_MESSAGE,
  TOASTER_ERROR_TITLE,
  TOASTER_SUCCESS_TITLE,
} from './constants';
import { loginSchema, LoginSchema } from './library';

type LoginControllerProps = {
  toasterService: ToasterService;
  authServiceDomain: AuthServiceDomain;
  setCredentials: UserCredentialsActions['setCredentials'];
};

export function useLoginController({
  toasterService,
  authServiceDomain,
  setCredentials,
}: LoginControllerProps) {
  const { signIn, loading } = useAuthSignIn({
    signInService: authServiceDomain.signIn,
    onSuccess: response => {
      toasterService.success(
        TOASTER_SUCCESS_TITLE,
        `Welcome ${response.username}!`,
      );
      setCredentials(response);
    },
    onError: () => {
      toasterService.error(TOASTER_ERROR_TITLE, TOASTER_ERROR_MESSAGE);
    },
  });

  const navigation = useNavigation();

  const { control, handleSubmit } = useForm<LoginSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: zodResolver(loginSchema),
  });

  function redirectToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  async function onSubmit(data: LoginSchema) {
    await signIn(data.email, data.password);
  }

  return {
    redirectToSignUpScreen,
    onSubmit: handleSubmit(onSubmit),
    controlForm: control,
    loadingSubmit: loading,
  };
}

export type LoginController = ReturnType<typeof useLoginController>;
