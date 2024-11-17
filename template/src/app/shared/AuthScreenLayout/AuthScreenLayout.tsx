import { AnimatedFadeEntrance } from '@animations';
import { For, If } from '@helpers';

import { Box, Button, Text } from '@components';

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
        <Text preset="semiBold/48" letterSpacing={2} text={title ?? ''} />
      }>
      <Box width={'100%'} style={{ gap: 10 }}>
        {children}
        <Box width={'100%'} mt="sp15" mb="sp3">
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
              <Box
                width={'100%'}
                alignItems="center"
                justifyContent="center"
                flexDirection="row"
                mt="sp7">
                <Text
                  preset="medium/16"
                  color="textSecondary"
                  text={actionPrompt!.message + ' '}
                />

                <Button
                  text={actionPrompt!.actionText}
                  variant="transparent"
                  onPress={actionPrompt!.action}
                />
              </Box>
            </AnimatedFadeEntrance>
          </If>
        </Box>
      </Box>
    </ScreenLayout>
  );
}
