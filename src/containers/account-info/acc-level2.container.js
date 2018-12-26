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

class AccountLevel2Container extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BaseContainer
                currentScreen={'Message'}
            >
                <View style={{
                    flex: 1,
                    flexDirection: 'column'
                }}>
                    <Text style={AppStyle.Paragraph_Center_Black}>{'Đặc quyền của Chuyên viên'}</Text>
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


export default connect(mapStateToProps, mapDispatchToProps)(AccountLevel2Container)