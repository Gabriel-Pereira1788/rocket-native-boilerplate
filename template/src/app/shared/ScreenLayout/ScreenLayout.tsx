import { If, useAppSafeArea } from '@helpers';
import { useNavigation } from '@react-navigation/native';

import { Box, IconPress } from '@components';

type ScreenLayoutProps = {
  goBack?: boolean;
  HeaderElement?: JSX.Element;
} & React.PropsWithChildren;
export function ScreenLayout({
  goBack,
  HeaderElement,
  children,
}: ScreenLayoutProps) {
  const navigation = useNavigation();
  const { top } = useAppSafeArea();

  return (
    <Box flex={1} backgroundColor="background">
      <Box
        flex={1}
        backgroundColor="background"
        paddingHorizontal="sp17"
        style={{ paddingTop: top }}>
        <If condition={!!goBack}>
          <Box width={'100%'} alignItems="flex-start">
            <IconPress
              onPress={navigation.goBack}
              iconName="arrowLeft"
              testID="go-back-button"
            />
          </Box>
        </If>

        <Box flex={1} alignItems="center" justifyContent="center" width="100%">
          <If condition={!!HeaderElement}>
            <Box width={'100%'} mb="sp28">
              {HeaderElement}
            </Box>
          </If>
          {children}
        </Box>
      </Box>
    </Box>
  );
}
