import { Text } from 'react-native';

import { ScreenLayout } from '@shared';

import { SearchController } from './search.controller';

type SearchViewProps = {
  controller: SearchController;
};

export function SearchView({ controller }: SearchViewProps) {
  const screenName = 'Search';
  return (
    <ScreenLayout>
      <Text>{screenName}</Text>
    </ScreenLayout>
  );
}
