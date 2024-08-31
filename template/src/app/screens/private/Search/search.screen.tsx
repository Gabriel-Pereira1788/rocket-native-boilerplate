import { useSearchController } from './search.controller';
import { SearchView } from './search.view';

export function SearchScreen() {
  const controller = useSearchController({});

  return <SearchView controller={controller} />;
}
