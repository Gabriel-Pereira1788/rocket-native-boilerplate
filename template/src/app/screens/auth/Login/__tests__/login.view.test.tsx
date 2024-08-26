import { fireEvent, render, renderHook, screen } from '@test';
import { useForm } from 'react-hook-form';

import { LoginSchema } from '../library';
import { LoginController } from '../login.controller';
import { LoginView } from '../login.view';

const mockGoBack = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      goBack: mockGoBack,
    }),
  };
});

const mockController: Omit<LoginController, 'controlForm'> = {
  onSubmit: jest.fn(),
  redirectToSignUpScreen: jest.fn(),
};

function customRender() {
  const { result } = renderHook(() =>
    useForm<LoginSchema>({
      defaultValues: {
        email: '',
        password: '',
      },
    }),
  );
  render(
    <LoginView
      controller={{ ...mockController, controlForm: result.current.control }}
    />,
  );

  return {
    inputEmail: screen.getByPlaceholderText('Email'),
    inputPassword: screen.getByPlaceholderText('Password'),
    buttonLogin: screen.getByText('Login'),
    buttonSignUp: screen.getByText('Sign up'),
    goBackButton: screen.getByTestId('go-back-button'),
  };
}
describe('<LoginView />', () => {
  it('should be render component correctly', () => {
    const { inputEmail, inputPassword, buttonLogin, buttonSignUp } =
      customRender();
    expect(inputEmail).toBeTruthy();
    expect(inputPassword).toBeTruthy();
    expect(buttonLogin).toBeTruthy();
    expect(buttonSignUp).toBeTruthy();
  });

  it('should be run redirect function correctly', () => {
    const { buttonSignUp } = customRender();

    fireEvent.press(buttonSignUp);

    expect(mockController.redirectToSignUpScreen).toHaveBeenCalled();
  });

  it('should be change input value.', () => {
    const { inputEmail, inputPassword } = customRender();

    const email = 'test@email.com';
    const password = 'test123';
    fireEvent.changeText(inputEmail, email);
    fireEvent.changeText(inputPassword, password);

    expect(inputEmail.props.value).toEqual(email);
    expect(inputPassword.props.value).toEqual(password);
  });
  it('should be run form submit function.', () => {
    const { buttonLogin } = customRender();

    fireEvent.press(buttonLogin);

    expect(mockController.onSubmit).toHaveBeenCalled();
  });

  it('should be press go back button and run go back function.', () => {
    const { goBackButton } = customRender();

    fireEvent.press(goBackButton);

    expect(mockGoBack).toHaveBeenCalled();
  });
});
