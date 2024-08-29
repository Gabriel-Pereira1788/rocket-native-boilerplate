import { ConfigMutation } from '@infra';

import { authService } from '../authService';
import { User } from '../authTypes';
import { useAuthMutation } from '../hooks';

type SignUpVariables = Pick<User, 'email' | 'password' | 'username'>;
export function useAuthSignUp({
  onSuccess,
  onError,
}: ConfigMutation<User, Error>) {
  const { mutate, loading, isError, isSuccess } = useAuthMutation<
    User,
    SignUpVariables
  >({
    mutationService: variables => authService.signUp(variables),
    onSuccess,
    onError,
  });

  return {
    signUp: async (variables: SignUpVariables) => mutate(variables),
    loading,
    isError,
    isSuccess,
  };
}
