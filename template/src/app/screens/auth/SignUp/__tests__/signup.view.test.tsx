import { render, screen } from '@test';

import { SignUpController } from '../signup.controller';
import { SignUpView } from '../signup.view';

const controller: SignUpController = {};

function customRender() {
  render(<SignUpView controller={controller} />);

  return {
    element: screen.getByTestId(''),
  };
}

describe('SignUpView', () => {
  it('should berender component correctly', () => {
    const {} = customRender();

    expect(true).toBeTruthy();
  });
});
