import { authAdapter } from './authAdapter';
import { authGateway } from './authGateway';
import { User } from './authTypes';

async function signIn(
  userCredentials: Pick<User, 'email'> & { password: string },
) {
  const userData = await authGateway.signIn(userCredentials);
  return authAdapter.toUser(userData);
}

async function signUp(
  data: Pick<User, 'email' | 'username'> & { password: string },
) {
  const userData = await authGateway.signUp(data);
  return authAdapter.toUser(userData);
}

export const authService = { signIn, signUp };
