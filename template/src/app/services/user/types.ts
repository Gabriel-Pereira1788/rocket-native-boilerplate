import { User } from '@domain';

import { useUserCredentialsActions } from './useUserCredentials';

export interface UserStore {
  credentials: User | null;
  setCredentials: (userCredentials: User) => void;
  clearCredentials: () => void;
}

export type UserCredentialsActions = ReturnType<
  typeof useUserCredentialsActions
>;
