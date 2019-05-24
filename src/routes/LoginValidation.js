import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginPage from './../pages/LoginPage/LoginPage';
import HomePage from './../pages/HomePage/HomePage';

const Routes = createAppContainer(
    createStackNavigator({
      LoginPage: LoginPage,
      HomePage: HomePage,
    })
  );

export default Routes;