import { useAuthSignIn } from '@domain';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import { loginSchema, LoginSchema } from './library';

export function useLoginController() {
  const navigation = useNavigation();

  const { signIn, loading } = useAuthSignIn({
    onSuccess: () => {
      console.log('SUCCESS');
    },
    onError: () => {
      console.log('ERROR');
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
