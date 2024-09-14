import React, { useEffect, useImperativeHandle, useState } from 'react';
import { Text, View } from 'react-native';

import { AnimatedFadeEntrance } from '@animations';
import { If } from '@helpers';

import { Icon } from '../Icon';

import { buildColor, buildIconName } from './library';

export type ToasterConfig = {
  status: 'success' | 'error' | 'warning';
  title: string;
  message: string;
};

export type ToasterRefProps = {
  show: (_toaster: ToasterConfig) => void;
  hide: () => void;
};

export const Toaster = React.forwardRef<ToasterRefProps, {}>((_, ref) => {
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

  const _iconName = buildIconName(toasterConfig?.status);
  const _color = buildColor(toasterConfig?.status);

  function show(_toaster: ToasterConfig) {
    setToasterConfig(_toaster);
  }

  function hide() {
    setToasterConfig(null);
  }

  return (
    <View
      className="self-center mb-5 z-10 w-3/4 relative"
      style={{ bottom: height }}>
      <If condition={!!toasterConfig}>
        <AnimatedFadeEntrance entrance="down">
          <View
            testID="toast"
            onLayout={layout => {
              const _height = layout.nativeEvent.layout.height;
              setHeight(_height);
            }}
            className="absolute z-10   w-full  items-center"
            style={{ gap: 15 }}>
            <View
              className="absolute  w-full h-full rounded-lg "
              style={{ zIndex: 0, bottom: 5, backgroundColor: _color }}
            />
            <View className="w-full h-full bg-slate-100 py-4 px-4 flex-row rounded-lg shadow-lg">
              <View className="flex-1">
                <Icon iconName={_iconName!} size={25} color={_color} />
              </View>

              <View
                className="w-full items-center justify-center"
                style={{ gap: 10 }}>
                <Text className="text-lg  text-black font-medium">
                  {toasterConfig?.title}
                </Text>
                <Text className="text-slate-500 text-sm">
                  {toasterConfig?.message}
                </Text>
              </View>
            </View>
          </View>
        </AnimatedFadeEntrance>
      </If>
    </View>
  );
});
