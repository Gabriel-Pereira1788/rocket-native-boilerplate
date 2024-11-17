import React from 'react';

import { AnimatedFadeEntrance } from '@animations';
import { If } from '@helpers';

import { Icon } from '../Icon';

import { buildColor, buildIconName } from './library';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { useToaster } from './useToaster';

export type ToasterConfig = {
  status: 'success' | 'error' | 'warning';
  title: string;
  message: string;
};

export type ToasterRefProps = {
  show: (_toaster: ToasterConfig) => void;
  hide: () => void;
};

export const Toaster = React.forwardRef<ToasterRefProps, {}>((_, ref) => {
  const { height, toasterConfig, onLayout } = useToaster(ref);

  const _iconName = buildIconName(toasterConfig?.status);
  const _color = buildColor('success');

  return (
    <Box
      alignSelf="center"
      mb="sp25"
      zIndex={10}
      width={'75%'}
      position="relative"
      bottom={height}>
      <If condition={!!toasterConfig}>
        <AnimatedFadeEntrance entrance="down">
          <Box
            testID="toast"
            onLayout={onLayout}
            position="absolute"
            zIndex={10}
            width={'100%'}
            alignItems="center"
            gap="sp15">
            <Box
              position="absolute"
              width={'100%'}
              height={'100%'}
              borderRadius="rd15"
              zIndex={0}
              bottom={3}
              backgroundColor={_color}
            />
            <Box
              width={'100%'}
              height={'100%'}
              backgroundColor="background"
              p="sp12"
              flexDirection="row"
              borderRadius="rd12"
              shadowOffset={{ width: 0, height: 1 }}
              shadowOpacity={0.1}
              shadowColor={'neutralBlack'}
              shadowRadius={1}>
              <Box flex={1}>
                <Icon iconName={_iconName!} size={25} color={_color} />
              </Box>

              <Box
                width={'100%'}
                alignItems="center"
                justifyContent="center"
                gap="sp10">
                <Text
                  preset="medium/16"
                  text={toasterConfig?.title ?? ''}
                  color="neutralBlack"
                />
                <Text
                  preset="medium/14"
                  text={toasterConfig?.message ?? ''}
                  color="textSecondary"
                />
              </Box>
            </Box>
          </Box>
        </AnimatedFadeEntrance>
      </If>
    </Box>
  );
});
