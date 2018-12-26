import React, { PureComponent } from 'react';
import {
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import { scale } from '../../theme/scaling'
import Localization from '../../config/languages/i18n'
import { Screens, Colors, Images, AppStyle } from '../../theme'
import ButtonNextType2 from '../../components/button/BtnNext2'
import AntDesign from 'react-native-vector-icons/AntDesign'

class SuccessContainer extends PureComponent {
    constructor(props) {
        super(props);
    }

    actionBack = () => {
        this.props.navigation.navigate(Screens.Menu)
    }
    render() {
        var msg = this.props.navigation.getParam('msg')
        return (
            <BaseContainer
                currentScreen={'Message'}
                onBackHandler={this.actionBack}
            >
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    paddingTop: scale(20),
                    paddingBottom: scale(20),
                }}>
                    <Text style={AppStyle.Paragraph_Center_Black}>{''}</Text>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <AntDesign name="check" size={scale(150)} color={Colors.alive_BD3F32} />
                        <Text style={AppStyle.Paragraph_Center_Black}>{msg}</Text>
                    </View>

                    <ButtonNextType2
                        actionPress={this.actionBack}
                        disable={false}
                        title={'TRỞ VỀ'}
                        textStyle={AppStyle.Title_Center_Black}
                    />
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


export default connect(mapStateToProps, mapDispatchToProps)(SuccessContainer)