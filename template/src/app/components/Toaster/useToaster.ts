import { useEffect, useImperativeHandle, useState } from 'react';
import { ToasterConfig, ToasterRefProps } from './Toaster';
import { LayoutChangeEvent } from 'react-native';

export function useToaster(ref: React.ForwardedRef<ToasterRefProps>) {
  const [height, setHeight] = useState(0);
  const [toasterConfig, setToasterConfig] = useState<ToasterConfig | null>(
    null,
  );

  useImperativeHandle(
    ref,
    () => ({
      show,
      hide,
    }),
    [],
  );

  useEffect(() => {
    if (toasterConfig) {
      setTimeout(() => {
        hide();
      }, 3000);
    }
  }, [toasterConfig]);

  function show(_toaster: ToasterConfig) {
    setToasterConfig(_toaster);
  }

  function hide() {
    setToasterConfig(null);
  }

  function onLayout(event: LayoutChangeEvent) {
    const { height } = event.nativeEvent.layout;
    setHeight(height);
  }

  return {
    height,
    toasterConfig,
    onLayout,
  };
}
