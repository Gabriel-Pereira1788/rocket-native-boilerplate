import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
  FadeOutDown,
  FadeOutLeft,
  FadeOutRight,
  FadeOutUp,
} from 'react-native-reanimated';

import {AnimatedFadeEnteringProps} from '../AnimatedFadeEntering';

type AnimatedConfig = {
  entering: React.ComponentProps<Animated.View>['entering'];
  exiting: React.ComponentProps<Animated.View>['exiting'];
};
const mappedAnimations: Record<
  AnimatedFadeEnteringProps['entrance'],
  AnimatedConfig
> = {
  up: {
    entering: FadeInUp,
    exiting: FadeOutUp,
  },
  down: {
    entering: FadeInDown,
    exiting: FadeOutDown,
  },
  left: {
    entering: FadeInLeft,
    exiting: FadeOutLeft,
  },
  right: {
    entering: FadeInRight,
    exiting: FadeOutRight,
  },
};
export function buildAnimatedFadeEntering(
  entrance: AnimatedFadeEnteringProps['entrance'],
) {
  return mappedAnimations[entrance];
}
