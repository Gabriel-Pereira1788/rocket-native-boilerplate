import { AuthServiceDomain } from '@domain';
import { ToasterService } from '@services';
import { act, fireEvent, render, renderHook } from '@test';

import { FormInput } from '@components';

import {
  PLACEHOLDER_EMAIL,
  PLACEHOLDER_NAME,
  PLACEHOLDER_PASSWORD,
} from '../constants';
import { SignUpController, useSignUpController } from '../signup.controller';

const mockNavigate = jest.fn();

const mockAuthServiceDomain: AuthServiceDomain = {
  signIn: jest.fn(),
  signUp: jest.fn(),
};
const mockToasterService: ToasterService = {
  error: jest.fn(),
  hide: jest.fn(),
  show: jest.fn(),
  success: jest.fn(),
  warning: jest.fn(),
};

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

function renderInputsForControl(controlForm: SignUpController['controlForm']) {
  const emailRender = render(
    <FormInput
      control={controlForm}
      placeholder={PLACEHOLDER_EMAIL}
      name="email"
    />,
  );

  const passwordRender = render(
    <FormInput
      control={controlForm}
      placeholder={PLACEHOLDER_PASSWORD}
      name="password"
    />,
  );

  const usernameRender = render(
    <FormInput
      control={controlForm}
      placeholder={PLACEHOLDER_NAME}
      name="username"
    />,
  );

  const inputEmail = emailRender.getByPlaceholderText(PLACEHOLDER_EMAIL);
  const inputPassword =
    passwordRender.getByPlaceholderText(PLACEHOLDER_PASSWORD);
  const inputName = usernameRender.getByPlaceholderText(PLACEHOLDER_NAME);

  return {
    inputEmail,
    inputPassword,
    inputName,
  };
}

beforeAll(() => {
  jest.useFakeTimers();
});

describe('SignUpController', () => {
  it('should be run navigate function with Login parameter.', () => {
    const { result } = renderHook(() =>
      useSignUpController({
        authServiceDomain: mockAuthServiceDomain,
        toasterService: mockToasterService,
      }),
    );

    result.current.redirectToLoginScreen();
    expect(mockNavigate).toHaveBeenCalledWith('LoginScreen');
  });

  it('should be render inputs and use controlForm.', () => {
    const { result } = renderHook(() =>
      useSignUpController({
        authServiceDomain: mockAuthServiceDomain,
        toasterService: mockToasterService,
      }),
    );
    const { inputEmail, inputPassword, inputName } = renderInputsForControl(
      result.current.controlForm,
    );
    const name = 'test';
    const email = 'test@gmail.com';
    const password = 'test1234';

    act(() => {
      fireEvent.changeText(inputEmail, email);
      fireEvent.changeText(inputPassword, password);
      fireEvent.changeText(inputName, name);
    });

    expect(inputEmail.props.value).toEqual(email);
    expect(inputPassword.props.value).toEqual(password);
    expect(inputName.props.value).toEqual(name);
  });

  it('should be dispatch submit function', async () => {
    const { result } = renderHook(() =>
      useSignUpController({
        authServiceDomain: mockAuthServiceDomain,
        toasterService: mockToasterService,
      }),
    );
    const { inputEmail, inputPassword, inputName } = renderInputsForControl(
      result.current.controlForm,
    );
    const name = 'test';
    const email = 'test@gmail.com';
    const password = 'test1234';

    act(() => {
      fireEvent.changeText(inputEmail, email);
      fireEvent.changeText(inputPassword, password);
      fireEvent.changeText(inputName, name);
    });

    await act(() => {
      result.current.onSubmit();
    });

    expect(mockAuthServiceDomain.signUp).toHaveBeenCalled();
  });
});
