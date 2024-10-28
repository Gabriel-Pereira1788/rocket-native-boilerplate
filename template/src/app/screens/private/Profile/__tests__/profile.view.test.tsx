import { render, screen } from '@test';

import { SCREEN_NAME } from '../constants';
import { ProfileController } from '../profile.controller';
import { ProfileView } from '../profile.view';

const mockGoBack = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      goBack: mockGoBack,
    }),
  };
});

const controller: ProfileController = {};

function customRender() {
  render(<ProfileView controller={controller} />);

  return {
    element: screen.getByText(SCREEN_NAME),
  };
}

describe('<ProfileView />', () => {
  it('should be render component correctly', () => {
    const {} = customRender();

    expect(true).toBeTruthy();
  });
});
