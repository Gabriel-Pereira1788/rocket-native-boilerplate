import { renderHook } from '@test';

import { useFollowerDetailsController } from '../follower-details.controller';

describe('FollowerDetailsController', () => {
  it('should be render hook correctly', () => {
    const { result } = renderHook(() => useFollowerDetailsController({}));

    expect(true).toBeTruthy();
  });
});
