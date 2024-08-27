import { ConfigMutation } from '@infra';
import { useMutation } from '@tanstack/react-query';

import { authService } from '../authService';
import { User } from '../authTypes';

export function useAuthSignIn({
  onSuccess,
  onError,
}: ConfigMutation<User, Error>) {
  const { isPending, isSuccess, isError, mutate } = useMutation<
    User,
    Error,
    Pick<User, 'email' | 'password'>
  >({
    mutationFn: variables => authService.signIn(variables),
    onSuccess,
    onError,
  });
  return {
    signIn: async (email: string, password: string) =>
      mutate({ email, password }),
    loading: isPending,
    isError,
    isSuccess,
  };
}
