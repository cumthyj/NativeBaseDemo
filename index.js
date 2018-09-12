/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Meituan from './src/pages/meituan';

AppRegistry.registerComponent(appName, () => Meituan);
