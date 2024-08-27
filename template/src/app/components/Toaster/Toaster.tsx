import React, { useImperativeHandle, useState } from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';

import { AnimatedFadeEntrance } from '@animations';

export type ToasterProps = {
  status: 'success' | 'error' | 'warning';
  title: string;
  message: string;
};

export type ToasterRefProps = {
  show: (_toaster: ToasterProps) => void;
  hide: () => void;
};

export const Toaster = React.forwardRef<ToasterRefProps, {}>((props, ref) => {
  const [toasterConfig, setToasterConfig] = useState<ToasterProps | null>(null);
  function show(_toaster: ToasterProps) {
    setToasterConfig(_toaster);
  }

  function hide() {
    setToasterConfig(null);
  }

  useImperativeHandle(
    ref,
    () => ({
      show,
      hide,
    }),
    [],
  );
  return (
    <View className="self-center absolute z-10 w-3/4 bottom-16">
      <AnimatedFadeEntrance entrance="down">
        <View className="absolute z-10 py-4  w-full flex-row bg-slate-500 justify-between rounded-lg">
          <View
            className="w-full items-center justify-center"
            style={{ gap: 5 }}>
            <Text className="text-base">Test Title</Text>
            <Text className="sm">Test Message</Text>
          </View>
        </View>
      </AnimatedFadeEntrance>
    </View>
  );
});
