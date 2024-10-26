import { act, fireEvent, renderScreen, screen } from '@test';

import { AuthStack } from '../../../../router/AuthStack';
import { LOGIN_TITLE } from '../../Login/constants';
import {
  ACTION_PROMPT_TEXT,
  BUTTON_SIGN_UP_TEXT,
  PLACEHOLDER_EMAIL,
  PLACEHOLDER_NAME,
  PLACEHOLDER_PASSWORD,
  TOASTER_SUCCESS_TITLE,
} from '../constants';

//SIGN UP INTEGRATION TEST;

function customRenderScreen() {
  renderScreen(<AuthStack initialRouteName="SignUpScreen" />);
  return {
    inputEmail: screen.getByPlaceholderText(PLACEHOLDER_EMAIL),
    inputName: screen.getByPlaceholderText(PLACEHOLDER_NAME),
    inputPassword: screen.getByPlaceholderText(PLACEHOLDER_PASSWORD),
    buttonSubmit: screen.getByText(BUTTON_SIGN_UP_TEXT),
    buttonRedirectToLogin: screen.getByText(ACTION_PROMPT_TEXT),
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
    expect(screen.getByText(LOGIN_TITLE)).toBeTruthy();

    // 3) go back to previous screen
    const goBackButton = screen.getByTestId('go-back-button');

    fireEvent.press(goBackButton);

    // 4) check render previous screen correctly.
    const inputEmail = screen.getByPlaceholderText(PLACEHOLDER_EMAIL);
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

    await act(() => jest.runAllTimers());
    // 3) verify success message render.
    expect(screen.getByText(TOASTER_SUCCESS_TITLE)).toBeTruthy();
  });
});
