export interface StorageImpl {
  setItem<T>(key?: string, value?: T): void;
  getItem<T>(key?: string): Promise<T>;
  removeItem(key?: string): void;
  clearAll(): void;
}
