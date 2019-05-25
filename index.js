import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import LoginValidation from './src/routes/LoginValidation';


AppRegistry.registerComponent(appName, () => LoginValidation);
