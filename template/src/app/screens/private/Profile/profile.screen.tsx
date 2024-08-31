import { useProfileController } from './profile.controller';
import { ProfileView } from './profile.view';

export function ProfileScreen() {
  const controller = useProfileController({});

  return <ProfileView controller={controller} />;
}
