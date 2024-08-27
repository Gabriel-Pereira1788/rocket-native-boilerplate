/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import { queryClient } from '@infra';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { RootProvider } from './providers';
import { Routes } from './router';
import { Global, settingsService } from './services';
import { AnimatedSplashScreen } from './splash-screen/AnimatedSplashScreen';

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
    <SafeAreaView className="flex-1 bg-slate-50">
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <RootProvider queryClient={queryClient}>
        <Routes />
        <Global />
      </RootProvider>
    </SafeAreaView>
  );
}

export default App;
