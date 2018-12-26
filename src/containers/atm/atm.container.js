import React, { PureComponent } from 'react';
import {
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import Header from '../../components/common/Header'
import { verticalScale, scale } from '../../theme/scaling'
import Localization from '../../config/languages/i18n'
import InputPicker from '../../components/input/InputPicker'
import Picker from '../../components/input/Picker'
import { Screens, Colors, Images, AppStyle } from '../../theme'
import config from '../../config/config'
import ATMModal from '../../components/atm/ATMModal'

class ATMContainer extends PureComponent {
    constructor(props) {
        super(props);
    }

    actionBack = () => {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <BaseContainer
                currentScreen={'ATM'}
                onBackHandler={this.actionBack}
                showHeader={true}
                titleHeader={'Ngân hàng mở thẻ'}
                showHeaderBack={true}
                actionHeaderBack={this.actionBack}
                ownStyle={{
                    flex: 1,
                    backgroundColor: Colors.white,
                    padding: scale(10),
                }}
            >
                <View style={{
                    flex: 1,
                }}>
                    <ATMModal actionClick={this.actionClickATM} />
                </View>
            </BaseContainer>
        )
    }

    actionClickATM = (key) => {
        switch (key) {
            case 'TIM0':
                this.props.navigation.navigate(Screens.ATMWeb, {
                    url: 'https://my.timo.vn/join/form?language=vi&utm_source=B&utm_medium=LP4invitee&utm_campaign=referral122018&utm_term=referral122018&utm_content=referral122018&channel=Direct&referredBy=2QPYU&fbclid=IwAR21DOyQN6ljkphwEpD7enzautN9QPksBPKiwJ0NuepN7AZLY07KxwL05Ko',
                    header: 'Mở thẻ Timo'
                })
                break;

            default:
                break;
        }
    }

}
const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(ATMContainer)