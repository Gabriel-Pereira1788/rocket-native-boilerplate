import React from 'react';

import { ToasterConfig, ToasterRefProps } from '@components';

export const toasterRefGlobal = React.createRef<ToasterRefProps>();

function show(toasterConfig: ToasterConfig) {
  toasterRefGlobal.current?.show(toasterConfig);
}
function hide() {
  toasterRefGlobal.current?.hide();
}

function success(title: string, message: string) {
  toasterRefGlobal.current?.show({
    title,
    message,
    status: 'success',
  });
}

function error(title: string, message: string) {
  toasterRefGlobal.current?.show({
    title,
    message,
    status: 'error',
  });
}

function warning(title: string, message: string) {
  toasterRefGlobal.current?.show({
    title,
    message,
    status: 'warning',
  });
}

export function ToasterServiceFactory() {
  return {
    show,
    hide,
    success,
    warning,
    error,
  };
}

export type ToasterService = ReturnType<typeof ToasterServiceFactory>;
