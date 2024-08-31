import { SignInUseCase } from '@domain';
import { act, fireEvent, render, renderHook } from '@test';

import { FormInput } from '@components';

import { LoginController, useLoginController } from '../login.controller';

const mockNavigate = jest.fn();
const mockSignIn = jest.fn();
const mockSignInUseCase: SignInUseCase = {
  signIn: mockSignIn,
  isError: false,
  isSuccess: false,
  loading: false,
};

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

jest.mock('@domain', () => {
  const originalModule = jest.requireActual('@domain');
  return {
    ...originalModule,
    useAuthSignIn: () => ({
      signIn: mockSignIn,
      loading: false,
    }),
  };
});

function renderInputsForControl(controlForm: LoginController['controlForm']) {
  const emailRender = render(
    <FormInput control={controlForm} placeholder="Email" name="email" />,
  );

  const passwordRender = render(
    <FormInput control={controlForm} placeholder="Password" name="password" />,
  );

  const inputEmail = emailRender.getByPlaceholderText('Email');
  const inputPassword = passwordRender.getByPlaceholderText('Password');

  return {
    inputEmail,
    inputPassword,
  };
}

describe('useLoginController', () => {
  it('should be run navigate function with SignUp parameter.', () => {
    const { result } = renderHook(() =>
      useLoginController({ signInUseCase: mockSignInUseCase }),
    );

    result.current.redirectToSignUpScreen();
    expect(mockNavigate).toHaveBeenCalledWith('SignUpScreen');
  });

  it('should be render inputs and use controlForm.', () => {
    const { result } = renderHook(() =>
      useLoginController({ signInUseCase: mockSignInUseCase }),
    );
    const { inputEmail, inputPassword } = renderInputsForControl(
      result.current.controlForm,
    );
    const email = 'test1234@email.com';
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
      useLoginController({ signInUseCase: mockSignInUseCase }),
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

    expect(mockSignIn).toHaveBeenCalled();
  });
});
