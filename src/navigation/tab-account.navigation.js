// import {
//     createStackNavigator,
//     createAppContainer
// } from 'react-navigation';
// import AccountContainer from '../containers/home/account.container'
// import AccountTaks from '../containers/account-info/account-taks.container'
// import AccountInfoContainer from '../containers/account-info/account-info.container'
// import AccountInfoWorkContainer from '../containers/account-info/acc-info-work.container'
// import AccountContactContainer from '../containers/account-info/account-contact.container'
// import AccountChannelContainer from '../containers/account-info/account-channel.container'
// import AccountDocumentContainer from '../containers/account-info/account-doc.container'
// import ConsultationContainer from '../containers/consultation/consultation.container'
// import ManageLoanContainer from '../containers/loan/manage-loan.container'
// import LoanDetailContainer from '../containers/loan/loan-detail.container'
// import MenuContainer from '../containers/home/menu.container'

// const TabAccountNavigator = createStackNavigator(
//     {
//         AccountDefault: {
//             screen: AccountContainer,
//             navigationOptions: { header: null }
//         },
//         AccountTaks: {
//             screen: AccountTaks,
//             navigationOptions: { header: null }
//         },
//         AccountInfo: {
//             screen: AccountInfoContainer,
//             navigationOptions: { header: null }
//         },
//         AccountInfoWork: {
//             screen: AccountInfoWorkContainer,
//             navigationOptions: { header: null }
//         },
//         AccountContact: {
//             screen: AccountContactContainer,
//             navigationOptions: { header: null }
//         },
//         AccountChannel: {
//             screen: AccountChannelContainer,
//             navigationOptions: { header: null }
//         },
//         AccountDocument: {
//             screen: AccountDocumentContainer,
//             navigationOptions: { header: null }
//         },
//         Consultation: {
//             screen: ConsultationContainer,
//             navigationOptions: { header: null }
//         },
//         ManageLoan: {
//             screen: ManageLoanContainer,
//             navigationOptions: { header: null }
//         },
//         LoanDetail: {
//             screen: LoanDetailContainer,
//             navigationOptions: { header: null }
//         },

//         Menu: {
//             screen: MenuContainer,
//             navigationOptions: { header: null }
//         },
//     },
//     { 
//         initialRouteName: 'AccountDefault',
//         navigationOptions: {
//             swipeEnabled: false,
//             scrollEnabled: false,
//             gesturesEnabled: false,
//         }
        
//     }
// );

// TabAccountNavigator.navigationOptions = ({ navigation }) => {
//     let tabBarVisible = true;
//     if (navigation.state.index > 0) {
//         tabBarVisible = false;
//     }
//     return {
//         tabBarVisible,
//     };
// };
// export default TabAccountNavigator


