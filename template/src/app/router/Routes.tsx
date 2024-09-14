import { NavigationContainer } from '@react-navigation/native';

// import { AppStack } from './AppStack';
import { AppStack } from './AppStack';
import { AuthStack } from './AuthStack';
import { Stacks, useRouter } from './useRouter';

const mappedStacks: Record<Stacks, React.ReactElement> = {
  App: <AppStack />,
  Auth: <AuthStack />,
};

export function Routes() {
  const stack = useRouter();
  return <NavigationContainer>{mappedStacks[stack]}</NavigationContainer>;
}
