import { AnimatedFadeEntrance } from '@animations';
import { AuthScreenLayout } from '@shared';

import { FormInput, FormInputPassword } from '@components';

import { SignUpController } from './signup.controller';

type SignUpViewProps = {
  controller: SignUpController;
};

export function SignUpView({ controller }: SignUpViewProps) {
  return (
    <AuthScreenLayout
      title="Create Your Account"
      buttonsProps={[
        {
          text: 'Sign Up',
          onPress: controller.onSubmit,
          loading: controller.loading,
        },
      ]}
      actionPrompt={{
        message: 'Already Have An Account?',
        actionText: 'Sign In',
        action: controller.redirectToLoginScreen,
      }}>
      <AnimatedFadeEntrance entrance="up">
        <FormInput
          leftIconProps={{
            iconName: 'user',
          }}
          control={controller.controlForm}
          name="username"
          placeholder="Name"
        />
      </AnimatedFadeEntrance>
      <AnimatedFadeEntrance entrance="down">
        <FormInput
          leftIconProps={{
            iconName: 'email',
          }}
          control={controller.controlForm}
          name="email"
          placeholder="Email"
        />
      </AnimatedFadeEntrance>
      <AnimatedFadeEntrance entrance="down">
        <FormInputPassword
          control={controller.controlForm}
          name="password"
          placeholder="Password"
        />
      </AnimatedFadeEntrance>
    </AuthScreenLayout>
  );
}
