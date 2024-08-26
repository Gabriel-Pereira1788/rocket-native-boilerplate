import 'react-native-gesture-handler/jestSetup';
import {jestStorage} from '../adapters/storage/implementation/jest-storage-impl';
import {setStorageImpl} from '../adapters/storage/storage';

setStorageImpl(jestStorage);
