import { AnimatedFadeEntrance } from '@animations';
import { AuthScreenLayout } from '@shared';

import { FormInput, FormInputPassword } from '@components';

import {
  ACTION_PROMPT_MESSAGE,
  ACTION_PROMPT_TEXT,
  BUTTON_LOGIN_TEXT,
  LOGIN_TITLE,
  PLACEHOLDER_EMAIL,
  PLACEHOLDER_PASSWORD,
} from './constants';
import { LoginController } from './login.controller';

type LoginViewProps = {
  controller: LoginController;
};

export function LoginView({ controller }: LoginViewProps) {
  return (
    <AuthScreenLayout
      title={LOGIN_TITLE}
      buttonsProps={[
        {
          loading: controller.loadingSubmit,
          text: BUTTON_LOGIN_TEXT,
          onPress: controller.onSubmit,
        },
      ]}
      actionPrompt={{
        message: ACTION_PROMPT_MESSAGE,
        action: controller.redirectToSignUpScreen,
        actionText: ACTION_PROMPT_TEXT,
      }}>
      <AnimatedFadeEntrance entrance="up">
        <FormInput
          control={controller.controlForm}
          name="email"
          placeholder={PLACEHOLDER_EMAIL}
          leftIconProps={{
            iconName: 'email',
          }}
        />
      </AnimatedFadeEntrance>
      <AnimatedFadeEntrance entrance="down">
        <FormInputPassword
          name="password"
          placeholder={PLACEHOLDER_PASSWORD}
          control={controller.controlForm}
        />
      </AnimatedFadeEntrance>
    </AuthScreenLayout>
  );
}
