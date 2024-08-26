import React, {useRef} from 'react';
import {Animated, StyleSheet} from 'react-native';

import BootSplash from 'react-native-bootsplash';

type Props = {
  onInitializeApp: () => Promise<void>;
};

export function AnimatedSplashScreen({onInitializeApp}: Props) {
  const scale = useRef(new Animated.Value(1));
  const translateY = useRef(new Animated.Value(0));

  const {container, logo} = BootSplash.useHideAnimation({
    manifest: require('../../../assets/bootsplash/manifest.json'),
    logo: require('../../../assets/bootsplash/logo.png'),
    statusBarTranslucent: true,
    navigationBarTranslucent: false,
    animate: runAnimation,
  });

  function runAnimation() {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateY.current, {
          useNativeDriver: false,
          toValue: 25,
          duration: 2000,
        }),
        Animated.timing(translateY.current, {
          useNativeDriver: false,
          toValue: -25,
          duration: 2000,
        }),
      ]),
    ).start();

    Animated.timing(scale.current, {
      useNativeDriver: false,
      toValue: 0.7,
      duration: 200,
    }).start(({finished}) => {
      if (finished) {
        onInitializeApp();
      }
    });
  }

  return (
    <Animated.View {...container}>
      <Animated.View style={[styles.logoContainer]}>
        <Animated.Image
          {...logo}
          style={{
            transform: [
              {scale: scale.current},
              {translateY: translateY.current},
            ],
          }}
        />
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
