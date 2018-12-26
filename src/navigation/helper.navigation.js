// import {
//     createStackNavigator,
//     createAppContainer
// } from 'react-navigation';
// import HelperContainer from '../containers/helper/helper-v2.container'
// import HelperDetailContainer from '../containers/helper/helper-detail.container'
// import HelperResultContainer from '../containers/helper/helper-result.container'

// const HelperNavigator = createStackNavigator(
//     {
//         HelperDefault: {
//             screen: HelperContainer,
//             navigationOptions: { header: null }
//         },
//         HelperResult: {     // remove
//             screen: HelperResultContainer,
//             navigationOptions: { header: null }
//         },
//         HelperDetail: {
//             screen: HelperDetailContainer,
//             navigationOptions: { header: null }
//         },
//     },
//     { 
//         initialRouteName: 'HelperDefault',
//         navigationOptions: {
//             swipeEnabled: false,
//             scrollEnabled: false,
//             gesturesEnabled: false,
//         }
        
//     }
// );

// HelperNavigator.navigationOptions = ({ navigation }) => {
//     let tabBarVisible = true;
//     if (navigation.state.index > 0) {
//         tabBarVisible = false;
//     }
//     return {
//         tabBarVisible,
//     };
// };
// export default HelperNavigator


