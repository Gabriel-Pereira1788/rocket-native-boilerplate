import { renderScreen, screen } from '@test';

import { SearchScreen } from '../search.screen';

function customRenderScreen() {
  renderScreen(<SearchScreen />);

  return {
    element: screen.getByTestId(''),
  };
}

describe('<SearchScreen />', () => {
  it('should be render component correctly', () => {
    const {} = customRenderScreen();

    expect(true).toBeTruthy();
  });
});
