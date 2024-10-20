import { GetFollowerDetailsUseCase } from '@domain';

type FollowerDetailsControllerProps = {
  getFollowerDetailsUseCase: GetFollowerDetailsUseCase;
};

export function useFollowerDetailsController({
  getFollowerDetailsUseCase,
}: FollowerDetailsControllerProps) {
  return {
    details: getFollowerDetailsUseCase.details,
    loading: getFollowerDetailsUseCase.loading,
    isError: getFollowerDetailsUseCase.isError,
  };
}

export type FollowerDetailsController = ReturnType<
  typeof useFollowerDetailsController
>;
