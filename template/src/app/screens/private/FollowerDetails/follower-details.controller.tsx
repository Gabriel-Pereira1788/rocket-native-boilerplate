import { useGetFollowerDetails, GitRepoServiceDomain } from '@domain';

type FollowerDetailsControllerProps = {
  gitRepoServiceDomain: GitRepoServiceDomain;
  id: number;
};

export function useFollowerDetailsController({
  id,
  gitRepoServiceDomain,
}: FollowerDetailsControllerProps) {
  const { details, isError, loading } = useGetFollowerDetails(
    id,
    gitRepoServiceDomain.getFollowerDetails,
  );

  return {
    details,
    isError,
    loading,
  };
}

export type FollowerDetailsController = ReturnType<
  typeof useFollowerDetailsController
>;
