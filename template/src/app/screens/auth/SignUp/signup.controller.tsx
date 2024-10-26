import { AuthServiceDomain, useAuthSignUp } from '@domain';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { ToasterService } from '@services';
import { useForm } from 'react-hook-form';

import {
  TOASTER_ERROR_MESSAGE,
  TOASTER_ERROR_TITLE,
  TOASTER_SUCCESS_MESSAGE,
  TOASTER_SUCCESS_TITLE,
} from './constants';
import { signUpSchema, SignUpSchema } from './library/signUpSchema';

type SignUpControllerProps = {
  authServiceDomain: AuthServiceDomain;
  toasterService: ToasterService;
};

export function useSignUpController({
  authServiceDomain,
  toasterService,
}: SignUpControllerProps) {
  const { signUp, loading } = useAuthSignUp({
    signUpService: authServiceDomain.signUp,
    onSuccess: () => {
      toasterService.success(TOASTER_SUCCESS_TITLE, TOASTER_SUCCESS_MESSAGE);
    },
    onError: () => {
      toasterService.error(TOASTER_ERROR_TITLE, TOASTER_ERROR_MESSAGE);
    },
  });

  const navigation = useNavigation();

  const { control, handleSubmit } = useForm<SignUpSchema>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: zodResolver(signUpSchema),
  });

  async function onSubmit(data: SignUpSchema) {
    await signUp(data);
  }

  function redirectToLoginScreen() {
    navigation.navigate('LoginScreen');
  }
  return {
    loading,
    redirectToLoginScreen,
    controlForm: control,
    onSubmit: handleSubmit(onSubmit),
  };
}

export type SignUpController = ReturnType<typeof useSignUpController>;
