import {StorageImpl} from '../types';

export const jestStorage: StorageImpl = {
  setItem: jest.fn(),
  clearAll: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
};
