import { act, fireEvent, renderScreen, screen } from '@test';

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

describe('<LoginScreen />', () => {
  it('Flow: should be redirect to sign up screen', () => {
    const { buttonSignUp } = customRenderScreen();
    // 1) redirect to sign up screen
    act(() => {
      fireEvent.press(buttonSignUp);
    });

    // 2) check render new screen correctly.
    expect(screen.getByText('SignUpScreen')).toBeTruthy();

    // 3) go back to previous screen
    const goBackButton = screen.getByTestId('go-back-button');

    fireEvent.press(goBackButton);

    // 4) check render previous screen correctly.
    const inputEmail = screen.getByPlaceholderText('Email');
    expect(inputEmail).toBeTruthy();
  });
});
