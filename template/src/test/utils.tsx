import { RootProvider } from '@providers';
import { NavigationContainer } from '@react-navigation/native';
import {
  RenderHookOptions,
  RenderOptions,
  render,
  renderHook,
} from '@testing-library/react-native';

function wrapAllProviders() {
  return ({ children }: React.PropsWithChildren) => {
    return <RootProvider>{children}</RootProvider>;
  };
}

function wrapScreenProviders() {
  return ({ children }: React.PropsWithChildren) => {
    return (
      <RootProvider>
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
