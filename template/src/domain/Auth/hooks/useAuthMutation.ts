import { ConfigMutation } from '@infra';
import { useMutation } from '@tanstack/react-query';

type AuthMutationConfig<TData, Variables> = {
  mutationService: (variables: Variables) => Promise<TData>;
} & ConfigMutation<TData, Error>;

export function useAuthMutation<TData, Variables>({
  onSuccess,
  mutationService,
  onError,
}: AuthMutationConfig<TData, Variables>) {
  const { isPending, isSuccess, isError, mutate } = useMutation<
    TData,
    Error,
    Variables
  >({
    mutationFn: variables => mutationService(variables),
    onSuccess,
    onError,
  });

  return {
    mutate,
    loading: isPending,
    isError,
    isSuccess,
  };
}
