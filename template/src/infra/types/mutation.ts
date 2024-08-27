export type ConfigMutation<TResponse, TError> = {
  onSuccess?: (response: TResponse) => void;
  onError?: (error?: TError) => void;
};
