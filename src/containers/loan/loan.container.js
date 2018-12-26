import React, { PureComponent } from 'react';
import {
    Platform,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import LoanModal from '../../components/loan/LoanModal'
import InputPicker from '../../components/input/InputPicker'
import { scale } from '../../theme/scaling'
import Localization from '../../config/languages/i18n'
import config from '../../config/config'
import { AppStyle, Colors, Screens } from '../../theme'
import ButtonNextType2 from '../../components/button/BtnNext2'
import PaymentAction, { PaymentTypes } from '../../redux/payment.redux'
import * as Helper from '../../saga/buz/app-helper'
const { msg } = require('../../config/languages/message-error')

class LoanContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loanMoney: '',
            loanTime: '',
            loanModal: [],
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('LoanContainer-receive', JSON.stringify(nextProps))
        if (nextProps.fetchStatus === config.FetchStatus.kFinishFetch &&
            this.props.fetchStatus !== nextProps.fetchStatus) {
            switch (nextProps.currentRequestName) {
                case PaymentTypes.LOAN_REGISTER:
                    if (true === nextProps.apiStatus) {
                        this.base.loading(false)
                        this.props.navigation.navigate(Screens.PageSuccess, {
                            msg: Localization('SUCC_APP_LOAN_REGISTER')
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

    actionBack = () => {
        this.props.navigation.goBack()
    }
    baseRef = (obj) => this.base = obj
    render() {
        return (
            <BaseContainer
                currentScreen={'Loan'}
                ref={this.baseRef}
                onBackHandler={this.actionBack}
                showHeader={true}
                titleHeader={Localization('dangkyvay')}
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
                <ScrollView style={{
                    flex: 1,
                    flexDirection: 'column',
                    marginTop: scale(10)
                }} showsVerticalScrollIndicator={false}>
                    <InputPicker
                        name={'Số tiền bạn muốn vay?'}
                        onValueChange={(text) => this.onChangeLoanArray(text)}
                        data={config.loanArray}
                        styleInput={{
                            marginTop: scale(5),
                            borderColor: Colors.grey,
                            borderWidth: scale(1),
                            borderRadius: scale(5),
                            backgroundColor: Colors.whiteTwo,
                            // height: Platform.OS === 'ios' ? scale(35) : scale(40),
                            // paddingTop: Platform.OS === 'ios' ? scale(5) : - scale(5),
                            paddingLeft: scale(20),
                        }}
                    />

                    <InputPicker
                        name={'Thời hạn vay'}
                        // placeholder={'VD: 10,000,000'}
                        onValueChange={(text) => this.onChangeLoanDest(text)}
                        data={config.loanDestTime}
                        styleInput={{
                            marginTop: scale(5),
                            borderColor: Colors.grey,
                            borderWidth: scale(1),
                            borderRadius: scale(5),
                            backgroundColor: Colors.whiteTwo,
                            // height: Platform.OS === 'ios' ? scale(35) : scale(40),
                            // paddingTop: Platform.OS === 'ios' ? scale(5) : - scale(5),
                            paddingLeft: scale(20),
                        }}
                    />
                    <Text style={[AppStyle.Paragraph_Center_Grey, { marginTop: scale(20) }]}> {'HÌNH THỨC BẠN MUỐN NỘP HỒ SƠ VAY'}</Text>
                    <LoanModal maxLength={1} actionClick={(value) => this.actionLoanModal(value)} />
                    <Text style={[AppStyle.Small_Center_Grey, { marginTop: scale(10) }]}> {'Bạn chỉ chọn được 1 sản phẩm để đăng ký vay, trường hợp bạn muốn đăng ký vay thêm nhiều sản phẩm khác thì vui lòng vay lại trang chủ và lặp lại thao tác này một lần nữa. Cảm ơn'}</Text>
                </ScrollView>
                <ButtonNextType2
                    actionPress={this.actionLoan}
                    disable={false}
                    title={'ĐĂNG KÝ VAY'}
                    textStyle={AppStyle.Title_Center_Black}
                />
            </BaseContainer>
        )
    }

    onChangeLoanArray(text) {
        console.log('loanMoney', text)
        this.setState({
            loanMoney: text
        })
    }

    onChangeLoanDest(text) {
        console.log('loanTime', text)
        this.setState({
            loanTime: text
        })
    }

    actionLoanModal(text) {
        console.log('loanModal', text)
        this.setState({
            loanModal: text
        })
    }

    actionLoan = () => {
        if (!Helper.checkValidString(this.state.loanMoney)) {
            this.base.showErrorAlert(msg.ERR_APP_INVALID_LOAN_AMOUNT)
            return
        }
        if (!Helper.checkValidString(this.state.loanTime)) {
            this.base.showErrorAlert(msg.ERR_APP_INVALID_LOAN_TIME)
            return
        }

        if (this.state.loanModal.length === 0) {
            this.base.showErrorAlert(msg.ERR_APP_INVALID_LOAN_MODAL)
        } else {
            this.base.loading(true)
            this.props.loanRegister(this.state.loanMoney, this.state.loanTime, this.state.loanModal[0])
        }
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
    loanRegister: (amount, time, loan) => dispatch(PaymentAction.loanRegister(amount, time, loan)),
})


export default connect(mapStateToProps, mapDispatchToProps)(LoanContainer)