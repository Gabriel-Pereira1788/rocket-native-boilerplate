import { Text, View } from 'react-native';

import { AnimatedFadeEntrance, AnimatedUpDown } from '@animations';
import { Logo } from '@assets';
import { ScreenLayout } from '@shared';

import { Button } from '@components';

import { WelcomeScreenController } from './welcome.controller';

type WelcomeViewProps = {
  controller: WelcomeScreenController;
};

export function WelcomeView({ controller }: WelcomeViewProps) {
  return (
    <ScreenLayout>
      <View className="px-4 gap-8  items-center justify-center mb-16">
        <AnimatedUpDown>
          <View className="translate-y-7 rotate-45">
            <Logo width={100} height={200} />
          </View>
        </AnimatedUpDown>

        <View>
          <AnimatedFadeEntrance entrance="up">
            <Text className="text-3xl px-2 -tracking-widest font-bold  text-left text-slate-800">
              👋 Hello there, Welcome to Rocket Native.
            </Text>
          </AnimatedFadeEntrance>
        </View>
      </View>
      <View className="px-6 w-full gap-y-4">
        <View>
          <AnimatedFadeEntrance entrance="down">
            <Button text="Login" onPress={controller.redirectToLoginScreen} />
          </AnimatedFadeEntrance>
        </View>

        <View>
          <AnimatedFadeEntrance entrance="down">
            <Button
              text="Register"
              variant="outline"
              onPress={controller.redirectToSignUpScreen}
            />
          </AnimatedFadeEntrance>
        </View>
      </View>
      <View className="w-full items-center justify-center p-4">
        <Text className="font-semibold text-base">Version: 1.0</Text>
      </View>
    </ScreenLayout>
  );
}
