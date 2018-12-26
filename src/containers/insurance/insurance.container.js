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
import InsuranceModal from '../../components/insurance/InsuranceModal'

class InsuranceContainer extends PureComponent {
    constructor(props) {
        super(props);
    }

    actionBack = () => {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <BaseContainer
                currentScreen={'Insurance'}
                onBackHandler={this.actionBack}
                showHeader={true}
                titleHeader={'Công ty bảo hiểm'}
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
                    <InsuranceModal actionClick={this.actionClickATM} />
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
            case 'MANULIFE':
                this.props.navigation.navigate(Screens.ATMWeb, {
                    url: 'https://www.manulife.com.vn/?aff_sid=sP7gx2GwbDUeSbPBB02JounJnABWwM5W55YMtOlDfznCIHhy&utm_campaign=%5bunknown_Generic%5d-Vietnam&utm_medium=DisplayBanner&utm_source=AccessTrade_Programmatic',
                    header: 'Bảo hiểm nhân thọ Manulife'
                })
                break;
            case 'LIBERTY':
                this.props.navigation.navigate(Screens.ATMWeb, {
                    url: 'https://health-liberty.lapa.pub/?aff_sid=7YWDyTKgc49XxORC05HrUR1PjIQPmfX93bq4btsMUawHRHgW',
                    header: 'Bảo hiểm Liberty'
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


export default connect(mapStateToProps, mapDispatchToProps)(InsuranceContainer)