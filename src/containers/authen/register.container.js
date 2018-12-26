import React, { PureComponent } from 'react';
import {
    View,
    Text,
    Platform,
    TouchableOpacity,
    Keyboard
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import Header from '../../components/common/Header'
import InputType3 from '../../components/input/InputType3'
import InputType2 from '../../components/input/InputType2'
import ButtonNext from '../../components/button/ButtonNext'
import { scale } from '../../theme/scaling'
import Localization from '../../config/languages/i18n'
import config from '../../config/config'
import { Screens, Colors, Images, AppStyle } from '../../theme'
import LinearGradient from 'react-native-linear-gradient'
import * as Helper from '../../saga/buz/app-helper'
import AccountAction, { AccountTypes } from '../../redux/account.redux'
import InputPassword from '../../components/input/InputPassword'
import appConfig from '../../config/app-config'

const RENDER_TYPE = {
    PHONE: 'PHONE',
    PASS: 'PASS',
    OTP: 'OTP'
}

class RegisterContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            renderType: RENDER_TYPE.PHONE,

            phone: undefined,
            name: undefined,
            pass: undefined,
            passConfirm: undefined,
            otp: undefined,
            msgError: undefined,
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('register-receive', JSON.stringify(nextProps))
        if (nextProps.fetchStatus === config.FetchStatus.kFinishFetch &&
            this.props.fetchStatus !== nextProps.fetchStatus) {
            switch (nextProps.currentRequestName) {
                case AccountTypes.REGISTER_CHECK_ACCOUNT:
                    this.base.loading(false)
                    if (true === nextProps.apiStatus) {
                        this.setState({
                            renderType: RENDER_TYPE.PASS
                        })
                    } else {
                        this.base.showErrorAlert(nextProps.error)
                        // this.setState({
                        //     msgError: nextProps.error
                        // })
                    }
                    break;
                case AccountTypes.REGISTER_SET_PASS:
                    this.base.loading(false)
                    if (true === nextProps.apiStatus) {
                        this.setState({
                            renderType: RENDER_TYPE.OTP
                        })
                    } else {
                        this.base.showErrorAlert(nextProps.error)
                        // this.setState({
                        //     msgError: nextProps.error
                        // })
                    }
                    break;
                case AccountTypes.REGISTER_CHECK_OTP:
                    this.base.loading(false)
                    if (true === nextProps.apiStatus) {
                        this.props.rootNaviation.navigate('TabHome')
                    } else {
                        this.base.showErrorAlert(nextProps.error)
                        // this.setState({
                        //     msgError: nextProps.error
                        // })
                    }
                    break;

                default:
                    break;
            }
        }
    }


    renderScreenPhone() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <View style={{
                    height: scale(50)
                }}>
                    <InputType3
                        keyboardType={'numeric'}
                        title={''}
                        placeholder={'Nhập số điện thoại'}
                        onChangeText={(text) => this.onChangePhone(text)}
                        styleInput={{
                            marginTop: scale(-20),
                            borderColor: Colors._1ea7ea,
                            borderRadius: scale(5),
                            backgroundColor: Colors.whiteTwo,
                            paddingLeft: scale(20),
                            justifyContent: 'center',
                        }}
                        maxLength={10}
                    />
                </View>
                <View style={{
                    height: scale(60)
                }}>
                    <InputType3
                        title={''}
                        keyboardType={'default'}
                        autoCapitalize={'characters'}
                        placeholder={'Nhập họ tên'}
                        onChangeText={(text) => this.onChangeName(text)}
                        styleInput={{
                            borderColor: Colors._1ea7ea,
                            // borderWidth: scale(1),
                            borderRadius: scale(5),
                            // height: scale(40),
                            // paddingTop: Platform.OS === 'ios' ? scale(10) : scale(0),
                            paddingLeft: scale(20),
                            backgroundColor: Colors.whiteTwo,
                            justifyContent: 'center',
                        }}
                        maxLength={50}
                    />
                </View>


                <TouchableOpacity onPress={this.actionPhoneNext} style={{
                    marginTop: scale(40),
                }}>
                    <LinearGradient
                        colors={[Colors.alive_BD3F32, Colors.alive_CB356B]}
                        start={{ x: 0.0, y: 0.9 }} end={{ x: 0.9, y: 1.0 }}
                        locations={[0, 1]}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: scale(5),
                            height: scale(55),
                            borderColor: Colors.whiteTwo,
                            borderWidth: scale(1)
                        }}
                    >
                        <Text style={[AppStyle.Title_Center_White, { fontWeight: 'bold' }]}> {'Tiếp tục'}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        )
    }

    renderScreenPass() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <View style={{
                    height: scale(50)
                }}>
                    <InputPassword
                        keyboardType={'numeric'}
                        title={''}
                        placeholder={'Nhập mật khẩu'}
                        onChangeText={(text) => this.onChangePass(text)}
                        styleInput={{
                            marginTop: scale(-20),
                            borderColor: Colors._1ea7ea,
                            // borderWidth: scale(1),
                            borderRadius: scale(5),
                            height: scale(40),
                            paddingTop: Platform.OS === 'ios' ? scale(10) : scale(0),
                            paddingLeft: scale(20),
                            backgroundColor: Colors.whiteTwo,
                        }}
                        maxLength={6}
                    />
                </View>
                <View style={{
                    height: scale(60)
                }}>
                    <InputPassword
                        title={''}
                        keyboardType={'numeric'}
                        placeholder={'Nhập lại mật khẩu'}
                        onChangeText={(text) => this.onChangePassConfirm(text)}
                        styleInput={{
                            borderColor: Colors._1ea7ea,
                            // borderWidth: scale(1),
                            borderRadius: scale(5),
                            height: scale(40),
                            paddingTop: Platform.OS === 'ios' ? scale(10) : scale(0),
                            paddingLeft: scale(20),
                            backgroundColor: Colors.whiteTwo,
                        }}
                        maxLength={6}
                    />
                </View>


                <TouchableOpacity onPress={this.actionPassNext} style={{
                    marginTop: scale(40),
                }}>
                    <LinearGradient
                        colors={[Colors.alive_BD3F32, Colors.alive_CB356B]}
                        start={{ x: 0.0, y: 0.9 }} end={{ x: 0.9, y: 1.0 }}
                        locations={[0, 1]}
                        style={{
                            // marginTop: scale(40),
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: scale(5),
                            height: scale(55),
                            borderColor: Colors.whiteTwo,
                            borderWidth: scale(1)
                        }}
                    >
                        <Text style={[AppStyle.Title_Center_White, { fontWeight: 'bold' }]}> {'Tiếp tục'}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        )
    }

    renderScreenOTP() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <View style={{
                    height: scale(60)
                }}>
                    <InputType3
                        title={''}
                        keyboardType={'numeric'}
                        placeholder={'Nhập OTP'}
                        onChangeText={(text) => this.onChangeOTP(text)}
                        styleInput={{
                            borderColor: Colors._1ea7ea,
                            // borderWidth: scale(1),
                            borderRadius: scale(5),
                            // paddingTop: Platform.OS === 'ios' ? scale(10) : scale(0),
                            paddingLeft: scale(20),
                            backgroundColor: Colors.whiteTwo,
                        }}
                        maxLength={6}
                    />
                </View>


                <TouchableOpacity onPress={this.actionOTPNext} style={{
                    marginTop: scale(40),
                }}>
                    <LinearGradient
                        colors={[Colors.alive_BD3F32, Colors.alive_CB356B]}
                        start={{ x: 0.0, y: 0.9 }} end={{ x: 0.9, y: 1.0 }}
                        locations={[0, 1]}
                        style={{
                            // marginTop: scale(40),
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: scale(5),
                            height: scale(55),
                            borderColor: Colors.whiteTwo,
                            borderWidth: scale(1)
                        }}
                    >
                        <Text style={[AppStyle.Title_Center_White, { fontWeight: 'bold' }]}> {'Tiếp tục'}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        )
    }

    renderScreenByType() {
        switch (this.state.renderType) {
            case RENDER_TYPE.PHONE: {
                return this.renderScreenPhone()
            }
            case RENDER_TYPE.PASS: {
                return this.renderScreenPass()
            }
            case RENDER_TYPE.OTP: {
                return this.renderScreenOTP()
            }
        }
    }

    baseRef = (obj) => this.base = obj
    render() {
        return (
            <BaseContainer
                currentScreen={'Register'}
                ref={this.baseRef}
                ownStyle={{
                    flex: 1,
                    backgroundColor: null
                }}
            >
                {this.renderScreenByType()}
            </BaseContainer>
        )
    }

    onChangePhone(text) {
        if (text.length === 10) {
            var check = Helper.checkPhoneVN(text)
            if (check !== 1) {
                this.base.showErrorAlert(Localization('ERR_APP_PHONE_INVALID'))
                // this.setState({
                //     phone: text,
                //     msgError: 'SDT chua chinh xac'
                // })
            } else {
                Keyboard.dismiss()
                this.setState({
                    phone: text,
                    msgError: undefined
                })
            }
        } else {
            this.setState({
                phone: text,
                msgError: undefined
            })
        }
    }

    onChangeName(text) {
        this.setState({
            name: text,
            msgError: undefined
        })
    }

    onChangePass(text) {
        // console.log(text)
        this.setState({
            pass: text,
            msgError: undefined
        })

        if (text.length === appConfig.LENGTH_PASS) {
            Keyboard.dismiss()
        }
    }

    onChangePassConfirm(text) {
        if (text.length === appConfig.LENGTH_PASS) {
            if (text !== this.state.pass) {
                this.base.showErrorAlert(Localization('ERR_APP_PASSWORD_MISSMATCH'))
                // this.setState({
                //     msgError: 'MK kh khop'
                // })
            } else {
                this.setState({
                    passConfirm: text,
                })
                Keyboard.dismiss()
            }
        }
    }

    onChangeOTP(text) {
        this.setState({
            otp: text,
            msgError: undefined
        })
        if (text.length === appConfig.LENGTH_OTP) {
            Keyboard.dismiss()
        }
    }

    actionPhoneNext = () => {
        if (!Helper.checkValidString(this.state.phone)) {
            this.base.showErrorAlert('Vui lòng nhập số điện thoại')
            return
        }
        if (!Helper.checkValidString(this.state.name)) {
            this.base.showErrorAlert('Vui lòng nhập tên đăng nhập')
            return
        }
        this.base.loading(true)
        this.props.registerCheckAccount(this.state.phone, this.state.name)
        // this.setState({
        //     renderType: RENDER_TYPE.PASS
        // })
    }

    actionPassNext = () => {
        if (!Helper.checkValidString(this.state.pass)) {
            this.base.showErrorAlert('Vui lòng nhập mật khẩu')
            return
        }
        if (!Helper.checkValidString(this.state.passConfirm)) {
            this.base.showErrorAlert('Vui lòng nhập lại mật khẩu')
            return
        }
        this.base.loading(true)
        this.props.registerSetPass(this.state.phone, this.state.pass, this.state.name)
        // this.setState({
        //     renderType: RENDER_TYPE.OTP
        // })
    }

    actionOTPNext = () => {
        if (!Helper.checkValidString(this.state.otp)) {
            this.base.showErrorAlert('Vui lòng mã OTP')
            return
        }
        this.base.loading(true)
        this.props.registerCheckOtp(this.state.phone, this.state.otp, this.state.pass, this.state.name)
        // this.setState({
        //     renderType: RENDER_TYPE.PHONE
        // })
    }
}
const mapStateToProps = (state) => {
    return {
        fetchStatus: state.accountRedux.fetchStatus,
        apiStatus: state.accountRedux.status,
        data: state.accountRedux.data,
        error: state.accountRedux.error,
        currentRequestName: state.accountRedux.currentRequestName,
        nextScreen: state.accountRedux.nextScreen,
    }
}

const mapDispatchToProps = (dispatch) => ({
    registerCheckAccount: (phone, name) => dispatch(AccountAction.registerCheckAccount(phone, name)),
    registerSetPass: (phone, pass, name) => dispatch(AccountAction.registerSetPass(phone, pass, name)),
    registerCheckOtp: (phone, otp, pass, name) => dispatch(AccountAction.registerCheckOtp(phone, otp, pass, name)),
})


export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)