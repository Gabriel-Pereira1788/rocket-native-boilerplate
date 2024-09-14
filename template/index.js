/**
 * @format
 */
import { AppRegistry } from 'react-native';
import App from './src/app/App';
import { name as appName } from './app.json';
import './gesture-handler';

AppRegistry.registerComponent(appName, () => App);
