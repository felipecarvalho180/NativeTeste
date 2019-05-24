import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Routes from './src/routes/LoginValidation';

AppRegistry.registerComponent(appName, () => Routes);
