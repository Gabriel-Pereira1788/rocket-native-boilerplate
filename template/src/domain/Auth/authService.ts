import { authAdapter } from './authAdapter';
import { authApi } from './authApi';
import { User } from './authTypes';

async function signIn(userCredentials: Pick<User, 'email' | 'password'>) {
  const userData = await authApi.signIn(userCredentials);
  return authAdapter.toUser(userData);
}

export const authService = { signIn };
