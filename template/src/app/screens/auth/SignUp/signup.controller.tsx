import { useForm } from 'react-hook-form';

export function useSignUpController() {
  const { control } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });
  return {
    controlForm: control,
  };
}

export type SignUpController = ReturnType<typeof useSignUpController>;
