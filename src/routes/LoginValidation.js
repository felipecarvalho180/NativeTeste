import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginPage from './../pages/LoginPage/LoginPage';
import DrawerApp from './DrawerNavigation'

const LoginValidation = createAppContainer(
    createStackNavigator({
      LoginPage: LoginPage,
      DrawerApp: DrawerApp,
    }, {
      headerMode: 'none',
    }),
  );

export default LoginValidation;