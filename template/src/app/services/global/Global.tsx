import { Toaster } from '@components';

import { toasterRefGlobal } from './toaster/toasterService';

export function Global() {
  return (
    <>
      <Toaster ref={toasterRefGlobal} />
    </>
  );
}
