import { act, fireEvent, render, renderHook } from '@test';

import { FormInput } from '@components';

import { SignUpController, useSignUpController } from '../signup.controller';

const mockNavigate = jest.fn();
const mockSignUp = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: mockNavigate,
  }),
}));

jest.mock('@domain', () => {
  const originalModule = jest.requireActual('@domain');
  return {
    ...originalModule,
    useAuthSignUp: () => ({
      signUp: mockSignUp,
      loading: false,
    }),
  };
});

function renderInputsForControl(controlForm: SignUpController['controlForm']) {
  const emailRender = render(
    <FormInput control={controlForm} placeholder="Email" name="email" />,
  );

  const passwordRender = render(
    <FormInput control={controlForm} placeholder="Password" name="password" />,
  );

  const usernameRender = render(
    <FormInput control={controlForm} placeholder="Name" name="username" />,
  );

  const inputEmail = emailRender.getByPlaceholderText('Email');
  const inputPassword = passwordRender.getByPlaceholderText('Password');
  const inputName = usernameRender.getByPlaceholderText('Name');

  return {
    inputEmail,
    inputPassword,
    inputName,
  };
}
describe('SignUpController', () => {
  it('should be run navigate function with Login parameter.', () => {
    const { result } = renderHook(() => useSignUpController());

    result.current.redirectToLoginScreen();
    expect(mockNavigate).toHaveBeenCalledWith('LoginScreen');
  });

  it('should be render inputs and use controlForm.', () => {
    const { result } = renderHook(() => useSignUpController());
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
    expect(inputEmail.props.value).toEqual(name);
  });

  it('should be dispatch submit function', async () => {
    const { result } = renderHook(() => useSignUpController());
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

    expect(mockSignUp).toHaveBeenCalled();
  });
});
