import React, { PureComponent } from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import Channel from '../../components/channel/Channel'
import ChannelPhone from '../../components/channel/ChannelPhone'
import ChannelModalOTP from '../../components/channel/ChannelModalOTP'
import { scale } from '../../theme/scaling';
import Localization from '../../config/languages/i18n';
import { AppStyle, Colors, Screens } from '../../theme'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import appConfig from '../../config/app-config'
import AccountAction, { AccountTypes } from '../../redux/account.redux'
import * as Buz from '../../saga/buz/app-buz'
import config from '../../config/config'
import * as Helper from '../../saga/buz/app-helper'
const { msg } = require('../../config/languages/message-error')

class AccountChannelContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.account = Buz.getAccount()

        this.state = {
            phoneOne: '',
            phoneTwo: '',
            taskFinish: [],

            currentPhone: 1,
            showModalOTP: false,
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('account-channel-receive', JSON.stringify(nextProps))
        // console.log('this.props.fetchStatus', this.props.fetchStatus)
        // console.log('nextProps.fetchStatus', nextProps.fetchStatus)
        if (nextProps.fetchStatus === config.FetchStatus.kFinishFetch &&
            this.props.fetchStatus !== nextProps.fetchStatus) {
            switch (nextProps.currentRequestName) {
                case AccountTypes.UPDATE_CHANNEL_PHONE:
                    if (true === nextProps.apiStatus) {
                        this.setState({
                            showModalOTP: true
                        })
                    } else {
                        this.base.showErrorAlert(nextProps.error)
                    }
                    break;
                case AccountTypes.VERIFY_CHANNEL_PHONE:
                    if (true === nextProps.apiStatus) {
                        var task = this.state.taskFinish
                        if (this.state.currentPhone === 1) {
                            task.push('PHONE_ONE')
                        } else {
                            task.push('PHONE_TWO')
                        }
                        this.setState({
                            showModalOTP: false,
                            taskFinish: task
                        })
                    } else {
                        this.base.showErrorAlert(nextProps.error)
                    }
                    break;
                default:
                    break;
            }
        }
    }

    renderModalOTP() {
        if (this.state.showModalOTP) {
            return (
                <ChannelModalOTP
                    showModal={this.state.showModalOTP}
                    actionResult={(otp) => this.actionResult(otp)}
                />
            )
        } else {
            return null
        }
    }

    renderPhoneTwo() {
        var account = Buz.getAccount()
        var additional_phone_number = account.additional_phone_number
        if (additional_phone_number.length > 0) {
            return (
                <ChannelPhone actionClick={this.actionContact} onChangePhone={(text) => this.onChangeContactTwo(text)} task={additional_phone_number[0].value}
                    complete={additional_phone_number[0].verified} iconLeft={<Ionicons name="ios-call" size={30} color={Colors._1ea7ea} style={{ marginLeft: scale(5) }} />} />
            )
        } else {
            return (
                <ChannelPhone actionClick={this.actionContact} onChangePhone={(text) => this.onChangeContactTwo(text)}
                    complete={false} iconLeft={<Ionicons name="ios-call" size={30} color={Colors._1ea7ea} style={{ marginLeft: scale(5) }} />} />
            )
        }
    }

    actionBack = () => {
        this.props.navigation.goBack()
    }
    baseRef = (obj) => this.base = obj
    render() {
        return (
            <BaseContainer
                currentScreen={'AccountContact'}
                ref={this.baseRef}
                onBackHandler={this.actionBack}
                showHeader={true}
                titleHeader={'Kênh liên lạc'}
                showHeaderBack={true}
                actionHeaderBack={this.actionBack}
                ownStyle={{
                    flex: 1,
                    paddingLeft: scale(10),
                    paddingRight: scale(10),
                    backgroundColor: Colors.white,
                    justifyContent: 'space-between',
                    paddingBottom: scale(10),
                }}
            >
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                }}>
                    <View style={{
                        // flex: 1,
                        alignItems: 'center',
                        marginTop: scale(10),
                        marginLeft: scale(20),
                        marginRight: scale(20),
                    }}>
                        <Text style={AppStyle.Paragraph_Center_Grey}>{'Vui lòng bổ sung kênh liên lạc với nhân viên của LinkBank để chúng tôi chăm sóc bạn tốt hơn'}</Text>
                    </View>

                    <ScrollView style={{
                        flex: 1,
                        flexDirection: 'column',
                        // marginTop: scale(10)
                    }}>
                        <ChannelPhone actionClick={this.actionUpdateInfo} onChangePhone={(text) => this.onChangeContactOne(text)} task={this.account.phone}
                            complete={true} iconLeft={<Ionicons name="ios-call" size={30} color={Colors._1ea7ea} style={{ marginLeft: scale(5) }} />} />
                        {/* <ChannelPhone actionClick={this.actionContact} onChangePhone={(text) => this.onChangeContactTwo(text)} task={'0394084334'}
                            complete={this.state.taskFinish.includes('PHONE_TWO')} iconLeft={<Ionicons name="ios-call" size={30} color={Colors._1ea7ea} style={{ marginLeft: scale(5) }} />} /> */}
                        {this.renderPhoneTwo()}
                        <Channel actionClick={this.actionJobInfo} task={'Xác nhận kết bạn Facebook'}
                            complete={this.state.taskFinish.includes('ADD_FRIEND')} iconLeft={<Ionicons name="logo-facebook" size={30} color={Colors._1ea7ea} style={{ marginLeft: scale(5) }} />} />
                        <Channel actionClick={this.actionRefInfo} task={'Chat với fanpage chúng tôi'}
                            complete={this.state.taskFinish.includes('CHAT')} iconLeft={<Ionicons name="ios-chatbubbles" size={30} color={Colors._1ea7ea} style={{ marginLeft: scale(5) }} />} />
                        <Channel actionClick={this.actionRefDoc} task={'Kết nối danh bạ'}
                            complete={this.state.taskFinish.includes('CONTACT')} iconLeft={<MaterialIcons name="perm-contact-calendar" size={30} color={Colors._1ea7ea} style={{ marginLeft: scale(5) }} />} />
                    </ScrollView>
                </View>
                {this.renderModalOTP()}
            </BaseContainer>
        )
    }

    onChangeText(text) {
        console.log(text)
    }

    actionResult(otp) {
        // this.setState({
        //     showModalOTP: false,
        // })
        this.props.verifyChannelPhone(otp)
    }

    actionNext = () => {
        // this.props.navigation.goBack()
    }

    onChangeContactOne(text) {
        if (text.length === 10) {
            this.setState({
                currentPhone: 1,
                // showModalOTP: true,
                phoneOne: text,
            })
            this.props.updateChannelPhone(text)
        } else {
            this.setState({
                phoneOne: text,
            })
        }
    }

    onChangeContactTwo(text) {
        if (text.length === 10) {
            if (Helper.checkPhoneVN(text) !== 1) {
                this.base.showErrorAlert(msg.ERR_APP_PHONE_INVALID)
                return
            }
            this.setState({
                currentPhone: 2,
                // showModalOTP: true,
                phoneTwo: text,
            })
            this.props.updateChannelPhone(text)
        } else {
            this.setState({
                phoneTwo: text,
            })
        }
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
    updateChannelPhone: (phone) => dispatch(AccountAction.updateChannelPhone(phone)),
    verifyChannelPhone: (otp) => dispatch(AccountAction.verifyChannelPhone(otp)),
})


export default connect(mapStateToProps, mapDispatchToProps)(AccountChannelContainer)