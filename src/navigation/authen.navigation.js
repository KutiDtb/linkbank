import {
    createStackNavigator,
} from 'react-navigation';
import AuthenContainer from '../containers/authen/authen.container'

const AuthenNavigator = createStackNavigator(
    {
        AuthenDefault: {
            screen: AuthenContainer,
            navigationOptions: { header: null }
        },
    },
    { 
        initialRouteName: 'AuthenDefault',
        navigationOptions: {
            swipeEnabled: false,
            scrollEnabled: false,
            gesturesEnabled: false,
        }
        
    }
);

export default AuthenNavigator


