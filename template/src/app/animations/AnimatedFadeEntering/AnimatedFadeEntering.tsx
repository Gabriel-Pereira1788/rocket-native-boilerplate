import Animated from 'react-native-reanimated';

import { buildAnimatedFadeEntering } from './library/buildAnimatedFadeEntering';

export type AnimatedFadeEnteringProps = {
  entrance: 'up' | 'down' | 'left' | 'right';
} & React.PropsWithChildren;

export function AnimatedFadeEntrance({
  children,
  entrance,
}: AnimatedFadeEnteringProps) {
  const animationFade = buildAnimatedFadeEntering(entrance);

  return (
    <Animated.View
      entering={animationFade.entering}
      exiting={animationFade.exiting}>
      {children}
    </Animated.View>
  );
}
