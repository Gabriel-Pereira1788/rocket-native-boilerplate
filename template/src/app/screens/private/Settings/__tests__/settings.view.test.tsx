import { render, screen } from '@test';

import { SCREEN_NAME } from '../constants';
import { SettingsController } from '../settings.controller';
import { SettingsView } from '../settings.view';

const controller: SettingsController = {};

const mockGoBack = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      goBack: mockGoBack,
    }),
  };
});

function customRender() {
  render(<SettingsView controller={controller} />);

  return {
    element: screen.getByText(SCREEN_NAME),
  };
}

describe('<SettingsView />', () => {
  it('should be render component correctly', () => {
    const { element } = customRender();

    expect(element).toBeTruthy();
  });
});
