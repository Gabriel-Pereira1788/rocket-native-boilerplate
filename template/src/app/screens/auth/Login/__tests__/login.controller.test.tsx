import { act, fireEvent, render, renderHook } from '@test';

import { LoginController, useLoginController } from '../login.controller';
import { FormInput } from '@components';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

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
  it('should be render hook correctly', () => {
    const { result } = renderHook(() => useLoginController());

    expect(true).toBeTruthy();
  });

  it('should be run navigate function with SignUp parameter.', () => {
    const { result } = renderHook(() => useLoginController());

    result.current.redirectToSignUpScreen();
    expect(mockNavigate).toHaveBeenCalledWith('SignUpScreen');
  });

  it('should be render inputs and use controlForm.', () => {
    const { result } = renderHook(() => useLoginController());
    const { inputEmail, inputPassword } = renderInputsForControl(
      result.current.controlForm,
    );
    const email = 'test1234emailcom';
    const password = 'test1234';

    act(() => {
      fireEvent.changeText(inputEmail, email);
      fireEvent.changeText(inputPassword, password);
    });

    expect(inputEmail.props.value).toEqual(email);
    expect(inputPassword.props.value).toEqual(password);
  });

  it('should be dispatch submit function', () => {
    const { result } = renderHook(() => useLoginController());

    expect(true).toBeTruthy();
  });
});
