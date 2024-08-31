import { ConfigMutation } from '@infra';

import { authService } from '../authService';
import { User } from '../authTypes';
import { useAuthMutation } from '../hooks';

type SignInVariables = Pick<User, 'email' | 'password'>;
export function useAuthSignIn({
  onSuccess,
  onError,
}: ConfigMutation<User, Error>) {
  const { mutate, loading, isError, isSuccess } = useAuthMutation<
    User,
    SignInVariables
  >({
    mutationService: variables => authService.signIn(variables),
    onSuccess,
    onError,
  });

  return {
    signIn: async (email: string, password: string) =>
      mutate({ email, password }),
    loading,
    isError,
    isSuccess,
  };
}

export type SignInUseCase = ReturnType<typeof useAuthSignIn>;
