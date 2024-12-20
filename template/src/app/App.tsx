import React, { useState } from 'react';
import { StatusBar, useColorScheme, View } from 'react-native';

import { queryClient } from '@infra';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { RootProvider } from './providers';
import { Routes } from './router';
import { Global, settingsService } from './services';
import { AnimatedSplashScreen } from './splash-screen/AnimatedSplashScreen';
import { palette } from './styles/palette';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [isVisible, setIsVisible] = useState(true);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  if (isVisible) {
    return (
      <AnimatedSplashScreen
        onInitializeApp={async () => {
          setTimeout(() => {
            setIsVisible(false);
            settingsService.hideSplashScreen();
          }, 3000);
        }}
      />
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: palette.background }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <RootProvider queryClient={queryClient}>
        <Routes />
        <Global />
      </RootProvider>
    </View>
  );
}

export default App;
