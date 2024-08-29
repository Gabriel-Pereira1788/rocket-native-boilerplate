import { useAuthSignUp } from '@domain';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { toasterService } from '@services';
import { useForm } from 'react-hook-form';

import { signUpSchema, SignUpSchema } from './library/signUpSchema';

export function useSignUpController() {
  const navigation = useNavigation();
  const { signUp, loading } = useAuthSignUp({
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
