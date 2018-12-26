// import {
//     createStackNavigator,
//     createAppContainer
// } from 'react-navigation';
// import StockExchangeContainer from '../containers/stockexchange/stockexchange-v2.container'
// import ResultStockExchangeContainer from '../containers/stockexchange/result-stockexchange.container'
// import StockExchangeDetailContainer from '../containers/stockexchange/stockexchange-detail.container'
// const StockExchangeNavigator = createStackNavigator(
//     {
//         StockExchangeDefault: {
//             screen: StockExchangeContainer,
//             navigationOptions: { header: null }
//         },
//         ResultStockExchange: {
//             screen: ResultStockExchangeContainer,
//             navigationOptions: { header: null }
//         },
//         StockExchangeDetail: {
//             screen: StockExchangeDetailContainer,
//             navigationOptions: { header: null }
//         },
//     },
//     { 
//         initialRouteName: 'StockExchangeDefault',
//         navigationOptions: {
//             swipeEnabled: false,
//             scrollEnabled: false,
//             gesturesEnabled: false,
//         }
        
//     }
// );

// StockExchangeNavigator.navigationOptions = ({ navigation }) => {
//     let tabBarVisible = true;
//     if (navigation.state.index > 0) {
//         tabBarVisible = false;
//     }
//     return {
//         tabBarVisible,
//     };
// };
// export default StockExchangeNavigator


