import { renderHook } from '@test';
import { useSignUpController } from '../signup.controller';

describe('SignUpController', () => {
  it('should be render hook correctly', () => {
    const { result } = renderHook(() => useSignUpController());

    expect(true).toBeTruthy();
  });
});
