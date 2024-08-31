import { renderScreen, screen } from '@test';

import { ProfileScreen } from '../profile.screen';

function customRenderScreen() {
  renderScreen(<ProfileScreen />);

  return {
    element: screen.getByTestId(''),
  };
}

describe('<ProfileScreen />', () => {
  it('should be render component correctly', () => {
    const {} = customRenderScreen();

    expect(true).toBeTruthy();
  });
});
