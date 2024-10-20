import { renderScreen, screen } from '@test';

import { FollowerDetailsScreen } from '../follower-details.screen';

function customRenderScreen() {
  renderScreen(<FollowerDetailsScreen />);

  return {
    element: screen.getByTestId(''),
  };
}

describe('<FollowerDetailsScreen />', () => {
  it('should be render component correctly', () => {
    const {} = customRenderScreen();

    expect(true).toBeTruthy();
  });
});
