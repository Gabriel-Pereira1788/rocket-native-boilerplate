import { View, Text } from 'react-native';
import { SignUpController } from './signup.controller';
import { ScreenLayout } from '@shared';

type SignUpViewProps = {
  controller: SignUpController;
};

export function SignUpView({ controller }: SignUpViewProps) {
  const screenName = 'SignUpScreen';
  return (
    <ScreenLayout goBack>
      <Text>{screenName}</Text>
    </ScreenLayout>
  );
}
