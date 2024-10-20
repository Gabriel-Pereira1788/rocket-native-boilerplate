import { setupServer } from 'msw/node';

import { gitRepoHandlers } from './GitRepo/GitRepoHandlers';

export const server = setupServer(...gitRepoHandlers);
