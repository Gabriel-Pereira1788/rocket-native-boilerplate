import { Text, View } from 'react-native';

import { AnimatedFadeEntrance } from '@animations';
import { For, If } from '@helpers';

import { Button } from '@components';

import { ScreenLayout } from '../ScreenLayout/ScreenLayout';

type AuthScreenLayoutProps = {
  title?: string;
  buttonsProps?: { loading?: boolean; text: string; onPress?: () => void }[];
  actionPrompt?: {
    message: string;
    actionText: string;
    action: () => void;
  };
} & React.PropsWithChildren;

export function AuthScreenLayout({
  title,
  buttonsProps,
  actionPrompt,
  children,
}: AuthScreenLayoutProps) {
  return (
    <ScreenLayout
      goBack
      HeaderElement={
        <Text className="text-5xl font-semibold -tracking-widest">{title}</Text>
      }>
      <View className="w-full" style={{ gap: 10 }}>
        {children}
        <View className="w-full mt-4 mb-2">
          <For
            data={buttonsProps}
            render={(buttonProp, index) => (
              <AnimatedFadeEntrance entrance="down" key={index}>
                <Button {...buttonProp} />
              </AnimatedFadeEntrance>
            )}
          />

          <If condition={!!actionPrompt}>
            <AnimatedFadeEntrance entrance="down">
              <View className="w-full items-center justify-center flex-row mt-2">
                <Text className="font-normal text-base text-slate-400">
                  {actionPrompt!.message}{' '}
                </Text>
                <Button
                  text={actionPrompt!.actionText}
                  variant="transparent"
                  onPress={actionPrompt!.action}
                />
              </View>
            </AnimatedFadeEntrance>
          </If>
        </View>
      </View>
    </ScreenLayout>
  );
}
