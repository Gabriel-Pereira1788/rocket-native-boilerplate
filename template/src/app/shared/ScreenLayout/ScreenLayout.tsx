import { View } from 'react-native';

import { If } from '@helpers';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    <SafeAreaView className="flex-1 bg-slate-50">
      <View className="flex-1 bg-slate-50 px-5">
        <If condition={!!goBack}>
          <View className="w-full items-start">
            <IconPress
              onPress={navigation.goBack}
              iconName="arrowLeft"
              testID="go-back-button"
            />
          </View>
        </If>

        <View className="flex-[1] items-center justify-center  w-full">
          <If condition={!!HeaderElement}>
            <View className="w-full mb-10">{HeaderElement}</View>
          </If>

          {children}
        </View>
      </View>
    </SafeAreaView>
  );
}
