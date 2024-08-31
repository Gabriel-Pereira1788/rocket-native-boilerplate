import { renderScreen, screen } from '@test';

import { HomeScreen } from '../home.screen';

function customRenderScreen() {
  renderScreen(<HomeScreen />);

  return {
    element: screen.getByTestId(''),
  };
}

describe('<HomeScreen />', () => {
  it('should be render component correctly', () => {
    const {} = customRenderScreen();

    expect(true).toBeTruthy();
  });
});
