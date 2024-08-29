import { act, fireEvent, renderScreen, screen } from '@test';

import { AuthStack } from '../../../../router/AuthStack';

//SIGN UP INTEGRATION TEST;

function customRenderScreen() {
  renderScreen(<AuthStack initialRouteName="SignUpScreen" />);
  return {
    inputEmail: screen.getByPlaceholderText('Email'),
    inputName: screen.getByPlaceholderText('Name'),
    inputPassword: screen.getByPlaceholderText('Password'),
    buttonSubmit: screen.getByText('Sign Up'),
    buttonRedirectToLogin: screen.getByText('Sign In'),
  };
}

beforeAll(() => {
  jest.useFakeTimers();
});
describe('<SignUpScreen />', () => {
  it('Flow: should be redirect to sign up screen', () => {
    const { buttonRedirectToLogin } = customRenderScreen();
    // 1) redirect to sign up screen
    act(() => {
      fireEvent.press(buttonRedirectToLogin);
    });

    // 2) check render new screen correctly.
    expect(screen.getByText('Login Your Account')).toBeTruthy();

    // 3) go back to previous screen
    const goBackButton = screen.getByTestId('go-back-button');

    fireEvent.press(goBackButton);

    // 4) check render previous screen correctly.
    const inputEmail = screen.getByPlaceholderText('Email');
    expect(inputEmail).toBeTruthy();
  });

  it('Flow: should be register new user.', async () => {
    const { buttonSubmit, inputEmail, inputPassword, inputName } =
      customRenderScreen();

    // 1) change input values
    fireEvent.changeText(inputName, 'test');
    fireEvent.changeText(inputEmail, 'johndoe@email.com');
    fireEvent.changeText(inputPassword, 'johndoe123');
    // 2) press button login
    await act(() => {
      fireEvent.press(buttonSubmit);
    });

    const SUCCESS_MESSAGE = 'everything ok!';
    await act(() => jest.runAllTimers());
    // 3) verify success message render.
    expect(screen.getByText(SUCCESS_MESSAGE)).toBeTruthy();
  });
});
