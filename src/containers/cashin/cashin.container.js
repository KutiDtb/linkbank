import React, { PureComponent } from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import CashIn from '../../components/cashin/CashIn'
import ModalCashInInsertMoney from '../../components/cashin/ModalCashInInsertMoney'
import Payment from '../../components/payment/Payment'
import { verticalScale, scale } from '../../theme/scaling';
import Localization from '../../config/languages/i18n';
import config from '../../config/config'
import { AppStyle, Colors, Screens } from '../../theme';
import ButtonNextType2 from '../../components/button/BtnNext2'
import PaymentAction, { PaymentTypes } from '../../redux/payment.redux'

class CashInContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            credit: 600,
            amount: '500,000',
            paymentType: 'VISA',

            showModalInsertMoney: false,
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('CashInContainer-receive', JSON.stringify(nextProps))
        // if (nextProps.fetchStatus === config.FetchStatus.kFinishFetch &&
        //     this.props.fetchStatus !== nextProps.fetchStatus) {
        switch (nextProps.currentRequestName) {
            case PaymentTypes.CASHIN:
                if (true === nextProps.apiStatus) {
                    var redirectURL = nextProps.data.redirectURL
                    this.props.navigation.navigate(Screens.CashInWeb, {
                        url: redirectURL,
                        token_code: nextProps.data.token_code
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

    actionModalInsertMoneyResult = () => {
        this.setState({
            showModalInsertMoney: false
        })
    }

    renderModalInsertMoney() {
        if (this.state.showModalInsertMoney) {
            return (
                <ModalCashInInsertMoney
                    showModal={this.state.showModalInsertMoney}
                    actionResult={this.actionModalInsertMoneyResult}
                />
            )
        }
    }

    renderExplainCredit() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                marginTop: verticalScale(20)
            }}>
                <Text style={AppStyle.txtFunctionMain}> {Localization('creditlagi')}</Text>
            </View>
        )
    }

    actionBack = () => {
        this.props.navigation.goBack()
    }
    baseRef = (obj) => this.base = obj
    render() {
        return (
            <BaseContainer
                currentScreen={'CashIn'}
                ref={this.baseRef}
                onBackHandler={this.actionBack}
                showHeader={true}
                titleHeader={Localization('naptien')}
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
                }}>
                    <Text style={[AppStyle.Title_Left_Black, { marginLeft: scale(20), marginTop: scale(10) }]}>{'Mệnh giá'}</Text>
                    <CashIn
                        data={config.cashin}
                        actionClick={(value) => this.changeAmount(value)}
                        value={'500,000'}
                    />

                    <Payment
                        data={config.payment}
                        value={this.state.paymentType}
                        actionClick={(value) => this.changePaymentType(value)}
                    />
                    {this.renderExplainCredit()}
                </ScrollView>
                <View style={{
                    padding: scale(10),
                    paddingTop: scale(0)
                }}>
                    <ButtonNextType2
                        actionPress={this.actionCashIn}
                        disable={false}
                        title={'THANH TOÁN'}
                        textStyle={AppStyle.Title_Center_Black}
                    />
                </View>
                {this.renderModalInsertMoney()}
            </BaseContainer>
        )
    }

    changeAmount(value) {
        // console.log(value)
        this.setState({
            credit: value.credit,
            amount: value.amt,
        })
    }

    changePaymentType(value) {
        this.setState({
            paymentType: value
        })
    }

    actionCashIn = () => {
        if (this.state.paymentType === 'TRANSFER') {
            this.setState({
                showModalInsertMoney: true
            })
        } else {

            this.props.cashin(this.state.amount, this.state.credit, this.state.paymentType)
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
    cashin: (amount, credit, payment) => dispatch(PaymentAction.cashin(amount, credit, payment)),
})


export default connect(mapStateToProps, mapDispatchToProps)(CashInContainer)