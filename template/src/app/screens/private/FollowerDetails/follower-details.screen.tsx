import { GitRepoServiceFactory } from '@domain';
import { AppScreenProps } from '@router';

import { useFollowerDetailsController } from './follower-details.controller';
import { FollowerDetailsView } from './follower-details.view';

export function FollowerDetailsScreen({
  route,
}: AppScreenProps<'FollowerDetailsScreen'>) {
  const gitRepoServiceDomain = GitRepoServiceFactory();

  const controller = useFollowerDetailsController({
    gitRepoServiceDomain,
    id: route.params.id,
  });

  return <FollowerDetailsView controller={controller} />;
}
