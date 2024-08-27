import { AppStackParamList } from './Routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppStackParamList {}
  }
}
