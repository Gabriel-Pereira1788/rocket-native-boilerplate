import { NavigationContainer } from '@react-navigation/native';

import { AppStack } from './AppStack';
// import { AuthStack } from './AuthStack';

export function Routes() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}
