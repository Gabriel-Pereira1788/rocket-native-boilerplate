import { AnimatedFadeEntrance } from '@animations';
import { AuthScreenLayout } from '@shared';

import { FormInput } from '@components';

import { SignUpController } from './signup.controller';

type SignUpViewProps = {
  controller: SignUpController;
};

export function SignUpView({ controller }: SignUpViewProps) {
  return (
    <AuthScreenLayout
      title="Create Your Account"
      buttonsProps={[{ text: 'Sign Up', onPress: () => {} }]}
      actionPrompt={{
        message: 'Already Have An Account?',
        actionText: 'Sign In',
        action: () => {},
      }}>
      <AnimatedFadeEntrance entrance="up">
        <FormInput
          control={controller.controlForm}
          name="username"
          placeholder="Name"
        />
      </AnimatedFadeEntrance>
      <AnimatedFadeEntrance entrance="down">
        <FormInput
          control={controller.controlForm}
          name="email"
          placeholder="Email"
        />
      </AnimatedFadeEntrance>
      <AnimatedFadeEntrance entrance="down">
        <FormInput
          control={controller.controlForm}
          name="password"
          placeholder="Password"
        />
      </AnimatedFadeEntrance>
    </AuthScreenLayout>
  );
}
