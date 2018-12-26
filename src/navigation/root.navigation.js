import {
    createAppContainer,
    createSwitchNavigator,
    createStackNavigator,
} from 'react-navigation'

import AuthenRouter from './authen.navigation'
import TabHomeNavigation from './tab-home.navigation'
import AuthLoadingScreen from '../containers/authen/loadApp.container'

const RootStackNavigator = createSwitchNavigator(
    {
        LoadApp: {
            screen: AuthLoadingScreen,
            navigationOptions: { header: null }
        },
        AuthenRouter: {
            screen: AuthenRouter,
            navigationOptions: { header: null }
        },
        TabHome: {
            screen: TabHomeNavigation,
            navigationOptions: { header: null }
        },
    },
    {
        initialRouteName: 'LoadApp',
    }
)

export default createAppContainer(RootStackNavigator)