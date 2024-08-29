import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

import 'react-native-gesture-handler/jestSetup';
import { jestStorage } from '../adapters/storage/implementation/jest-storage-impl';
import { setStorageImpl } from '../adapters/storage/storage';

setStorageImpl(jestStorage);

jest.mock('react-native-safe-area-context', () => ({
  ...mockSafeAreaContext,
  useSafeAreaInsets: jest.fn(mockSafeAreaContext.useSafeAreaInsets),
}));
jest.mock('react-native-bootsplash', () => {
  return {
    hide: jest.fn().mockResolvedValue(true),
    isVisible: jest.fn().mockResolvedValue(false),
    useHideAnimation: jest.fn(() => ({
      container: {
        onLayout: jest.fn(),
        style: {
          alignItems: 'center',
          backgroundColor: '#F5F5FA',
          bottom: 0,
          justifyContent: 'center',
          left: 0,
          position: 'absolute',
          right: 0,
          top: 0,
        },
      },
      logo: {
        fadeDuration: 0,
        onLoadEnd: jest.fn(),
        resizeMode: 'contain',
        source: 3,
        style: { height: 118, width: 250 },
      },
      brand: { source: 0 },
    })),
  };
});
