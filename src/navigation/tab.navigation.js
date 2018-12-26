// import React, { Component } from 'react'
// import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
// import MainTabContainer from '../containers/home/tab-main.container'
// import TabAccountNavigation from './tab-account.navigation'
// import TabHomeNavigation from './tab-home.navigation'
// import StockExchangeNavigator from './stockexchange.navigation'
// import HelperNavigator from './helper.navigation'

// const MainTab = ({ navigation }) => {
//     // console.log('MainTab', JSON.stringify(navigation.state))
//     const { index } = navigation.state
//     return (
//         <MainTabContainer navigation={navigation} index={index} />
//     )
// }
// const MainRouter = createMaterialTopTabNavigator({
//     Home: { screen: TabHomeNavigation },
//     Helper: { screen: HelperNavigator },
//     StockExchange: { screen: StockExchangeNavigator },
//     Account: { screen: TabAccountNavigation },
// }, {
//         tabBarComponent: MainTab,
//         tabBarPosition: 'bottom',
//         initialRouteName: 'Home',
//         navigationOptions: {
//             scrollEnabled: false,
//             gesturesEnabled: false,
//             swipeEnabled: false,
//             animationEnabled: false
//         },
//     })
// export default MainRouter
