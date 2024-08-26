import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { loginSchema, LoginSchema } from './library';
import { useNavigation } from '@react-navigation/native';

export function useLoginController() {
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

  async function onSubmit() {
    console.log('SUBMIT');
  }

  return {
    redirectToSignUpScreen,
    onSubmit: handleSubmit(onSubmit),
    controlForm: control,
  };
}

export type LoginController = ReturnType<typeof useLoginController>;
