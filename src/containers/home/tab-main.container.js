// import React, { PureComponent } from 'react';
// import {
//     View,
//     Text,
//     TouchableOpacity,
//     Image,
//     StyleSheet,
//     BackHandler
// } from 'react-native';
// import { connect } from 'react-redux'
// import { Images, AppStyle, Colors } from '../../theme'
// import { scale, verticalScale } from '../../theme/scaling'
// import Localization from '../../config/languages/i18n'
// import LinearGradient from 'react-native-linear-gradient'
// // import NavigationAction, { NavigationTypes } from '../../redux/navigation.redux'

// const Styles = StyleSheet.create({
//     container: {
//         flex: 0.05,
//         justifyContent: 'center',
//     },
//     tabBtn: {
//         justifyContent: 'flex-start',
//         alignItems: 'center',
//         width: verticalScale(75),
//     },
//     tabBtnIcon: { padding: scale(1) },
// });

// class MainTabContainter extends PureComponent {
//     constructor(props) {
//         super(props);

//         this.state = {
//             open: this.props.showHideTabMain
//         }
//     }

//     componentDidMount() {
//         BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
//     }

//     componentWillUnmount() {
//         BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
//     }

//     componentWillReceiveProps(nextProps) {
//         if (nextProps.showHideTabMain !== this.props.showHideTabMain) {
//             if (nextProps.showHideTabMain) {
//                 this.setState({
//                     open: nextProps.showHideTabMain
//                 })
//             } else {
//                 setTimeout(() => {
//                     this.setState({
//                         open: nextProps.showHideTabMain
//                     })
//                 }, 600)
//             }
//         }
//     }

//     handleBackPress = () => {
//         BackHandler.exitApp();
//     }

//     baseRef = (obj) => this.base = obj
//     onReload = () => { }
//     onSwitchToHome = () => this.props.navigation.navigate('Home')
//     onSwitchToStockExchange = () => this.props.navigation.navigate('StockExchange')
//     onSwitchToHelper = () => this.props.navigation.navigate('Helper')
//     onSwitchToAccount = () => this.props.navigation.navigate('Account')

//     render() {
//         if (!this.state.open) {
//             return (
//                 <LinearGradient colors={[Colors._1ea7ea, Colors._3697bd, Colors._2ace4d]}
//                     style={{
//                         flexDirection: 'row',
//                         justifyContent: 'space-around',
//                         alignItems: 'center',
//                         // backgroundColor: 'white',
//                         height: verticalScale(60)
//                     }}>
//                     <TouchableOpacity onPress={this.onSwitchToHome}
//                         style={Styles.tabBtn}>
//                         <View style={Styles.tabBtnIcon}>
//                             <Image source={this.props.index === 0 ? Images.home.color : Images.home.grey} />
//                         </View>
//                         <Text style={AppStyle.txtTabMain}> {Localization('trangchu')}</Text>
//                     </TouchableOpacity>
    
//                     <TouchableOpacity style={Styles.tabBtn} onPress={this.onSwitchToHelper}>
//                         <View style={Styles.tabBtnIcon}>
//                             <Image source={this.props.index === 1 ? Images.find.color : Images.find.grey} />
//                         </View>
//                         <Text style={AppStyle.txtTabMain}> {Localization('tuvanvien')}</Text>
//                     </TouchableOpacity>
    
//                     <TouchableOpacity style={Styles.tabBtn} onPress={this.onSwitchToStockExchange}>
//                         <View style={Styles.tabBtnIcon}>
//                             <Image source={this.props.index === 2 ? Images.stockexchange.color : Images.stockexchange.grey} />
//                         </View>
//                         <Text style={AppStyle.txtTabMain}> {Localization('sangiaodich')}</Text>
//                     </TouchableOpacity>
    
//                     <TouchableOpacity style={Styles.tabBtn} onPress={this.onSwitchToAccount}>
//                         <View style={Styles.tabBtnIcon}>
//                             <Image source={this.props.index === 3 ? Images.account.color : Images.account.grey} />
//                         </View>
//                         <Text style={AppStyle.txtTabMain}> {Localization('taikhoan')}</Text>
//                     </TouchableOpacity>
//                 </LinearGradient>
//             )
//         } else {
//             return null
//         }
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         showHideTabMain: state.navigationRedux.showHideTabMain,
//     }
// }

// const mapDispatchToProps = (dispatch) => ({
// })

// export default connect(mapStateToProps, mapDispatchToProps)(MainTabContainter)
