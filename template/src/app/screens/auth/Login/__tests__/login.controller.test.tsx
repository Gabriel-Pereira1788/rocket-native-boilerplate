import { AuthServiceDomain } from '@domain';
import { ToasterService } from '@services';
import { act, fireEvent, render, renderHook } from '@test';

import { FormInput } from '@components';

import { PLACEHOLDER_EMAIL, PLACEHOLDER_PASSWORD } from '../constants';
import { LoginController, useLoginController } from '../login.controller';

const mockNavigate = jest.fn();

const mockSetCredentials = jest.fn();
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

function renderInputsForControl(controlForm: LoginController['controlForm']) {
  const componentRender = render(
    <>
      <FormInput
        control={controlForm}
        placeholder={PLACEHOLDER_EMAIL}
        name="email"
      />
      <FormInput
        control={controlForm}
        placeholder={PLACEHOLDER_PASSWORD}
        name="password"
      />
    </>,
  );

  const inputEmail = componentRender.getByPlaceholderText(PLACEHOLDER_EMAIL);
  const inputPassword =
    componentRender.getByPlaceholderText(PLACEHOLDER_PASSWORD);

  return {
    inputEmail,
    inputPassword,
  };
}

beforeAll(() => {
  jest.useFakeTimers();
});

describe('useLoginController', () => {
  it('should be run navigate function with SignUp parameter.', () => {
    const { result } = renderHook(() =>
      useLoginController({
        authServiceDomain: mockAuthServiceDomain,
        toasterService: mockToasterService,
        setCredentials: mockSetCredentials,
      }),
    );

    result.current.redirectToSignUpScreen();
    expect(mockNavigate).toHaveBeenCalledWith('SignUpScreen');
  });

  it('should be render inputs and use controlForm.', async () => {
    const { result } = renderHook(() =>
      useLoginController({
        authServiceDomain: mockAuthServiceDomain,
        toasterService: mockToasterService,
        setCredentials: mockSetCredentials,
      }),
    );

    const { inputEmail, inputPassword } = renderInputsForControl(
      result.current.controlForm,
    );

    const email = 'johndoe@email.com';
    const password = 'test1234';

    act(() => {
      fireEvent.changeText(inputEmail, email);

      fireEvent.changeText(inputPassword, password);
    });
    expect(inputEmail.props.value).toEqual(email);

    expect(inputPassword.props.value).toEqual(password);
  });

  it('should be dispatch submit function', async () => {
    const { result } = renderHook(() =>
      useLoginController({
        authServiceDomain: mockAuthServiceDomain,
        toasterService: mockToasterService,
        setCredentials: mockSetCredentials,
      }),
    );

    const { inputEmail, inputPassword } = renderInputsForControl(
      result.current.controlForm,
    );

    const email = 'test@gmail.com';
    const password = 'test1234';

    act(() => {
      fireEvent.changeText(inputEmail, email);
      fireEvent.changeText(inputPassword, password);
    });

    await act(() => {
      result.current.onSubmit();
    });

    expect(mockAuthServiceDomain.signIn).toHaveBeenCalled();
  });
});
