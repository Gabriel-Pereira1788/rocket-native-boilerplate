import {mmkvImpl} from './implementation';
import {StorageImpl} from './types';

export let storage: StorageImpl = mmkvImpl;

export function setStorageImpl(storageImpl: StorageImpl) {
  storage = storageImpl;
}
