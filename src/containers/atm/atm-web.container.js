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

class ATMWebContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.url = this.props.navigation.getParam('url')
        this.header = this.props.navigation.getParam('header')
    }

    actionBack = () => {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <BaseContainer
                currentScreen={'Timo'}
                onBackHandler={this.actionBack}
                showHeader={true}
                titleHeader={this.header}
                showHeaderBack={true}
                actionHeaderBack={this.actionBack}
                ownStyle={{
                    flex: 1,
                }}
            >
                <WebView
                    source={{ uri: this.url }}
                    style={{ marginTop: 0 }}
                />
            </BaseContainer>
        )
    }

}
const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(ATMWebContainer)