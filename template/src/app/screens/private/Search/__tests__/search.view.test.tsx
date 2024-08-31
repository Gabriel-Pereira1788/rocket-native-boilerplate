import { render, screen } from '@test';

import { SearchController } from '../search.controller';
import { SearchView } from '../search.view';

const controller: SearchController = {};

function customRender() {
  render(<SearchView controller={controller} />);

  return {
    element: screen.getByTestId(''),
  };
}

describe('<SearchView />', () => {
  it('should be render component correctly', () => {
    const {} = customRender();

    expect(true).toBeTruthy();
  });
});
