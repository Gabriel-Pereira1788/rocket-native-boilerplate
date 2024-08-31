import { SignUpUseCase } from '@domain';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

import { signUpSchema, SignUpSchema } from './library/signUpSchema';

type SignUpControllerProps = {
  signUpUseCase: SignUpUseCase;
};

export function useSignUpController({ signUpUseCase }: SignUpControllerProps) {
  const { signUp, loading } = signUpUseCase;
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
