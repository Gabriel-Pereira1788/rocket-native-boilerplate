import { setupServer } from 'msw/node';

import { gitRepoHandlers } from './GitRepo';

export const server = setupServer(...gitRepoHandlers);
