import {MMKV} from 'react-native-mmkv';

import {StorageImpl} from '../types';

const mmkv = new MMKV();
function setItem<T>(key?: string, value?: T) {
  mmkv.set(key!, JSON.stringify(value!));
}

async function getItem<T>(key?: string) {
  const data = mmkv.getString(key!) as string;

  const result = data ? ((await JSON.parse(data)) as T) : data;
  return result as T;
}

function removeItem(key?: string) {
  mmkv.delete(key!);
}

function clearAll() {
  mmkv.clearAll();
}

export const mmkvImpl: StorageImpl = {
  setItem,
  getItem,
  removeItem,
  clearAll,
};
