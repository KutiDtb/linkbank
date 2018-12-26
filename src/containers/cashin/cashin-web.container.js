import React, { PureComponent } from 'react';
import {
    View,
    Text,
    WebView
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import Header from '../../components/common/Header'
import { verticalScale } from '../../theme/scaling'
import Localization from '../../config/languages/i18n'
import InputPicker from '../../components/input/InputPicker'
import Picker from '../../components/input/Picker'
import { Screens, Colors, Images, AppStyle } from '../../theme'
import config from '../../config/config'
import appConfig from '../../config/app-config'
import PaymentAction, { PaymentTypes } from '../../redux/payment.redux'

class CashinWebContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.url = this.props.navigation.getParam('url')
        this.header = this.props.header

        this.state = {
            url: this.url
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('CashInWeb-receive', JSON.stringify(nextProps))
        // if (nextProps.fetchStatus === config.FetchStatus.kFinishFetch &&
        //     this.props.fetchStatus !== nextProps.fetchStatus) {
        switch (nextProps.currentRequestName) {
            case PaymentTypes.QUERY_PAYMENT:
                if (true === nextProps.apiStatus) {
                    this.props.navigation.navigate(Screens.PageSuccess, {
                        msg: Localization('SUCC_APP_PAYMENT')
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

    handleNavigationStateChange = navState => {
        console.log('navState.url', navState.url);
        if (navState.url.includes(appConfig.PAYMENT_CLOSE_URL)) {
            this.props.queryPayment('11223344')
            // this.props.navigation.navigate(Screens.PageSuccess, {
            //     msg: Localization('SUCC_APP_PAYMENT')
            // })
        }
    };

    actionBack = () => {
        this.props.navigation.goBack()
    }
    baseRef = (obj) => this.base = obj
    render() {
        return (
            <BaseContainer
                currentScreen={'MenuItem'}
                ref={this.baseRef}
                onBackHandler={this.actionBack}
                showHeader={true}
                titleHeader={'Thanh toán'}
                showHeaderBack={true}
                actionHeaderBack={this.actionBack}
            >
                <WebView
                    source={{ uri: this.state.url }}
                    style={{ marginTop: 0 }}
                    onNavigationStateChange={this.handleNavigationStateChange}
                    ref={c => {
                        this.WebView = c;
                    }}
                />
            </BaseContainer>
        )
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
    queryPayment: (transId) => dispatch(PaymentAction.queryPayment(transId)),
})


export default connect(mapStateToProps, mapDispatchToProps)(CashinWebContainer)