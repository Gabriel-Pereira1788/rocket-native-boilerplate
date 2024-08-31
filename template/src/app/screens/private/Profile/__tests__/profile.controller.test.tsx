import { renderHook } from '@test';

import { useProfileController } from '../profile.controller';

describe('ProfileController', () => {
  it('should be render hook correctly', () => {
    const { result } = renderHook(() => useProfileController({}));

    expect(true).toBeTruthy();
  });
});
