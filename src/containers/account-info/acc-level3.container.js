import React, { PureComponent } from 'react';
import {
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import Header from '../../components/common/Header'
import { scale } from '../../theme/scaling'
import Localization from '../../config/languages/i18n'
import { Screens, Colors, Images, AppStyle } from '../../theme'
import config from '../../config/config'
import AntDesign from 'react-native-vector-icons/AntDesign'

class AccountLevel3Container extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BaseContainer
                currentScreen={'Message'}
            >
                <View style={{
                    flexDirection: 'column'
                }}>
                    <Text style={AppStyle.Paragraph_Center_Black}>{'Đặc quyền của Chuyên Gia'}</Text>
                </View>
                <View style={{
                    marginTop: scale(20),
                    flexDirection: 'row',
                }}>
                    <AntDesign name="check" size={20} color={Colors.alive_BD3F32} />
                    <Text style={[AppStyle.Tiny_Left_Black, { marginLeft: scale(10), color: Colors.alive_BD3F32 }]}> {'Hotline hỗ trợ riêng'}</Text>
                </View>
                <View style={{
                    marginTop: scale(10),
                    flexDirection: 'row',
                }}>
                    <AntDesign name="check" size={20} color={Colors.alive_BD3F32} />
                    <Text style={[AppStyle.Tiny_Left_Black, { marginLeft: scale(10), color: Colors.alive_BD3F32 }]}> {'Ưu tiên trải nghiệm các tính năng mới'}</Text>
                </View>
                <View style={{
                    marginTop: scale(10),
                    flexDirection: 'row',
                }}>
                    <AntDesign name="check" size={20} color={Colors.alive_BD3F32} />
                    <Text style={[AppStyle.Tiny_Left_Black, { marginLeft: scale(10), color: Colors.alive_BD3F32 }]}> {'Ưu đãi từ cá đối tác chương trình'}</Text>
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


export default connect(mapStateToProps, mapDispatchToProps)(AccountLevel3Container)