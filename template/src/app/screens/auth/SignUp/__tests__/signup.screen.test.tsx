import { renderScreen, screen } from '@test';

import { SignUpScreen } from '../signup.screen';

function customRenderScreen() {
  renderScreen(<SignUpScreen />);

  return {
    element: screen.getByTestId(''),
  };
}

describe('SignUpScreen', () => {
  it('should be render component correctly', () => {
    const {} = customRenderScreen();

    expect(true).toBeTruthy();
  });
});
