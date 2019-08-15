/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
// import App from './App';
// import {App} from './react/router/Router'
import {InitPage} from "./react/demand/init/InitPage";

AppRegistry.registerComponent(appName, () => InitPage);
