import { AnimatedFadeEntrance } from '@animations';
import { AuthScreenLayout } from '@shared';

import { FormInput, FormInputPassword } from '@components';

import { LoginController } from './login.controller';

type LoginViewProps = {
  controller: LoginController;
};

export function LoginView({ controller }: LoginViewProps) {
  return (
    <AuthScreenLayout
      title="Login Your Account"
      buttonsProps={[
        {
          loading: controller.loadingSubmit,
          text: 'Login',
          onPress: controller.onSubmit,
        },
      ]}
      actionPrompt={{
        message: 'Create new Account?',
        action: controller.redirectToSignUpScreen,
        actionText: 'Sign up',
      }}>
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
    </AuthScreenLayout>
  );
}
