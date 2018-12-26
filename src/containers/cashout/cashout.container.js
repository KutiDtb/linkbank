import React, { PureComponent } from 'react';
import {
    View,
    Text,
    ScrollView,
    Platform
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import InputType3 from '../../components/input/InputType3'
import CashIn from '../../components/cashin/CashIn'
import Payment from '../../components/payment/Payment'
import { scale } from '../../theme/scaling';
import Localization from '../../config/languages/i18n';
import config from '../../config/config'
import { AppStyle, Colors, Screens } from '../../theme';
import PaymentAction, { PaymentTypes } from '../../redux/payment.redux'
import * as Helper from '../../saga/buz/app-helper'
const { msg } = require('../../config/languages/message-error')
import ButtonNextType2 from '../../components/button/BtnNext2'

class CashOutContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            amount: '',
            fee: '',
            nameReceiver: '',
            bankAccount: '',
            bankName: '',
            bankBranch: '',
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('CashOutContainer-receive', JSON.stringify(nextProps))
        // if (nextProps.fetchStatus === config.FetchStatus.kFinishFetch &&
        //     this.props.fetchStatus !== nextProps.fetchStatus) {
        switch (nextProps.currentRequestName) {
            case PaymentTypes.CASHOUT:
                if (true === nextProps.apiStatus) {
                    // this.base.showErrorAlert('Success')
                    this.props.navigation.navigate(Screens.PageSuccess, {
                        msg: Localization('SUCC_APP_CASHOUT')
                    })
                } else {
                    this.base.showErrorAlert(nextProps.error)
                }
                break;

            default:
                break;
        }
        // }
    }

    actionBack = () => {
        this.props.navigation.goBack()
    }
    baseRef = (obj) => this.base = obj
    render() {
        return (
            <BaseContainer
                currentScreen={'CashOut'}
                ref={this.baseRef}
                onBackHandler={this.actionBack}
                showHeader={true}
                titleHeader={'Gửi yêu cầu rút tiền'}
                showHeaderBack={true}
                actionHeaderBack={this.actionBack}
                ownStyle={{
                    flex: 1,
                    backgroundColor: Colors.white,
                    justifyContent: 'space-between',
                }}
            >
                <ScrollView style={{
                    flex: 1,
                    flexDirection: 'column',
                    backgroundColor: Colors.whiteTwo,
                    paddingLeft: scale(10),
                    paddingRight: scale(20),
                }} showsVerticalScrollIndicator={false}>
                    <View style={{
                        // flex: 1,
                        marginTop: scale(10),
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <InputType3
                            keyboardType={'numeric'}
                            title={'Số tiền muốn rút'}
                            placeholder={'Nhập số tiền'}
                            onChangeText={(text) => this.onChangeMoney(text)}
                            styleInput={{
                                marginTop: scale(5),
                                borderBottomColor: Colors._1ea7ea,
                                borderBottomWidth: scale(1),
                                borderRadius: scale(5),
                                backgroundColor: Colors.whiteTwo,
                                height: Platform.OS === 'ios' ? scale(35) : scale(40),
                                paddingTop: Platform.OS === 'ios' ? scale(5) : scale(0),
                                paddingLeft: scale(10),
                            }}
                        />
                        <Text style={[AppStyle.Title_Center_Black, { marginTop: scale(30), }]}>{'VND'}</Text>
                    </View>
                    {/* <View style={{
                        // flex: 1,
                        marginTop: scale(10),
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <InputType3
                            keyboardType={'numeric'}
                            title={'Phí giao dịch'}
                            placeholder={'0 VND'}
                            onChangeText={(text) => this.onChangeFee(text)}
                            styleInput={{
                                marginTop: scale(5),
                                borderBottomColor: Colors._1ea7ea,
                                borderBottomWidth: scale(1),
                                borderRadius: scale(5),
                                backgroundColor: Colors.whiteTwo,
                                height: Platform.OS === 'ios' ? scale(35) : scale(40),
                                paddingTop: Platform.OS === 'ios' ? scale(5) : scale(0),
                                paddingLeft: scale(10),
                            }}
                        />
                        <Text style={[AppStyle.Title_Center_Black, { marginTop: scale(30), }]}>{'VND'}</Text>
                    </View> */}
                    <View style={{
                        // flex: 1,
                        marginTop: scale(10),
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}>
                        <InputType3
                            keyboardType={'default'}
                            title={'Tên người nhận'}
                            onChangeText={(text) => this.onChangeName(text)}
                            styleInput={{
                                // marginTop: scale(5),
                                borderBottomColor: Colors.grey,
                                borderBottomWidth: scale(1),
                                borderRadius: scale(5),
                                backgroundColor: Colors.whiteTwo,
                                height: Platform.OS === 'ios' ? scale(35) : scale(40),
                                paddingTop: Platform.OS === 'ios' ? scale(5) : scale(0),
                                paddingLeft: scale(10),
                            }}
                            autoCapitalize={'characters'}
                        />
                    </View>
                    <View style={{
                        // flex: 1,
                        marginTop: scale(10),
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}>
                        <InputType3
                            keyboardType={'numeric'}
                            title={'Tài khoản ngân hàng'}
                            onChangeText={(text) => this.onChangeBankAccount(text)}
                            styleInput={{
                                // marginTop: scale(5),
                                borderBottomColor: Colors.grey,
                                borderBottomWidth: scale(1),
                                borderRadius: scale(5),
                                backgroundColor: Colors.whiteTwo,
                                height: Platform.OS === 'ios' ? scale(35) : scale(40),
                                paddingTop: Platform.OS === 'ios' ? scale(5) : scale(0),
                                paddingLeft: scale(10),
                            }}
                        />
                    </View>
                    <View style={{
                        // flex: 1,
                        marginTop: scale(10),
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}>
                        <InputType3
                            keyboardType={'default'}
                            title={'Ngân hàng'}
                            onChangeText={(text) => this.onChangeBankName(text)}
                            styleInput={{
                                // marginTop: scale(5),
                                borderBottomColor: Colors.grey,
                                borderBottomWidth: scale(1),
                                borderRadius: scale(5),
                                backgroundColor: Colors.whiteTwo,
                                height: Platform.OS === 'ios' ? scale(35) : scale(40),
                                paddingTop: Platform.OS === 'ios' ? scale(5) : scale(0),
                                paddingLeft: scale(10),
                            }}
                        />
                    </View>
                    <View style={{
                        // flex: 1,
                        marginTop: scale(10),
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}>
                        <InputType3
                            keyboardType={'default'}
                            title={'Chi nhánh'}
                            onChangeText={(text) => this.onChangeBankBranch(text)}
                            styleInput={{
                                // marginTop: scale(5),
                                borderBottomColor: Colors.grey,
                                borderBottomWidth: scale(1),
                                borderRadius: scale(5),
                                backgroundColor: Colors.whiteTwo,
                                height: Platform.OS === 'ios' ? scale(35) : scale(40),
                                paddingTop: Platform.OS === 'ios' ? scale(5) : scale(0),
                                paddingLeft: scale(10),
                            }}
                        />
                    </View>
                </ScrollView>
                <View style={{
                    paddingLeft: scale(10),
                    paddingRight: scale(10),
                    paddingBottom: scale(10),
                }}>
                    <ButtonNextType2
                        actionPress={this.actionCashout}
                        disable={false}
                        title={'GỬI YÊU CẦU'}
                        textStyle={AppStyle.Title_Center_Black}
                    />
                </View>
            </BaseContainer>
        )
    }

    onChangeMoney(text) {
        console.log(text)
        this.setState({
            amount: text
        })
    }

    onChangeFee(text) {
        console.log(text)
        this.setState({
            fee: text
        })
    }

    onChangeName(text) {
        console.log(text)
        this.setState({
            nameReceiver: text
        })
    }

    onChangeBankName(text) {
        console.log(text)
        this.setState({
            bankName: text
        })
    }

    onChangeBankAccount(text) {
        console.log(text)
        this.setState({
            bankAccount: text
        })
    }

    onChangeBankBranch(text) {
        console.log(text)
        this.setState({
            bankBranch: text
        })
    }

    actionCashout = () => {
        // this.props.navigation.navigate('AccountInfoWork')
        if (!Helper.checkValidString(this.state.amount)) {
            this.base.showErrorAlert(msg.ERR_APP_INVALID_AMOUNT)
            return
        }
        if (!Helper.checkValidString(this.state.nameReceiver)) {
            this.base.showErrorAlert(msg.ERR_APP_INVALID_RECEIVER_NAME)
            return
        }
        if (!Helper.checkValidString(this.state.bankAccount)) {
            this.base.showErrorAlert(msg.ERR_APP_INVALID_BANK_ACCOUNT)
            return
        }
        if (!Helper.checkValidString(this.state.bankName)) {
            this.base.showErrorAlert(msg.ERR_APP_INVALID_BANK_NAME)
            return
        }
        if (!Helper.checkValidString(this.state.bankBranch)) {
            this.base.showErrorAlert(msg.ERR_APP_INVALID_BANK_BRANCH)
            return
        }
        this.props.cashout(this.state.amount, this.state.fee, this.state.nameReceiver,
            this.state.bankAccount, this.state.bankName, this.state.bankBranch)
    }
}
const mapStateToProps = (state) => {
    return {
        fetchStatus: state.paymentRedux.fetchStatus,
        apiStatus: state.paymentRedux.status,
        data: state.paymentRedux.data,
        error: state.paymentRedux.error,
        currentRequestName: state.paymentRedux.currentRequestName,
        nextScreen: state.paymentRedux.nextScreen,
    }
}

const mapDispatchToProps = (dispatch) => ({
    cashout: (amount, fee, nameReceiver, bankAccount, bankName, bankBranch) => dispatch(PaymentAction.cashout(amount, fee, nameReceiver, bankAccount, bankName, bankBranch)),
})


export default connect(mapStateToProps, mapDispatchToProps)(CashOutContainer)