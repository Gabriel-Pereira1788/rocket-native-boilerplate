import { RootProvider } from '@providers';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientConfig } from '@tanstack/react-query';
import {
  RenderHookOptions,
  RenderOptions,
  render,
  renderHook,
} from '@testing-library/react-native';
const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
};

function wrapAllProviders() {
  const queryClient = new QueryClient(queryClientConfig);

  return ({ children }: React.PropsWithChildren) => {
    return <RootProvider queryClient={queryClient}>{children}</RootProvider>;
  };
}

function wrapScreenProviders() {
  return ({ children }: React.PropsWithChildren) => {
    const queryClient = new QueryClient(queryClientConfig);
    return (
      <RootProvider queryClient={queryClient}>
        <NavigationContainer>{children}</NavigationContainer>
      </RootProvider>
    );
  };
}

export function customRender<T>(
  component: React.ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(component, { wrapper: wrapAllProviders(), ...options });
}

export function customRenderScreen<T>(
  component: React.ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(component, { wrapper: wrapScreenProviders(), ...options });
}
export function customRenderHook<Result, Props>(
  renderCallback: (props: Props) => Result,
  options?: Omit<RenderHookOptions<Props>, 'wrapper'>,
) {
  return renderHook(renderCallback, {
    wrapper: wrapAllProviders(),
    ...options,
  });
}

export { customRenderScreen as renderScreen };
export { customRenderHook as renderHook };
export { customRender as render };
export * from '@testing-library/react-native';
