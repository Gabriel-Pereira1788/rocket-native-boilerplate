import { Text } from 'react-native';

import { ScreenLayout } from '@shared';

import { SCREEN_NAME } from './constants';
import { SearchController } from './search.controller';

type SearchViewProps = {
  controller: SearchController;
};

export function SearchView({ controller }: SearchViewProps) {
  return (
    <ScreenLayout>
      <Text>{SCREEN_NAME}</Text>
    </ScreenLayout>
  );
}
