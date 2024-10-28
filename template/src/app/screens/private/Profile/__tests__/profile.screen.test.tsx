import { renderScreen, screen } from '@test';

import { SCREEN_NAME } from '../constants';
import { ProfileScreen } from '../profile.screen';

function customRenderScreen() {
  renderScreen(<ProfileScreen />);

  return {
    element: screen.getByText(SCREEN_NAME),
  };
}

describe('<ProfileScreen />', () => {
  it('should be render component correctly', () => {
    const {} = customRenderScreen();

    expect(true).toBeTruthy();
  });
});
