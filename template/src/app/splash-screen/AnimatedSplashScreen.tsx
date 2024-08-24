import React, {useRef} from 'react';
import BootSplash from 'react-native-bootsplash';
import {Animated, Easing, StyleSheet} from 'react-native';

type Props = {
  onInitializeApp: () => Promise<void>;
};

export function AnimatedSplashScreen({onInitializeApp}: Props) {
  const scale = useRef(new Animated.Value(1));
  const spinValue = useRef(new Animated.Value(0));

  const spin = spinValue.current.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const {container, logo} = BootSplash.useHideAnimation({
    manifest: require('../../../assets/bootsplash/manifest.json'),
    logo: require('../../../assets/bootsplash/logo.png'),
    statusBarTranslucent: true,
    navigationBarTranslucent: false,
    animate: runAnimation,
  });

  function runAnimation() {
    Animated.timing(scale.current, {
      useNativeDriver: false,
      toValue: 1.5,
      duration: 200,
    }).start(({finished}) => {
      if (finished) {
        onInitializeApp();
      }
    });
    Animated.loop(
      Animated.timing(spinValue.current, {
        useNativeDriver: true,
        easing: Easing.linear,
        toValue: 1,
        duration: 3000,
      }),
    ).start();
  }

  return (
    <Animated.View {...container}>
      <Animated.View
        style={[styles.logoContainer, {transform: [{rotate: spin}]}]}>
        <Animated.Image
          {...logo}
          style={{
            transform: [{scale: scale.current}],
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
