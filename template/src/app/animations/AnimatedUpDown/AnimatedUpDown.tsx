import { useEffect } from 'react';

import Animated, {
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

type AnimatedUpDownProps = {} & React.PropsWithChildren;

export function AnimatedUpDown({ children }: AnimatedUpDownProps) {
  const translateY = useSharedValue(0);

  function runAnimation() {
    translateY.value = withRepeat(
      withSequence(
        withTiming(-5, {
          duration: 2000,
        }),
        withTiming(0, { duration: 2000 }),
      ),
      -1,
    );
  }

  useEffect(() => {
    runAnimation();
  }, []);
  return (
    <Animated.View style={{ transform: [{ translateY }] }}>
      {children}
    </Animated.View>
  );
}
