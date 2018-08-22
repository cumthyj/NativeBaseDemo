/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import NbDemo from './src/pages/nbdemo';

AppRegistry.registerComponent(appName, () => NbDemo);
