import { act, fireEvent, renderScreen, screen, waitFor } from '@test';

import { AuthStack } from '../../../../router/AuthStack';

//LOGIN INTEGRATION TEST;

function customRenderScreen() {
  renderScreen(<AuthStack initialRouteName="LoginScreen" />);
  return {
    inputEmail: screen.getByPlaceholderText('Email'),
    inputPassword: screen.getByPlaceholderText('Password'),
    buttonLogin: screen.getByText('Login'),
    buttonSignUp: screen.getByText('Sign up'),
  };
}

beforeAll(() => {
  jest.useFakeTimers();
});
describe('<LoginScreen />', () => {
  it('Flow: should be redirect to sign up screen', () => {
    const { buttonSignUp } = customRenderScreen();
    // 1) redirect to sign up screen
    act(() => {
      fireEvent.press(buttonSignUp);
    });

    // 2) check render new screen correctly.
    expect(screen.getByText('Create Your Account')).toBeTruthy();

    // 3) go back to previous screen
    const goBackButton = screen.getByTestId('go-back-button');

    fireEvent.press(goBackButton);

    // 4) check render previous screen correctly.
    const inputEmail = screen.getByPlaceholderText('Email');
    expect(inputEmail).toBeTruthy();
  });

  it('Flow: should be authenticate user success.', async () => {
    const { buttonLogin, inputEmail, inputPassword } = customRenderScreen();

    // 1) change input values
    fireEvent.changeText(inputEmail, 'johndoe@email.com');
    fireEvent.changeText(inputPassword, 'johndoe123');
    // 2) press button login
    await act(() => {
      fireEvent.press(buttonLogin);
    });

    const SUCCESS_MESSAGE = 'Success';
    await act(() => jest.runAllTimers());
    // 3) verify success message render.
    expect(screen.getByText(SUCCESS_MESSAGE)).toBeTruthy();
  });
  it('Flow: should be authenticate user failure.', async () => {
    const { buttonLogin, inputEmail, inputPassword } = customRenderScreen();

    // 1) change wrong input values
    fireEvent.changeText(inputEmail, 'johndo2e@email.com');
    fireEvent.changeText(inputPassword, 'john2doe123');
    // 2) press button login
    await act(() => {
      fireEvent.press(buttonLogin);
    });

    const ERROR_MESSAGE = 'Invalid credentials';
    await act(() => jest.runAllTimers());
    // 3) verify error message render.
    expect(screen.getByText(ERROR_MESSAGE)).toBeTruthy();
  });
});
