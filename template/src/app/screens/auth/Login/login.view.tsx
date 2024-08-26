import { Text, View } from 'react-native';

import { AnimatedFadeEntrance } from '@animations';
import { ScreenLayout } from '@shared';

import { Button, FormInput, FormInputPassword } from '@components';

import { LoginController } from './login.controller';

type LoginViewProps = {
  controller: LoginController;
};

export function LoginView({ controller }: LoginViewProps) {
  return (
    <ScreenLayout
      goBack
      HeaderElement={
        <Text className="text-5xl font-semibold -tracking-widest">
          Login Your Account
        </Text>
      }>
      <View className="w-full" style={{ gap: 10 }}>
        <AnimatedFadeEntrance entrance="up">
          <FormInput
            control={controller.controlForm}
            name="email"
            placeholder="Email"
            leftIconProps={{
              iconName: 'email',
            }}
          />
        </AnimatedFadeEntrance>
        <AnimatedFadeEntrance entrance="down">
          <FormInputPassword
            name="password"
            placeholder="Password"
            control={controller.controlForm}
          />
        </AnimatedFadeEntrance>

        <AnimatedFadeEntrance entrance="down">
          <View className="my-8">
            <Button text="Login" onPress={controller.onSubmit} />
          </View>
        </AnimatedFadeEntrance>

        <View className="w-full items-center justify-center flex-row">
          <Text className="font-normal text-base text-slate-400">
            Create new Account?{' '}
          </Text>
          <Button
            text="Sign up"
            variant="transparent"
            onPress={controller.redirectToSignUpScreen}
          />
        </View>
      </View>
    </ScreenLayout>
  );
}
