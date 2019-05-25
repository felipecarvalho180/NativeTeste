import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginPage from './../pages/LoginPage/LoginPage';
import DrawerApp from './DrawerNavigation'

const LogOut = createAppContainer(
    createStackNavigator({
        DrawerApp: DrawerApp,
        LoginPage: LoginPage,
    }, {
      headerMode: 'none'
    }),
  );

export default LogOut;