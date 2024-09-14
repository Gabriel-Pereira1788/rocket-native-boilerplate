import { useUserStore } from './zustand/useUserStore';

export function useUserCredentials() {
  const credentials = useUserStore(store => store.credentials);
  return credentials;
}

export function useUserCredentialsActions() {
  const clearCredentials = useUserStore(state => state.clearCredentials);
  const setCredentials = useUserStore(state => state.setCredentials);

  return {
    clearCredentials,
    setCredentials,
  };
}
