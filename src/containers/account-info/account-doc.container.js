import React, { PureComponent } from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import TaskDocumentPicker from '../../components/task/TaskDocumentPicker'
import TaskDocument from '../../components/task/TaskDocument'
import { scale } from '../../theme/scaling';
import Localization from '../../config/languages/i18n';
import { AppStyle, Colors, Screens, Images } from '../../theme'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ButtonNext from '../../components/button/ButtonNext'
import config from '../../config/config'

class AccountDocumentContainer extends PureComponent {
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
                currentScreen={'AccountInfo'}
                ref={this.baseRef}
                onBackHandler={this.actionBack}
                showHeader={true}
                titleHeader={'Tài liệu tham chiếu'}
                showHeaderBack={true}
                actionHeaderBack={this.actionBack}
                ownStyle={{
                    flex: 1,
                    paddingLeft: scale(10),
                    paddingRight: scale(10),
                    backgroundColor: Colors.white,
                    justifyContent: 'space-between',
                    paddingBottom: scale(10),
                }}
            >
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                }}>
                    <View style={{
                        // flex: 1,
                        alignItems: 'center',
                        marginTop: scale(10),
                        marginLeft: scale(20),
                        marginRight: scale(20),
                    }}>
                        <Text style={AppStyle.Paragraph_Center_Grey}>{'Vui lòng cập nhật đầy đủ hình ảnh theo yêu cầu bên dưới'}</Text>
                    </View>

                    <ScrollView style={{
                        // flex: 1,
                        flexDirection: 'column',
                        // marginTop: scale(10)
                    }} showsVerticalScrollIndicator={false}>
                        <TaskDocument actionClick={this.actionUpdateInfo} task={'CMND mặt trước'} complete={false} source={Images.camera.test} />
                        <TaskDocument actionClick={this.actionUpdateInfo} task={'CMND mặt sau'} complete={false} />
                        <TaskDocument actionClick={this.actionUpdateInfo} task={'Ảnh chụp chân dung'} complete={false} />
                        <TaskDocumentPicker data={config.infoDoc} actionClick={this.actionUpdateInfo} placeholder={'Loại giấy tờ khác'} complete={true} />
                    </ScrollView>
                    <ButtonNext
                        actionPress={this.actionNext}
                        disable={false}
                        title={'LƯU'}
                        textStyle={AppStyle.Title_Center_White}
                        style={{
                            marginTop: scale(10),
                            backgroundColor: Colors.alive_BD3F32,
                            height: scale(40),
                            borderRadius: scale(5)
                        }}
                    />
                </View>
            </BaseContainer>
        )
    }

    onChangeText(text) {
        console.log(text)
    }

    actionNext = () => {
        this.props.navigation.goBack()
    }

    actionUpdateInfo = () => {
    }
    actionJobInfo = () => {
    }
    actionContact = () => {
    }
    actionRefInfo = () => {
    }
    actionRefDoc = () => {
    }

}
const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(AccountDocumentContainer)