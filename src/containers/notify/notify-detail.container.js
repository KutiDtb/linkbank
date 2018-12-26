import React, { PureComponent } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import { scale } from '../../theme/scaling'
import Localization from '../../config/languages/i18n'
import { Screens, Colors, Images, AppStyle } from '../../theme'
import config from '../../config/config'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

var data = {
    avatar: Images.awatar.default,
    name: 'PHAN THANH QUANG',
    city: 'Hố Chí Minh',
    loanAmount: '20,000,000',
    loanTimeDes: '24 tháng',
    loanModal: 'Vay theo đăng ký xe máy',
    job: 'Nhân viên văn phòng',
    salary: '10,000,000 VND/Tháng',
}

class NotifyDetailContainer extends PureComponent {
    constructor(props) {
        super(props);
    }

    renderInfo() {
        return (
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: scale(10),
            }}>
                <Image style={{
                    height: scale(150),
                    width: scale(150),
                    borderRadius: scale(75),
                }} source={data.avatar} />
                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    marginTop: scale(10)
                }}>
                    <Text style={[AppStyle.Paragraph_Center_Black, { fontWeight: 'bold' }]}> {data.name}</Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                    }}>
                        <EvilIcons name="location" size={20} color={Colors.alive_BD3F32} />
                        <Text style={[AppStyle.Tiny_Left_Black, { marginLeft: scale(10) }]}> {data.city}</Text>
                    </View>
                </View>
            </View>
        )
    }

    rendeDetail() {
        return (
            <View style={{
                flexDirection: 'column',
                marginTop: scale(10),
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: Colors.whiteThree,
                    borderRadius: scale(5),
                    padding: scale(10),
                }}>
                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={[AppStyle.Paragraph_Left_Black, { marginLeft: scale(0) }]}> {'Khoản vay'}</Text>
                        <Text style={[AppStyle.Paragraph_Left_Red, { marginTop: scale(5), fontWeight: 'bold', color: Colors.alive_BD3F32 }]}> {data.loanAmount} VND</Text>
                    </View>
                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={[AppStyle.Paragraph_Right_Black, { marginLeft: scale(0) }]}> {'Thời hạn'}</Text>
                        <Text style={[AppStyle.Paragraph_Right_Black, { marginTop: scale(5), fontWeight: 'bold', color: Colors.alive_BD3F32 }]}> {data.loanTimeDes}</Text>

                    </View>
                </View>
                <View style={{
                    marginTop: scale(10),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <AntDesign style={{
                        }} name="check" size={20} color={Colors.black} />
                        <Text style={[AppStyle.Tiny_Left_Black, { marginLeft: scale(10) }]}> {'Sản phẩm'}</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Text style={[AppStyle.Tiny_Right_Black]}> {data.loanModal}</Text>
                    </View>
                </View>
                <View style={{
                    marginTop: scale(5),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <AntDesign style={{
                        }} name="check" size={20} color={Colors.black} />
                        <Text style={[AppStyle.Tiny_Left_Black, { marginLeft: scale(10) }]}> {'Nghề nghiệp'}</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Text style={AppStyle.Tiny_Right_Black}> {data.job}</Text>
                    </View>
                </View>
                <View style={{
                    marginTop: scale(5),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <AntDesign style={{
                        }} name="check" size={20} color={Colors.black} />
                        <Text style={[AppStyle.Tiny_Left_Black, { marginLeft: scale(10) }]}> {'Thu nhập'}</Text>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Text style={AppStyle.Tiny_Right_Black}> {data.salary}</Text>
                    </View>
                </View>
            </View>
        )
    }

    renderContact() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: scale(10),
                paddingLeft: scale(10),
                paddingRight: scale(10),
            }}>
                <View>
                    <TouchableOpacity style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: scale(100),
                        height: scale(100),
                        borderRadius: scale(50),
                        backgroundColor: Colors.alive_BD3F32,
                        marginBottom: scale(10),
                    }}>
                        <EvilIcons name="close" size={100} color={Colors.whiteTwo} />
                    </TouchableOpacity>

                    <Text style={AppStyle.Paragraph_Center_Black}> {'ĐỂ SAU'}</Text>
                </View>

                <View>
                    <TouchableOpacity style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: scale(100),
                        height: scale(100),
                        borderRadius: scale(50),
                        backgroundColor: Colors.call,
                        marginBottom: scale(10),
                    }}>
                        <AntDesign name="check" size={100} color={Colors.whiteTwo} />
                    </TouchableOpacity>
                    <Text style={AppStyle.Paragraph_Center_Black}> {'TƯ VẤN NGAY'}</Text>
                </View>
            </View>
        )
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
                titleHeader={'Yêu cầu tư vấn'}
                showHeaderBack={true}
                actionHeaderBack={this.actionBack}
                ownStyle={{
                    flex: 1,
                    paddingLeft: scale(20),
                    paddingRight: scale(20),
                    paddingTop: scale(10),
                    paddingBottom: scale(10),
                }}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                    <Text style={[AppStyle.Tiny_Center_White, { color: Colors.alive_BD3F32 }]}>{'YÊU CẦU TƯ VẤN MỚI NHẤT TỪ KHÁCH HÀNG'}</Text>
                </View>
                {this.renderInfo()}
                {this.rendeDetail()}
                {this.renderContact()}
                </ScrollView>
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


export default connect(mapStateToProps, mapDispatchToProps)(NotifyDetailContainer)