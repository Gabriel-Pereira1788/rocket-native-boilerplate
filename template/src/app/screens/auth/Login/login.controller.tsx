import { SignInUseCase } from '@domain';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import { loginSchema, LoginSchema } from './library';

type LoginControllerProps = {
  signInUseCase: SignInUseCase;
};

export function useLoginController({ signInUseCase }: LoginControllerProps) {
  const { signIn, loading } = signInUseCase;
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
