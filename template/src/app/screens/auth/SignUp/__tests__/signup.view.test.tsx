import { fireEvent, render, renderHook, screen } from '@test';
import { useForm } from 'react-hook-form';

import {
  ACTION_PROMPT_TEXT,
  BUTTON_SIGN_UP_TEXT,
  PLACEHOLDER_EMAIL,
  PLACEHOLDER_NAME,
  PLACEHOLDER_PASSWORD,
} from '../constants';
import { SignUpSchema } from '../library/signUpSchema';
import { SignUpController } from '../signup.controller';
import { SignUpView } from '../signup.view';

const mockGoBack = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      goBack: mockGoBack,
    }),
  };
});

const mockController: Omit<SignUpController, 'controlForm'> = {
  redirectToLoginScreen: jest.fn(),
  loading: false,
  onSubmit: jest.fn(),
};

function customRender() {
  const { result } = renderHook(() =>
    useForm<SignUpSchema>({
      defaultValues: {
        email: '',
        password: '',
        username: '',
      },
    }),
  );
  render(
    <SignUpView
      controller={{ ...mockController, controlForm: result.current.control }}
    />,
  );

  return {
    inputName: screen.getByPlaceholderText(PLACEHOLDER_NAME),
    inputEmail: screen.getByPlaceholderText(PLACEHOLDER_EMAIL),
    inputPassword: screen.getByPlaceholderText(PLACEHOLDER_PASSWORD),
    buttonSubmit: screen.getByText(BUTTON_SIGN_UP_TEXT),
    buttonRedirectToLogin: screen.getByText(ACTION_PROMPT_TEXT),
    goBackButton: screen.getByTestId('go-back-button'),
  };
}

describe('<SignUpView />', () => {
  it('should berender component correctly', () => {
    const { inputEmail, inputPassword, buttonRedirectToLogin, buttonSubmit } =
      customRender();
    expect(inputEmail).toBeTruthy();
    expect(inputPassword).toBeTruthy();
    expect(buttonSubmit).toBeTruthy();
    expect(buttonRedirectToLogin).toBeTruthy();
  });

  it('should be run redirect function correctly', () => {
    const { buttonRedirectToLogin } = customRender();

    fireEvent.press(buttonRedirectToLogin);

    expect(mockController.redirectToLoginScreen).toHaveBeenCalled();
  });

  it('should be change input value.', () => {
    const { inputEmail, inputPassword, inputName } = customRender();

    const username = 'test';
    const email = 'test@email.com';
    const password = 'test123';

    fireEvent.changeText(inputName, username);
    fireEvent.changeText(inputEmail, email);
    fireEvent.changeText(inputPassword, password);

    expect(inputName.props.value).toEqual(username);
    expect(inputEmail.props.value).toEqual(email);
    expect(inputPassword.props.value).toEqual(password);
  });

  it('should be run form submit function.', () => {
    const { buttonSubmit } = customRender();

    fireEvent.press(buttonSubmit);

    expect(mockController.onSubmit).toHaveBeenCalled();
  });

  it('should be press go back button and run go back function.', () => {
    const { goBackButton } = customRender();

    fireEvent.press(goBackButton);

    expect(mockGoBack).toHaveBeenCalled();
  });
});
