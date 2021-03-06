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
// import InsuranceModal from '../../components/insurance/InsuranceModal'
import LandModal from '../../components/land/LandModal'

class LandContainer extends PureComponent {
    constructor(props) {
        super(props);
    }

    actionBack = () => {
        this.props.navigation.goBack()
    }
    baseRef = (obj) => this.base = obj
    render() {
        return (
            <BaseContainer
                currentScreen={'Land'}
                ref={this.baseRef}
                onBackHandler={this.actionBack}
                showHeader={true}
                titleHeader={'Bất động sản'}
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
                    <LandModal actionClick={this.actionClickATM} />
                </View>
            </BaseContainer>
        )
    }

    actionClickATM = (key) => {
        switch (key) {
            default:
                this.base.showUpdateAlert()
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


export default connect(mapStateToProps, mapDispatchToProps)(LandContainer)