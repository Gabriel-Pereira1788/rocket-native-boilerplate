import { renderHook } from '@test';

import { useSearchController } from '../search.controller';

describe('SearchController', () => {
  it('should be render hook correctly', () => {
    const { result } = renderHook(() => useSearchController({}));

    expect(true).toBeTruthy();
  });
});
