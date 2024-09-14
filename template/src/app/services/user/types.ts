import { User } from '@domain';

export interface UserStore {
  credentials: User | null;
  setCredentials: (userCredentials: User) => void;
  clearCredentials: () => void;
}
