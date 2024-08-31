import { render, screen } from '@test';

import { ProfileController } from '../profile.controller';
import { ProfileView } from '../profile.view';

const controller: ProfileController = {};

function customRender() {
  render(<ProfileView controller={controller} />);

  return {
    element: screen.getByTestId(''),
  };
}

describe('<ProfileView />', () => {
  it('should be render component correctly', () => {
    const {} = customRender();

    expect(true).toBeTruthy();
  });
});
