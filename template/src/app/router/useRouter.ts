import { useUserCredentials } from '@services';

export type Stacks = 'Auth' | 'App';
export function useRouter(): Stacks {
  const credentials = useUserCredentials();

  if (credentials) {
    return 'App';
  }

  return 'Auth';
}
