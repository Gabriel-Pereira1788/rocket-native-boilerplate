import { renderScreen, screen } from '@test';

import { SCREEN_NAME } from '../constants';
import { SettingsScreen } from '../settings.screen';

function customRenderScreen() {
  renderScreen(<SettingsScreen />);

  return {
    element: screen.getByText(SCREEN_NAME),
  };
}

describe('<SettingsScreen />', () => {
  it('should be render component correctly', () => {
    const { element } = customRenderScreen();

    expect(element).toBeTruthy();
  });
});
