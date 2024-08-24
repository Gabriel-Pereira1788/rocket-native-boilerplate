/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {
  SafeAreaView,
  StatusBar,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {settingsService} from './services';
import {RootProvider} from './providers';
import { AnimatedSplashScreen } from './splash-screen/AnimatedSplashScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
    const [isVisible,setIsVisible] = useState(true);
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
    <SafeAreaView className="flex-1 bg-blue-950">
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <RootProvider>
        <View className="flex-1 justify-center items-center">
          <Text className="mt-2 text-2xl text-white">V0.1</Text>
        </View>
      </RootProvider>
    </SafeAreaView>
  );
}

export default App;
