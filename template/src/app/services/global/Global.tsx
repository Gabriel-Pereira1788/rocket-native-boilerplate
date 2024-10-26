import { Toaster } from '@components';

import { toasterRefGlobal } from '../toaster';

export function Global() {
  return (
    <>
      <Toaster ref={toasterRefGlobal} />
    </>
  );
}
