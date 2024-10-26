import { ConfigMutation } from '@infra';

import { AuthServiceDomain } from '../authService';
import { User, UserApi } from '../authTypes';
import { useAuthMutation } from '../hooks';

type SignUpVariables = Pick<UserApi, 'email' | 'password' | 'username'>;
export function useAuthSignUp({
  signUpService,
  onSuccess,
  onError,
}: ConfigMutation<User, Error> & {
  signUpService: AuthServiceDomain['signUp'];
}) {
  const { mutate, loading, isError, isSuccess } = useAuthMutation<
    User,
    SignUpVariables
  >({
    mutationService: variables => signUpService(variables),
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

export type SignUpUseCase = ReturnType<typeof useAuthSignUp>;
