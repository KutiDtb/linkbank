// import React, { PureComponent } from 'react';
// import {
//     View,
//     Text
// } from 'react-native';
// import { connect } from 'react-redux'
// import BaseContainer from '../home/base.container'
// import Header from '../../components/common/Header'
// import { verticalScale } from '../../theme/scaling'
// import Localization from '../../config/languages/i18n'
// import InputPicker from '../../components/input/InputPicker'
// import Input from '../../components/input/Input'
// import Picker from '../../components/input/Picker'
// import { Screens, Colors, Images } from '../../theme'
// import config from '../../config/config'
// import { ScrollView } from 'react-native-gesture-handler';

// class HelperContainer extends PureComponent {
//     constructor(props) {
//         super(props);
//     }

//     actionBack = () => {
//         this.props.navigation.goBack()
//     }
//     render() {
//         return (
//             <BaseContainer
//                 currentScreen={'Helper'}
//                 onBackHandler={this.actionBack}
//                 showHeader={true}
//                 titleHeader={'Chọn chuyên viên'}
//                 showHeaderBack={false}
//                 actionHeaderBack={this.actionBack}
//                 showHeaderNext={true}
//                 actionHeaderNext={this.actionNext}
//             >
//                 <ScrollView style={{
//                     flex: 1,
//                     flexDirection: 'column',
//                     marginTop: verticalScale(10)
//                 }}>

//                     <Picker
//                         data={config.infoCity}
//                         onValueChange={(text) => this.onChangeText(text)}
//                     />

//                     <Picker
//                         data={config.infoDistrict}
//                         onValueChange={(text) => this.onChangeText(text)}
//                     />

//                     <Picker
//                         data={config.loanModal}
//                         onValueChange={(text) => this.onChangeText(text)}
//                     />

//                     <Picker
//                         data={config.major}
//                         onValueChange={(text) => this.onChangeText(text)}
//                     />

//                     <Input
//                         keyboardType={'default'}
//                         placeholder={Localization('hoten')}
//                         onChangeText={(text) => this.onChangeText(text)}
//                     />
//                 </ScrollView>
//             </BaseContainer>
//         )
//     }

//     actionNext = () => {
//         this.props.navigation.navigate(Screens.HelperResult)
//     }

//     onChangeText(text) {
//         console.log(text)
//     }
// }
// const mapStateToProps = (state) => {
//     return {

//     }
// }

// const mapDispatchToProps = (dispatch) => ({
// })


// export default connect(mapStateToProps, mapDispatchToProps)(HelperContainer)