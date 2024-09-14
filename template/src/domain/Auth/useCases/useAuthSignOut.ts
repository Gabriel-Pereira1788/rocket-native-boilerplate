import { useUserCredentialsActions } from '@services';

export function useAuthSignOut() {
  const { clearCredentials } = useUserCredentialsActions();

  function signOut() {
    clearCredentials();
  }

  return {
    signOut,
  };
}
