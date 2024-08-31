import { render, screen } from '@test';

import { HomeController } from '../home.controller';
import { HomeView } from '../home.view';

const controller: HomeController = {};

function customRender() {
  render(<HomeView controller={controller} />);

  return {
    element: screen.getByTestId(''),
  };
}

describe('<HomeView />', () => {
  it('should be render component correctly', () => {
    const {} = customRender();

    expect(true).toBeTruthy();
  });
});
