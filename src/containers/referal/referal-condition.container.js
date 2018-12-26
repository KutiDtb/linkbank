import React, { PureComponent } from 'react';
import {
    View,
    Text
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

class ReferalConditionContainer extends PureComponent {
    constructor(props) {
        super(props);
    }

    actionBack = () => {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <BaseContainer
                currentScreen={'Message'}
                onBackHandler={this.actionBack}
                showHeader={true}
                titleHeader={'Chính sách giới thiệu'}
                showHeaderBack={true}
                actionHeaderBack={this.actionBack}
            >
                <View style={{
                    flex: 1,
                    flexDirection: 'column'
                }}>
                    <Text style={AppStyle.Paragraph_Center_Black}>{'Chức năng đang được cập nhật'}</Text>
                </View>
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


export default connect(mapStateToProps, mapDispatchToProps)(ReferalConditionContainer)