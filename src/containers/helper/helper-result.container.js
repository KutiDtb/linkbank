import React, { PureComponent } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import Header from '../../components/common/Header'
import { verticalScale, scale } from '../../theme/scaling'
import Localization from '../../config/languages/i18n'
import InputPicker from '../../components/input/InputPicker'
import Input from '../../components/input/Input'
import Picker from '../../components/input/Picker'
import { Screens, Colors, Images, AppStyle } from '../../theme'
import config from '../../config/config'
import { ScrollView } from 'react-native-gesture-handler';
import { Rating } from 'react-native-elements'

class HelperResultContainer extends PureComponent {
    constructor(props) {
        super(props);
    }

    renderInfo() {
        return (
            <TouchableOpacity style={{
                flex: 1,
                flexDirection: 'row',
                paddingTop: scale(10),
                paddingBottom: scale(10),
                borderBottomColor: Colors.whiteThree,
                borderBottomWidth: 2,
            }}>

                <View style={{
                    width: scale(70),
                    flexDirection: 'column'
                }}>
                    <Image resizeMode='contain' style={{
                        width: scale(70),
                        height: scale(70)
                    }} source={Images.awatar.default} />
                    <Text style={AppStyle.Small_Center_Black}> {'Nguyễn Văn A'}</Text>
                </View>
                <View style={{
                    // width: scale(230),
                    marginLeft: scale(10),
                    flexDirection: 'column',
                    // width: scale(90),
                }}>
                    <Text style={[AppStyle.Small_Left_Black, {marginTop: scale(5)}]}> {'Tư vấn: Vay tín chấp, Vay thế chấp'}</Text>
                    <Text style={[AppStyle.Small_Left_Black, {marginTop: scale(5)}]}> {'Tổ chức: Prudential Finance'}</Text>
                    <Text style={[AppStyle.Small_Left_Black, {marginTop: scale(5)}]}> {'Địa chỉ: Hồ Chí Minh'}</Text>
                    <Text style={[AppStyle.Small_Left_Black, {marginTop: scale(5)}]}> {'Thời gian làm việc: 12 tháng'}</Text>
                    <View style={{
                        marginTop: scale(5),
                        flexDirection: 'row'
                    }}>
                        <Text style={AppStyle.Small_Left_Black}> {'Đánh giá: 14'}</Text>
                        <Rating
                            imageSize={20}
                            readonly
                            startingValue={3.7}
                            style={{ marginLeft: scale(20) }}
                        />
                    </View>
                </View>
                <Image style={{
                    width: scale(80),
                }} source={Images.icon.medal} />
            </TouchableOpacity>
        )
    }

    actionBack = () => {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <BaseContainer
                currentScreen={'HelperResult'}
                onBackHandler={this.actionBack}
                showHeader={true}
                titleHeader={'Chuyên viên nổi bật'}
                showHeaderBack={true}
                actionHeaderBack={this.actionBack}
            >
                <ScrollView style={{
                    flex: 1,
                    flexDirection: 'column',
                    marginTop: verticalScale(10)
                }}>
                    {this.renderInfo()}
                    {this.renderInfo()}
                    {this.renderInfo()}
                    {this.renderInfo()}
                    {this.renderInfo()}
                    {this.renderInfo()}
                    {this.renderInfo()}
                    {this.renderInfo()}
                </ScrollView>
            </BaseContainer>
        )
    }


    onChangeText(text) {
        console.log(text)
    }
}
const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(HelperResultContainer)