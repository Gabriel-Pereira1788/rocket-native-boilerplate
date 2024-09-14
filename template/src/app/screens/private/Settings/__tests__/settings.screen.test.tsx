import { renderScreen, screen } from '@test';

import { SettingsScreen } from '../settings.screen';

function customRenderScreen() {
  renderScreen(<SettingsScreen />);

  return {
    element: screen.getByTestId(''),
  };
}

describe('<SettingsScreen />', () => {
  it('should be render component correctly', () => {
    const {} = customRenderScreen();

    expect(true).toBeTruthy();
  });
});
