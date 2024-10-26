import { AnimatedFadeEntrance } from '@animations';
import { AuthScreenLayout } from '@shared';

import { FormInput, FormInputPassword } from '@components';

import {
  ACTION_PROMPT_MESSAGE,
  ACTION_PROMPT_TEXT,
  BUTTON_SIGN_UP_TEXT,
  PLACEHOLDER_EMAIL,
  PLACEHOLDER_NAME,
  PLACEHOLDER_PASSWORD,
  SIGN_UP_TITLE,
} from './constants';
import { SignUpController } from './signup.controller';

type SignUpViewProps = {
  controller: SignUpController;
};

export function SignUpView({ controller }: SignUpViewProps) {
  return (
    <AuthScreenLayout
      title={SIGN_UP_TITLE}
      buttonsProps={[
        {
          text: BUTTON_SIGN_UP_TEXT,
          onPress: controller.onSubmit,
          loading: controller.loading,
        },
      ]}
      actionPrompt={{
        message: ACTION_PROMPT_MESSAGE,
        actionText: ACTION_PROMPT_TEXT,
        action: controller.redirectToLoginScreen,
      }}>
      <AnimatedFadeEntrance entrance="up">
        <FormInput
          leftIconProps={{
            iconName: 'user',
          }}
          control={controller.controlForm}
          name="username"
          placeholder={PLACEHOLDER_NAME}
        />
      </AnimatedFadeEntrance>
      <AnimatedFadeEntrance entrance="down">
        <FormInput
          leftIconProps={{
            iconName: 'email',
          }}
          control={controller.controlForm}
          name="email"
          placeholder={PLACEHOLDER_EMAIL}
        />
      </AnimatedFadeEntrance>
      <AnimatedFadeEntrance entrance="down">
        <FormInputPassword
          control={controller.controlForm}
          name="password"
          placeholder={PLACEHOLDER_PASSWORD}
        />
      </AnimatedFadeEntrance>
    </AuthScreenLayout>
  );
}
