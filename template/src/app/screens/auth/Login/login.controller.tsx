import { useAuthSignIn } from '@domain';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { toasterService } from '@services';
import { useForm } from 'react-hook-form';

import { loginSchema, LoginSchema } from './library';

export function useLoginController() {
  const navigation = useNavigation();

  const { signIn, loading } = useAuthSignIn({
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
