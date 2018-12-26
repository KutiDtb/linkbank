import React, { PureComponent } from 'react';
import {
    Platform,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import CreditOpen from '../../components/atm/CreditOpen'
import InputPicker from '../../components/input/InputPicker'
import { scale } from '../../theme/scaling'
import Localization from '../../config/languages/i18n'
import config from '../../config/config'
import { AppStyle, Colors, Screens } from '../../theme'
import ButtonNextType2 from '../../components/button/BtnNext2'
import InputType3 from '../../components/input/InputType3'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import PaymentAction, { PaymentTypes } from '../../redux/payment.redux'

class CreditContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            creditMoney: '',
            creditTime: '',
            creditModal: [],
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('CreditCardContainer-receive', JSON.stringify(nextProps))
        if (nextProps.fetchStatus === config.FetchStatus.kFinishFetch &&
            this.props.fetchStatus !== nextProps.fetchStatus) {
            switch (nextProps.currentRequestName) {
                case PaymentTypes.CREDIT_CARD_REGISTER:
                    if (true === nextProps.apiStatus) {
                        this.props.navigation.navigate(Screens.PageSuccess, {
                            msg: Localization('SUCC_APP_CREDIT_CARD_REGISTER')
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
                currentScreen={'CreditCardRegister'}
                ref={this.baseRef}
                onBackHandler={this.actionBack}
                showHeader={true}
                titleHeader={'Mở thẻ tín dụng'}
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
                        name={'Hạn mức thẻ tín dụng?'}
                        onValueChange={(text) => this.onChangeAmount(text)}
                        data={config.creditAmount}
                        styleInput={{
                            marginTop: scale(5),
                            borderColor: Colors.grey,
                            borderWidth: scale(1),
                            borderRadius: scale(5),
                            backgroundColor: Colors.whiteTwo,
                            paddingLeft: scale(20),
                        }}
                    />
                    <InputPicker
                        name={'Đơn vị phát hành'}
                        onValueChange={(text) => this.onChangeTime(text)}
                        data={config.creditSource}
                        styleInput={{
                            marginTop: scale(5),
                            borderColor: Colors.grey,
                            borderWidth: scale(1),
                            borderRadius: scale(5),
                            backgroundColor: Colors.whiteTwo,
                            paddingLeft: scale(20),
                        }}
                    />
                    <Text style={[AppStyle.Paragraph_Center_Grey, { marginTop: scale(20) }]}> {'MỤC ĐÍCH SỬ DỤNG THẺ'}</Text>
                    <CreditOpen maxLength={6} actionClick={(value) => this.actionCreditModal(value)} />
                </ScrollView>
                <ButtonNextType2
                    actionPress={this.actionCredit}
                    disable={false}
                    title={'MỞ THẺ'}
                    textStyle={AppStyle.Title_Center_Black}
                />
            </BaseContainer>
        )
    }

    onChangeAmount(text) {
        console.log('creditMoney', text)
        this.setState({
            creditMoney: text
        })
    }

    onChangeTime(text) {
        console.log('creditTime', text)
        this.setState({
            creditTime: text
        })
    }

    actionCreditModal(text) {
        console.log('creditModal', text)
        this.setState({
            creditModal: text
        })
    }

    actionCredit = () => {
        if (this.state.creditModal.length === 0) {
            this.base.showErrorAlert('Vui long chọn mục đích làm thẻ')
        } else {
            this.props.creditCardRegister(this.state.creditMoney, this.state.creditTime, this.state.creditModal)
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
    creditCardRegister: (amount, cardSource, purpose) => dispatch(PaymentAction.creditCardRegister(amount, cardSource, purpose)),
})


export default connect(mapStateToProps, mapDispatchToProps)(CreditContainer)