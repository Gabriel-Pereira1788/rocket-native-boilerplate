import { useGetFollowerDetails } from '@domain';
import { AppScreenProps } from '@router';

import { useFollowerDetailsController } from './follower-details.controller';
import { FollowerDetailsView } from './follower-details.view';

export function FollowerDetailsScreen({
  route,
}: AppScreenProps<'FollowerDetailsScreen'>) {
  const getFollowerDetailsUseCase = useGetFollowerDetails(route.params.id);
  const controller = useFollowerDetailsController({
    getFollowerDetailsUseCase,
  });

  return <FollowerDetailsView controller={controller} />;
}
