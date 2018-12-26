import React, { PureComponent } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    Platform
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import ButtonNext from '../../components/button/ButtonNext'
import { scale } from '../../theme/scaling'
import Localization from '../../config/languages/i18n'
import { Screens, Colors, AppStyle, Images } from '../../theme'
import Rate from '../../components/rating/Rate'
import { ScrollView } from 'react-native-gesture-handler';
import HighHelper from './HighHelper'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Rating } from 'react-native-elements'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Octicons from 'react-native-vector-icons/Octicons'

var data = {
    name: 'Trần Minh Tuấn',
    level: 1,
    position: 'Tư vấn tập sự',
    gender: 'Nam',
    cardID: '123456789',
    status: 'Độc thân',
    email: '',
    company: 'Ngân hàng ACB',
    companyAddress: '120 Cộng Hoà, P12, Tân Bình, HCM',
    loanModal: ['Vay tín chấp', 'Vay thế chấp', 'Vay trả góp', 'Mở thẻ tín dụng', 'Mở bảo hiểm'],

    review: {
        rating: 4.8,
        rank: '32',
        rateList: [{ id: 5, score: 67 }, { id: 4, score: 33 }, { id: 3, score: 0 }, { id: 2, score: 0 }, { id: 1, score: 0 }],
        comments: [
            {
                avatar: Images.awatar.default,
                name: 'Nguyen Van A',
                timeCreated: '17:30 12/12/2018',
                rating: 2.0,
                comment: 'Tư vấn chưa tốt, cần khắc phục'
            }
        ]
    }
}

