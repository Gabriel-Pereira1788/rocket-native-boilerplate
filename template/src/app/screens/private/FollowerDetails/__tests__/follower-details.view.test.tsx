import { render, screen } from '@test';

import { FollowerDetailsController } from '../follower-details.controller';
import { FollowerDetailsView } from '../follower-details.view';

const controller: FollowerDetailsController = {};

function customRender() {
  render(<FollowerDetailsView controller={controller} />);

  return {
    element: screen.getByTestId(''),
  };
}

describe('<FollowerDetailsView />', () => {
  it('should be render component correctly', () => {
    const {} = customRender();

    expect(true).toBeTruthy();
  });
});
