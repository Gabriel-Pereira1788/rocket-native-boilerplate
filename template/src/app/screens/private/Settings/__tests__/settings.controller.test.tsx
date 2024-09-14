import { renderHook } from '@test';

import { useSettingsController } from '../settings.controller';

describe('SettingsController', () => {
  it('should be render hook correctly', () => {
    const { result } = renderHook(() => useSettingsController({}));

    expect(true).toBeTruthy();
  });
});
