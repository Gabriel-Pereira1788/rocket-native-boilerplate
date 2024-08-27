import { useNavigation } from '@react-navigation/native';

export function useWelcomeScreenController() {
  const navigation = useNavigation();
  function redirectToLoginScreen() {
    navigation.navigate('LoginScreen');
  }

  function redirectToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  return {
    redirectToLoginScreen,
    redirectToSignUpScreen,
  };
}

export type WelcomeScreenController = ReturnType<
  typeof useWelcomeScreenController
>;
