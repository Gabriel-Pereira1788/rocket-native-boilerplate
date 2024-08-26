import React from 'react';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

export function RootProvider({children}: React.PropsWithChildren) {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      {children}
    </GestureHandlerRootView>
  );
}
