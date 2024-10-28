import { renderScreen, screen } from '@test';

import { SCREEN_NAME } from '../constants';
import { SearchScreen } from '../search.screen';

function customRenderScreen() {
  renderScreen(<SearchScreen />);

  return {
    element: screen.getByText(SCREEN_NAME),
  };
}

describe('<SearchScreen />', () => {
  it('should be render component correctly', () => {
    const { element } = customRenderScreen();

    expect(element).toBeTruthy();
  });
});
