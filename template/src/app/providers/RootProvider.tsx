import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

type RootProviderProps = {
  queryClient: QueryClient;
} & React.PropsWithChildren;
export function RootProvider({ children, queryClient }: RootProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        {children}
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
