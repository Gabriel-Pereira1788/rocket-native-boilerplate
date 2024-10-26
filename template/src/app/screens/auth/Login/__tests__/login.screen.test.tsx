import { act, fireEvent, renderScreen, screen } from '@test';

import { AuthStack } from '../../../../router/AuthStack';
import { SIGN_UP_TITLE } from '../../SignUp/constants';
import {
  ACTION_PROMPT_TEXT,
  BUTTON_LOGIN_TEXT,
  PLACEHOLDER_EMAIL,
  PLACEHOLDER_PASSWORD,
  TOASTER_ERROR_TITLE,
  TOASTER_SUCCESS_TITLE,
} from '../constants';

//LOGIN INTEGRATION TEST;

function customRenderScreen() {
  renderScreen(<AuthStack initialRouteName="LoginScreen" />);
  return {
    inputEmail: screen.getByPlaceholderText(PLACEHOLDER_EMAIL),
    inputPassword: screen.getByPlaceholderText(PLACEHOLDER_PASSWORD),
    buttonLogin: screen.getByText(BUTTON_LOGIN_TEXT),
    buttonSignUp: screen.getByText(ACTION_PROMPT_TEXT),
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
    expect(screen.getByText(SIGN_UP_TITLE)).toBeTruthy();

    // 3) go back to previous screen
    const goBackButton = screen.getByTestId('go-back-button');

    fireEvent.press(goBackButton);

    // 4) check render previous screen correctly.
    const inputEmail = screen.getByPlaceholderText(PLACEHOLDER_EMAIL);
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

    await act(() => jest.runAllTimers());
    // 3) verify success message render.
    expect(screen.getByText(TOASTER_SUCCESS_TITLE)).toBeTruthy();
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

    await act(() => jest.runAllTimers());
    // 3) verify error message render.
    expect(screen.getByText(TOASTER_ERROR_TITLE)).toBeTruthy();
  });
});
