import {useNavigation} from '@react-navigation/native';

export function useWelcomeScreenController() {
  const navigation = useNavigation();
  function redirectToLoginScreen() {
    navigation.navigate('LoginScreen');
    console.log('CALL-1');
  }

  function redirectToSignUpScreen() {
    console.log('CALL-2');
  }

  return {
    redirectToLoginScreen,
    redirectToSignUpScreen,
  };
}

export type WelcomeScreenController = ReturnType<
  typeof useWelcomeScreenController
>;
