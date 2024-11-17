import { AnimatedFadeEntrance, AnimatedUpDown } from '@animations';
import { Logo } from '@assets';
import { ScreenLayout } from '@shared';

import { Box, Button, Text } from '@components';

import { VERSION, WELCOME_TEXT } from './constants';
import { WelcomeScreenController } from './welcome.controller';

type WelcomeViewProps = {
  controller: WelcomeScreenController;
};

export function WelcomeView({ controller }: WelcomeViewProps) {
  return (
    <ScreenLayout>
      <Box
        paddingHorizontal="sp25"
        gap="sp20"
        alignItems="center"
        justifyContent="center"
        mb="sp60">
        <AnimatedUpDown>
          <Box
            style={{
              transform: [
                {
                  translateY: 10,
                },
                {
                  rotate: '45deg',
                },
              ],
            }}>
            <Logo width={100} height={200} />
          </Box>
        </AnimatedUpDown>

        <Box>
          <AnimatedFadeEntrance entrance="up">
            <Text preset="semiBold/32" text={WELCOME_TEXT} />
          </AnimatedFadeEntrance>
        </Box>
      </Box>
      <Box paddingHorizontal="sp25" width={'100%'} rowGap="sp15">
        <Box>
          <AnimatedFadeEntrance entrance="down">
            <Button text="Login" onPress={controller.redirectToLoginScreen} />
          </AnimatedFadeEntrance>
        </Box>

        <Box>
          <AnimatedFadeEntrance entrance="down">
            <Button
              text="Register"
              variant="outline"
              onPress={controller.redirectToSignUpScreen}
            />
          </AnimatedFadeEntrance>
        </Box>
      </Box>
      <Box
        width={'100%'}
        alignItems="center"
        justifyContent="center"
        padding="sp15">
        <Text preset="semiBold/16" text={VERSION} />
      </Box>
    </ScreenLayout>
  );
}
