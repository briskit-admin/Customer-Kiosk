/**
 * @format
 */

import 'react-native-gesture-handler'; 
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['ReactImageView: Image source "null" doesn\'t exist']);

AppRegistry.registerComponent(appName, () => App);
