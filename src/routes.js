import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login';
import SignUp from './pages/SignUp';

const AuthStack = createStackNavigator({
    Login,
    SignUp,
}, {
    defaultNavigationOptions: {
        header: null,
    },
});

const Routes = createAppContainer(AuthStack);

export default Routes;