import { ConfigMutation } from '@infra';

import { AuthServiceDomain } from '../authService';
import { User, UserApi } from '../authTypes';
import { useAuthMutation } from '../hooks';

type SignInVariables = Pick<UserApi, 'email' | 'password'>;
export function useAuthSignIn({
  signInService,
  onSuccess,
  onError,
}: ConfigMutation<User, Error> & {
  signInService: AuthServiceDomain['signIn'];
}) {
  const { mutate, loading, isError, isSuccess } = useAuthMutation<
    User,
    SignInVariables
  >({
    mutationService: variables => signInService(variables),
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
