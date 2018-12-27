import React, { PureComponent } from 'react';
import {
    View,
    Text,
    Platform,
    TouchableOpacity,
    Keyboard,
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import { scale } from '../../theme/scaling'
import Localization from '../../config/languages/i18n'
import config from '../../config/config'
import InputType3 from '../../components/input/InputType3'
import InputPassword from '../../components/input/InputPassword'
import { Screens, Colors, Images, AppStyle } from '../../theme'
import * as Helper from '../../saga/buz/app-helper'
import AccountAction, { AccountTypes } from '../../redux/account.redux'
import * as Buz from '../../saga/buz/app-buz'
import appConfig from '../../config/app-config'
const { msg } = require('../../config/languages/message-error')

class LoginContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.account = Buz.getAccount()
        // console.log('LoginContainer', JSON.stringify(this.account))
        this.state = {
            phone: this.account.phone,
            pass: '',
            passMask: '',

            msgError: undefined,
        }
    }

    componentWillReceiveProps(nextProps) {
        // console.log('login-receive', JSON.stringify(nextProps))
        // console.log('this.props.fetchStatus', this.props.fetchStatus)
        // console.log('nextProps.fetchStatus', nextProps.fetchStatus)
        if (nextProps.fetchStatus === config.FetchStatus.kFinishFetch &&
            this.props.fetchStatus !== nextProps.fetchStatus) {
                switch (nextProps.currentRequestName) {
                    case AccountTypes.LOGIN:
                        this.base.loading(false)
                        if (true === nextProps.apiStatus) {
                            this.props.rootNaviation.navigate('TabHome')
                        } else {
                            this.base.showErrorAlert(nextProps.error)
                        }
                        break;
                
                    default:
                        break;
                }
        }
    }

    renderMessageError() {
        if (this.state.msgError !== undefined) {
            return (
                <Text style={[AppStyle.Paragraph_Center_White, {
                    marginTop: scale(20)
                }]}> {this.state.msgError}</Text>
            )
        }
    }

    baseRef = (obj) => this.base = obj
    render() {
        return (
            <BaseContainer
                currentScreen={'Login'}
                ref={this.baseRef}
                ownStyle={{
                    flex: 1,
                }}
            >
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    // justifyContent: 'center',
                }}>
                    <View style={{
                        height: scale(50)
                    }}>
                        <InputType3
                            keyboardType={'numeric'}
                            title={''}
                            placeholder={'Số điện thoại'}
                            onChangeText={(text) => this.onChangePhone(text)}
                            maxLength={10}
                            styleInput={{
                                marginTop: scale(-20),
                                borderColor: Colors._1ea7ea,
                                borderRadius: scale(5),
                                backgroundColor: Colors.whiteTwo,
                                height: scale(50),
                                // paddingTop: Platform.OS === 'ios' ? scale(10) : scale(0),
                                paddingLeft: scale(20),
                                justifyContent: 'center'
                            }}
                            value={this.state.phone}
                        />
                    </View>
                    <View style={{
                        height: scale(60)
                    }}>
                        <InputPassword
                            keyboardType={'numeric'}
                            title={''}
                            placeholder={'Nhập mật khẩu'}
                            onChangeText={(text) => this.onChangePass(text)}
                            maxLength={6}
                            styleInput={{
                                borderColor: Colors._1ea7ea,
                                // borderWidth: scale(1),
                                backgroundColor: Colors.whiteTwo,
                                borderRadius: scale(5),
                                height: scale(50),
                                // paddingTop: Platform.OS === 'ios' ? scale(10) : scale(0),
                                paddingLeft: scale(20),
                                justifyContent: 'center'
                            }}
                            textContentType={'password'}
                        />
                    </View>

                    <TouchableOpacity style={{
                        marginTop: scale(30),
                        flexDirection: 'column',
                        justifyContent: 'flex-end'
                    }} onPress={this.actionForgotPass}>
                        <Text style={AppStyle.Tiny_Right_White}> {'Quên mật khẩu'}</Text>
                    </TouchableOpacity>
                    <View style={{
                        marginTop: scale(20),
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity onPress={this.actionPhoneNext} style={{
                            backgroundColor: Colors.whiteTwo,
                            justifyContent: 'center',
                            width: scale(200),
                            height: scale(40),
                            borderRadius: scale(20),
                        }}>
                            <Text style={[AppStyle.Title_Center_Black]}> {'Đăng nhập'}</Text>
                        </TouchableOpacity>
                        <Text style={[AppStyle.Tiny_Center_White, { marginTop: scale(10) }]}> {'Hoặc'}</Text>
                        <TouchableOpacity style={{
                            marginTop: scale(10),
                            backgroundColor: '#192f6a',
                            // backgroundColor: Colors.whiteTwo,
                            justifyContent: 'center',
                            width: scale(200),
                            height: scale(40),
                            borderRadius: scale(20),
                        }} onPress={this.actionLoginFB}>
                            <Text style={[AppStyle.Title_Center_White]}> {'Facebook'}</Text>
                        </TouchableOpacity>
                    </View>


                    {this.renderMessageError()}
                </View>
            </BaseContainer>
        )
    }

    onChangePhone(text) {
        if (text.length === 10) {
            Keyboard.dismiss()
            var check = Helper.checkPhoneVN(text)
            console.log('Helper.checkPhoneVN', check)
            if (check !== 1) {
                this.base.showErrorAlert(Localization('ERR_APP_PHONE_INVALID'))
            } else {
                this.setState({
                    phone: text,
                })
                if (Helper.checkValidString(this.state.pass)) {
                    this.base.loading(true)
                    this.props.login(text, this.state.pass)
                }
            }
        } else {
            this.setState({
                phone: text,
            })
        }
    }

    onChangePass(text) {
        // console.log('onChangePass-pass', text)
        this.setState({
            pass: text,
            msgError: undefined
        })
        if (text.length === appConfig.LENGTH_PASS) {
            Keyboard.dismiss()
            if (Helper.checkValidString(this.state.phone)) {
                this.base.loading(true)
                this.props.login(this.state.phone, text)
            }
        }
    }

    actionPhoneNext = () => {
        if (!Helper.checkValidString(this.state.phone)) {
            this.base.showErrorAlert(msg.ERR_APP_INVALID_CONTACT_PHONE)
            return
        } else if (Helper.checkPhoneVN(this.state.phone) !== 1){
            this.base.showErrorAlert(Localization('ERR_APP_PHONE_INVALID'))
            return
        }
        if (!Helper.checkValidString(this.state.pass)) {
            this.base.showErrorAlert(msg.ERR_APP_INVALID_LOGIN_PASS)
            return
        }
        this.base.loading(true)
        this.props.login(this.state.phone, this.state.pass)
        // this.props.rootNaviation.navigate('TabHome')

        // alert(JSON.stringify(this.props.rootNaviation))
        // console.log('this.state.phone', this.state.phone)
        // console.log('this.state.pass', this.state.pass)
        // if ('0394084334' === this.state.phone &&
        //     '123456' === this.state.pass) {
        //     this.props.rootNaviation.navigate('TabHome')
        // } else {
        //     this.setState({
        //         msgError: 'Thông tin chưa chính xác!'
        //     })
        // }
    }

    actionForgotPass = () => {
        this.base.showUpdateAlert()
    }

    actionLoginFB = () => {
        this.base.showUpdateAlert()
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
    login: (phone, pass) => dispatch(AccountAction.login(phone, pass)),
})


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)