const RENDER_TAB = {
    INFO: 'INFO',
    REVIEW: 'REVIEW',
    SHARE: 'SHARE'
}
class HelperDetailContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            renderTab: RENDER_TAB.INFO
        }
    }

    renderContact() {
        return (
            <TouchableOpacity style={{
                width: '90%',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: scale(10),
                backgroundColor: Colors.call,
                height: scale(40),
                borderRadius: scale(5),
                marginLeft: scale(20),
                marginRight: scale(20),
            }}>
                <Ionicons name="ios-call" size={30} color={Colors.whiteTwo} />
                <Text style={AppStyle.Paragraph_Center_White}> {'GỌI ĐIỆN THOẠI'}</Text>
            </TouchableOpacity>
        )
    }

    renderImgBackground() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <Image style={{
                    width: '100%',
                    height: scale(200),
                }} source={Images.awatar.default} resizeMode={'cover'} />
                <View style={{
                    marginTop: - scale(30),
                    paddingLeft: scale(5),
                    paddingRight: scale(5),
                    flexDirection: 'row',
                    position: 'relative'
                }}>
                    <Image height={scale(100)} width={scale(100)} resizeMode={'contain'} style={{
                        width: scale(100),
                        height: scale(100),
                        marginLeft: scale(135),
                        borderRadius: scale(50),
                    }} source={Images.awatar.mr_quang} resizeMode={'contain'} />

                </View>
                <Text style={[AppStyle.Title_Center_Red, { fontWeight: 'bold', color: Colors.alive_BD3F32 }]}> {data.name.toUpperCase()}</Text>
                <View style={{
                    marginTop: scale(5),
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <FontAwesome5 name="crown" size={15} color={this.gerColorCrown(data.level)} />
                    <Text style={[AppStyle.Small_Center_Grey, { marginLeft: scale(0) }]}> {data.position}</Text>
                </View>
            </View>
        )
    }

    gerColorCrown(level) {
        switch (level) {
            case 1:
                return Colors.grey
            case 2:
                return Colors._1ea7ea
            case 3:
                return Colors.alive_BD3F32
            default:
                break;
        }
    }

    renderTabInfo() {
        if (this.state.renderTab === RENDER_TAB.INFO) {
            return (
                <TouchableOpacity style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: scale(50),
                    width: scale(100),
                    borderRadius: scale(3),
                    borderBottomColor: Colors.alive_BD3F32,
                    borderBottomWidth: scale(2),
                }} >
                    <Octicons name="info" size={30} color={Colors.alive_BD3F32} />
                    <Text style={[AppStyle.Small_Center_Black, { color: Colors.alive_BD3F32 }]}> {'THÔNG TIN'}</Text>
                </TouchableOpacity>
            )
        }
        return (
            <TouchableOpacity style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: scale(50),
                width: scale(100),
                borderRadius: scale(3),
            }} onPress={this.actionChangeTabInfo}>
                <Octicons name="info" size={30} color={Colors.black} />
                <Text style={AppStyle.Small_Center_Black}> {'THÔNG TIN'}</Text>
            </TouchableOpacity>
        )

    }

    renderTabShare() {
        if (this.state.renderTab === RENDER_TAB.SHARE) {
            return (
                <TouchableOpacity style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: scale(50),
                    width: scale(100),
                    borderBottomColor: Colors.alive_BD3F32,
                    borderBottomWidth: scale(2),
                }}>
                    <Feather name="share-2" size={30} color={Colors.alive_BD3F32} />
                    <Text style={[AppStyle.Small_Center_Black, { color: Colors.alive_BD3F32 }]}> {'CHIA SẼ'}</Text>
                </TouchableOpacity>
            )
        }
        return (
            <TouchableOpacity style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: scale(50),
                width: scale(100),
            }} onPress={this.actionChangeTabShare}>
                <Feather name="share-2" size={30} color={Colors.black} />
                <Text style={[AppStyle.Small_Center_Black]}> {'CHIA SẼ'}</Text>
            </TouchableOpacity>
        )
    }

    renderTabReview() {
        if (this.state.renderTab === RENDER_TAB.REVIEW) {
            return (
                <TouchableOpacity style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: scale(50),
                    width: scale(100),
                    borderRadius: scale(3),
                    borderBottomColor: Colors.alive_BD3F32,
                    borderBottomWidth: scale(2),
                }}>
                    <MaterialIcons name="rate-review" size={30} color={Colors.alive_BD3F32} />
                    <Text style={[AppStyle.Small_Center_Black, { color: Colors.alive_BD3F32 }]}> {'ĐÁNH GIÁ'}</Text>
                </TouchableOpacity>
            )
        }
        return (
            <TouchableOpacity style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: scale(50),
                width: scale(100),
            }} onPress={this.actionChangeTabReview}>
                <MaterialIcons name="rate-review" size={30} color={Colors.black} />
                <Text style={AppStyle.Small_Center_Black}> {'ĐÁNH GIÁ'}</Text>
            </TouchableOpacity>
        )
    }

    renderTabBar() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                marginTop: scale(20),
                justifyContent: 'space-between',
                paddingLeft: scale(20),
                paddingRight: scale(20),
            }}>
                {this.renderTabInfo()}
                {this.renderTabReview()}
                {this.renderTabShare()}
            </View>
        )
    }

    renderTabInfoContent() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                marginTop: scale(20),
                paddingLeft: scale(20),
                paddingRight: scale(20),
                paddingBottom: scale(20),
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    // paddingBottom: scale(10),
                }}>
                    <View style={{
                        backgroundColor: Colors.whiteThree,
                        height: scale(30),
                        justifyContent: 'center',
                    }}>
                        <Text style={[AppStyle.Paragraph_Left_Black, { fontWeight: 'bold' }]}>
                            {'Giới thiệu bản thân'}</Text>
                    </View>
                    <TextInput
                        style={[AppStyle.Paragraph_Left_Black, {
                            // height: scale(80)
                        }]}
                        multiline={true}
                        editable={false}
                        value={'MC vui tính, trách nhiệm và uy tín'}
                    />
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    marginTop: Platform.OS === 'ios' ? scale(20) : null
                }}>
                    <View style={{
                        backgroundColor: Colors.whiteThree,
                        height: scale(30),
                        justifyContent: 'center',
                    }}>
                        <Text style={[AppStyle.Paragraph_Left_Black, { fontWeight: 'bold' }]}>
                            {'Thông tin cá nhân'}</Text>
                    </View>
                    <View style={{
                        marginTop: scale(10),
                        flexDirection: 'row',
                    }}>
                        <Text style={[AppStyle.Paragraph_Left_Black, { marginLeft: scale(0) }]}> {'Họ và tên: '}</Text>
                        <Text style={[AppStyle.Paragraph_Left_Black, { marginLeft: scale(0), fontWeight: 'bold' }]}> {data.name}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <Text style={[AppStyle.Paragraph_Left_Black, { marginLeft: scale(0) }]}> {'Giới tính: '}</Text>
                            <Text style={[AppStyle.Paragraph_Left_Black, { marginLeft: scale(0), fontWeight: 'bold' }]}> {data.gender}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <Text style={[AppStyle.Paragraph_Left_Black, { marginLeft: scale(0) }]}> {'CMND: '}</Text>
                            <Text style={[AppStyle.Paragraph_Left_Black, { marginLeft: scale(0), fontWeight: 'bold' }]}> {data.cardID}</Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Text style={[AppStyle.Paragraph_Left_Black, { marginLeft: scale(0) }]}> {'Tình trạng hôn nhân: '}</Text>
                        <Text style={[AppStyle.Paragraph_Left_Black, { marginLeft: scale(0), fontWeight: 'bold' }]}> {data.status}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Text style={[AppStyle.Paragraph_Left_Black, { marginLeft: scale(0) }]}> {'Email: '}</Text>
                        <Text style={[AppStyle.Paragraph_Left_Black, { marginLeft: scale(0), fontWeight: 'bold' }]}> {data.email}</Text>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    marginTop: Platform.OS === 'ios' ? scale(20) : scale(10)
                }}>
                    <View style={{
                        backgroundColor: Colors.whiteThree,
                        height: scale(30),
                        justifyContent: 'center',
                    }}>
                        <Text style={[AppStyle.Paragraph_Left_Black, { fontWeight: 'bold' }]}>
                            {'Thông tin công việc'}</Text>
                    </View>
                    <View style={{
                        marginTop: scale(10),
                        flexDirection: 'row',
                    }}>
                        <Text style={[AppStyle.Paragraph_Left_Black, { marginLeft: scale(0) }]}> {'Đơn vị công tác: '}</Text>
                        <Text style={[AppStyle.Paragraph_Left_Black, { marginLeft: scale(0), fontWeight: 'bold' }]}> {data.company}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Text style={[AppStyle.Paragraph_Left_Black, { marginLeft: scale(0) }]}> {'Địa chỉ công tác: '}</Text>
                        <Text style={[AppStyle.Paragraph_Left_Black, { marginRight: scale(30), fontWeight: 'bold' }]} multiline={true}> {data.companyAddress}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <Text style={[AppStyle.Paragraph_Left_Black, { marginLeft: scale(0) }]}> {'Chức vụ: '}</Text>
                        <Text style={[AppStyle.Paragraph_Left_Black, { marginLeft: scale(0), fontWeight: 'bold' }]}> {data.position}</Text>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    marginTop: Platform.OS === 'ios' ? scale(20) : scale(10),
                    flexDirection: 'column',
                }}>
                    <View style={{
                        backgroundColor: Colors.whiteThree,
                        height: scale(30),
                        justifyContent: 'center',
                    }}>
                        <Text style={[AppStyle.Paragraph_Left_Black, { fontWeight: 'bold' }]}>
                            {'Lĩnh vực tư vấn'}</Text>
                    </View>
                    <View style={{
                        marginTop: scale(10),
                        flexDirection: 'row',
                        // width: '100%',
                        // backgroundColor: 'grey'
                    }}>
                        {this.renderLoanModal(data.loanModal)}
                    </View>
                </View>
            </View>
        )
    }

    renderLoanModal(data) {
        var template = []
        for (var i = 0; i < data.length; i++) {
            template.push(
                <View key={'lmd-' + i} style={{
                    marginLeft: scale(5),
                    borderColor: Colors.whiteThree,
                    borderWidth: scale(1),
                }}>
                    <Text style={[AppStyle.Paragraph_Left_Black]}> {data[i]}</Text>
                </View>
            )
        }
        return template
    }

    renderTabReviewContent() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                marginTop: scale(20),
                paddingLeft: scale(20),
                paddingRight: scale(20),
                paddingBottom: scale(20),
            }}>
                <View style={{
                    backgroundColor: Colors.whiteThree,
                    height: scale(30),
                    justifyContent: 'center',
                }}>
                    <Text style={[AppStyle.Paragraph_Left_Black, { fontWeight: 'bold' }]}>
                        {'Thống kê'}</Text>
                </View>
                <View style={{
                    // flex: 1,
                    flexDirection: 'row',
                    marginTop: scale(10),
                }}>
                    <View style={{
                        // flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        borderRightColor: Colors.whiteThree,
                        borderRightWidth: scale(1),
                        paddingRight: scale(10),
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}>
                            <Text style={AppStyle.Paragraph_Center_Black}>{data.review.rating}</Text>
                            <Text style={AppStyle.Small_Center_Black}>{'/5'}</Text>
                        </View>
                        <Rating
                            imageSize={25}
                            readonly={true}
                            startingValue={data.review.rating}
                            style={{ marginTop: scale(10) }}
                        />
                        <Text style={AppStyle.Small_Center_Black}>{data.review.rank + ' xếp hạng'}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'column',
                        marginLeft: scale(20),
                    }}>
                        {this.renderRateList(data.review.rateList)}
                    </View>
                </View>

                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    marginTop: scale(20),
                }}>
                    <View style={{
                        backgroundColor: Colors.whiteThree,
                        height: scale(30),
                        justifyContent: 'center',
                    }}>
                        <Text style={[AppStyle.Paragraph_Left_Black, { fontWeight: 'bold' }]}>
                            {'Để lại đánh giá của bạn tại đây'}</Text>
                    </View>
                    <View style={{
                        marginTop: scale(10),
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Rating
                            imageSize={30}
                            startingValue={0}
                        />
                    </View>
                    <TextInput
                        style={{
                            marginTop: scale(5),
                            height: scale(80),
                            borderColor: Colors.whiteThree,
                            borderWidth: scale(1),
                        }}
                        placeholder={'Nội dung'}
                        keyboardType={'default'}
                        multiline={true}
                        onChangeText={(text) => this.onChangeContentCustomer(text)}
                    />
                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <ButtonNext
                            actionPress={null}
                            disable={false}
                            title={'Thêm đánh giá'}
                            textStyle={AppStyle.Title_Center_White}
                            style={{
                                marginTop: scale(10),
                                height: scale(40),
                                backgroundColor: Colors.alive_BD3F32,
                                width: scale(200),
                            }}
                        />
                    </View>
                    <View style={{
                        marginTop: scale(10),
                    }}>
                        {this.renderComments(data.review.comments)}
                    </View>
                </View>
            </View>
        )
    }

    renderRateList(data) {
        var template = []
        for (var i = 0; i < data.length; i++) {
            template.push(
                <View key={'rl-' + i} style={{

                }}>
                    <Rate id={data[i].id} score={data[i].score} />
                </View>
            )
        }
        return template
    }

    renderComments(data) {
        var template = []
        for (var i = 0; i < data.length; i++) {
            var item = data[i]
            template.push(
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    paddingBottom: scale(10),
                    paddingTop: scale(10),
                    marginTop: scale(10),
                    borderTopColor: Colors.whiteThree,
                    borderTopWidth: scale(1),
                }} key={'cmt-' + i}>
                    <Image style={{
                        height: scale(50),
                        width: scale(50),
                        borderRadius: scale(25)
                    }} source={item.avatar} />
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                    }}>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginLeft: scale(20)
                        }}>
                            <View style={{
                                flex: 1,
                                flexDirection: 'column',
                            }}>
                                <Text style={[AppStyle.Paragraph_Left_Black, { fontWeight: 'bold' }]}> {item.name}</Text>
                                <Text style={[AppStyle.Paragraph_Left_Grey, { marginTop: scale(10) }]}> {item.timeCreated}</Text>
                            </View>
                            <Rating
                                imageSize={20}
                                readonly={true}
                                startingValue={item.rating}
                                style={{ marginTop: scale(10) }}
                            />
                        </View>
                        <Text style={[AppStyle.Paragraph_Left_Black, { marginTop: scale(10), marginLeft: scale(20) }]}> {item.comment}</Text>
                    </View>
                </View>
            )
        }
        return template
    }

    renderContentByTab() {
        switch (this.state.renderTab) {
            case RENDER_TAB.INFO: {
                return this.renderTabInfoContent()
            }
            case RENDER_TAB.REVIEW: {
                return this.renderTabReviewContent()
            }
        }
    }

    actionBack = () => {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <BaseContainer
                currentScreen={'Helper'}
                onBackHandler={this.actionBack}
                showHeader={true}
                titleHeader={'Thông tin chuyên viên'}
                showHeaderBack={true}
                actionHeaderBack={this.actionBack}
                showHeaderNext={false}
                actionHeaderNext={this.actionNext}
                ownStyle={{
                    flex: 1,
                    justifyContent: 'space-between',
                    paddingBottom: scale(10),
                }}
            >
                <ScrollView style={{
                    // flex: 1,
                    flexDirection: 'column',
                    backgroundColor: Colors.whiteTwo,
                }} showsVerticalScrollIndicator={false}>
                    {this.renderImgBackground()}
                    {this.renderTabBar()}
                    {this.renderContentByTab()}
                </ScrollView>
                {this.renderContact()}
            </BaseContainer>
        )
    }

    actionChangeTabInfo = () => {
        this.setState({
            renderTab: RENDER_TAB.INFO
        })
    }
    actionChangeTabReview = () => {
        this.setState({
            renderTab: RENDER_TAB.REVIEW
        })
    }
    actionChangeTabShare = () => {
        this.setState({
            renderTab: RENDER_TAB.SHARE
        })
    }
    onChangeContentCustomer(text) { }
}
const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(HelperDetailContainer)