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

class MenuItemContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.url = this.props.url
        this.header = this.props.header
        
        this.state = {
            url: this.props.url,
            header: this.props.header
        }
    }

    componentWillReceiveProps(nextProps) {
        var header = this.state.header
        var url = this.state.url
        if (nextProps.header !== '') {
            header = nextProps.header
        }
        if (nextProps.url !== '') {
            url = nextProps.url
        }

        this.setState({
            url,
            header,
        })
    }

    actionBack = () => {
        this.props.handleMenu()
    }
    render() {
        return (
            <BaseContainer
                currentScreen={'MenuItem'}
                onBackHandler={this.actionBack}
                showHeader={true}
                titleHeader={this.state.header}
                showHeaderBack={true}
                actionHeaderBack={this.actionBack}
                iconBack={'menu'}
            >
                <WebView
                    source={{ uri: this.state.url }}
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


export default connect(mapStateToProps, mapDispatchToProps)(MenuItemContainer)