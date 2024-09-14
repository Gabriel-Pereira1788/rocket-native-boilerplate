import { useSettingsController } from './settings.controller';
import { SettingsView } from './settings.view';

export function SettingsScreen() {
  const controller = useSettingsController({});

  return <SettingsView controller={controller} />;
}
