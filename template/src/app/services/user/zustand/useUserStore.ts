import { User } from '@domain';
import { create } from 'zustand';

import { UserStore } from '../types';

export const useUserStore = create<UserStore>(set => ({
  credentials: null,

  setCredentials: (_user: User) => {
    set({
      credentials: _user,
    });
  },
  clearCredentials: () => {
    set({
      credentials: null,
    });
  },
}));
