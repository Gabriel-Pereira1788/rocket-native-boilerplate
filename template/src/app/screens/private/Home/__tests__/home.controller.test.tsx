import { renderHook } from '@test';

import { useHomeController } from '../home.controller';

describe('HomeController', () => {
  it('should be render hook correctly', () => {
    const { result } = renderHook(() => useHomeController({}));

    expect(true).toBeTruthy();
  });
});
