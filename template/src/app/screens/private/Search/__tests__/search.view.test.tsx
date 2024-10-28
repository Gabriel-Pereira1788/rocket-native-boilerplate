import { render, screen } from '@test';

import { SCREEN_NAME } from '../constants';
import { SearchController } from '../search.controller';
import { SearchView } from '../search.view';

const mockGoBack = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      goBack: mockGoBack,
    }),
  };
});

const controller: SearchController = {};

function customRender() {
  render(<SearchView controller={controller} />);

  return {
    element: screen.getByText(SCREEN_NAME),
  };
}

describe('<SearchView />', () => {
  it('should be render component correctly', () => {
    const { element } = customRender();

    expect(element).toBeTruthy();
  });
});
