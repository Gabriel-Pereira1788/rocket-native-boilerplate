import { useFollowerDetailsController } from './follower-details.controller';
import { FollowerDetailsView } from './follower-details.view';

export function FollowerDetailsScreen() {
  const controller = useFollowerDetailsController({});

  return <FollowerDetailsView controller={controller} />;
}
