import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import LoginValidation from './src/routes/LoginValidation';
import './src/config/StatusBarConfig'


AppRegistry.registerComponent(appName, () => LoginValidation);
