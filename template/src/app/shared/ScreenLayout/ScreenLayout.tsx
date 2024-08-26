import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { IconPress } from '@components';

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

  return (
    <View className="flex-1 bg-slate-50 px-8">
      {goBack && (
        <View className="w-full items-start mt-6">
          <IconPress
            onPress={navigation.goBack}
            iconName="arrowLeft"
            testID="go-back-button"
          />
        </View>
      )}

      <View className="flex-[1] items-center justify-center  w-full">
        {HeaderElement && <View className="w-full mb-10">{HeaderElement}</View>}
        {children}
      </View>
    </View>
  );
}
