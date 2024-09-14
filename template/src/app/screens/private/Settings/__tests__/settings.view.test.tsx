import { render, screen } from '@test';

import { SettingsController } from '../settings.controller';
import { SettingsView } from '../settings.view';

const controller: SettingsController = {};

function customRender() {
  render(<SettingsView controller={controller} />);

  return {
    element: screen.getByTestId(''),
  };
}

describe('<SettingsView />', () => {
  it('should be render component correctly', () => {
    const {} = customRender();

    expect(true).toBeTruthy();
  });
});
