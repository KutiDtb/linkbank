import React, { PureComponent } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import Find from '../../components/find/Find'
import { scale } from '../../theme/scaling'
import Localization from '../../config/languages/i18n'
import { Screens, Colors, AppStyle, Images } from '../../theme'
import config from '../../config/config'
import { ScrollView } from 'react-native-gesture-handler';
import HighHelper from './HighHelper'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { Rating } from 'react-native-elements'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Octicons from 'react-native-vector-icons/Octicons'
import FindModalGender from '../../components/find/FindModalGender'
import FindModalArea from '../../components/find/FindModalArea'
import FindModalLoan from '../../components/find/FindModalLoan'
import FindModalOrganize from '../../components/find/FindModalOrganize'
import UpdateAlert from '../../components/exception/UpdateAlert'

var data = [
    {
        avatar: Images.awatar.mr_quang,
        name: 'Trần Minh Tuấn',
        level: 3,
        position: 'Tư vấn tập sự',
        city: 'Hồ Chí Minh',
        rating: 3.5,
        saleList: ['Vay tín chấp', 'Vay trả góp'],
        company: 'VPBank'
    },
    {
        avatar: Images.awatar.mr_quang,
        name: 'Trần Minh Tuấn',
        level: 1,
        position: 'Tư vấn tập sự',
        city: 'Hồ Chí Minh',
        rating: 3.5,
        saleList: ['Vay tín chấp', 'Vay trả góp'],
        company: 'VPBank'
    },
    {
        avatar: Images.awatar.mr_quang,
        name: 'Trần Minh Tuấn',
        level: 2,
        position: 'Tư vấn tập sự',
        city: 'Hồ Chí Minh',
        rating: 3.5,
        saleList: ['Vay tín chấp', 'Vay trả góp'],
        company: 'VPBank'
    },
    {
        avatar: Images.awatar.mr_quang,
        name: 'Trần Minh Tuấn',
        level: 3,
        position: 'Tư vấn tập sự',
        city: 'Hồ Chí Minh',
        rating: 3.5,
        saleList: ['Vay tín chấp', 'Vay trả góp'],
        company: 'VPBank'
    }
]

const RENDER_TYPE_NEW_HELPER = {
    LIST: 'LIST',
    GRID: 'GRID'
}
class HelperContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            renderTypeNewHelper: RENDER_TYPE_NEW_HELPER.GRID,

            showModalGender: false,
            showModalArea: false,
            showModalLoan: false,
            showModalOrganize: false
        }
    }

    componentDidMount() {
        // this.base.showUpdateAlert(false)
    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.inHere)
        // if (nextProps.inHere === true) {
        //     // this.base.showUpdateAlert(false)
        // }
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

    renderNewHelperTypeList(data, i) {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                borderRadius: 5,
                borderBottomColor: Colors.whiteThree,
                borderBottomWidth: 5,
                padding: scale(10),
            }} key={'st-' + i}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    borderBottomColor: Colors.whiteThree,
                    borderBottomWidth: 2,
                }}>
                    <Image style={{
                        height: scale(50),
                        width: scale(50),
                        borderRadius: scale(25),
                    }} source={data.avatar} />
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        marginLeft: scale(20)
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingBottom: scale(3),
                        }}>
                            <Text style={AppStyle.Paragraph_Left_Black}> {data.name}</Text>
                            <Rating
                                imageSize={20}
                                readonly={true}
                                startingValue={3.7}
                                style={{ marginLeft: scale(20) }}
                            />
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingBottom: scale(3),
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <FontAwesome5 name="crown" size={15} color={this.gerColorCrown(data.level)} />
                                <Text style={[AppStyle.Small_Left_Black, { marginLeft: scale(0) }]}> {data.position}</Text>
                            </View>

                            <View style={{
                                flexDirection: 'row',
                            }}>
                                <EvilIcons style={{
                                }} name="location" size={20} color={Colors.red} />
                                <Text style={AppStyle.Small_Right_Black}> {data.city}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    // backgroundColor: 'grey'
                }}>
                    <Image style={{
                        width: '100%',
                        height: scale(300),
                    }} source={Images.awatar.default} resizeMode={'contain'} />
                    <View style={{
                        marginTop: - scale(60),
                        paddingLeft: scale(10),
                        paddingRight: scale(10),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        position: 'relative'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                        </View>
                        <Octicons name="info" size={40} color={Colors.whiteTwo} />
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    marginTop: scale(20),
                    flexDirection: 'column',
                    // backgroundColor: 'grey'
                }}>
                    <View style={{
                        marginTop: scale(10),
                        flexDirection: 'row',
                    }}>
                        <Text style={AppStyle.Small_Left_Black}> {'Sản phẩm'}</Text>
                        {this.renderSaleList(data.saleList)}
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: scale(5),
                    }}>
                        <Text style={AppStyle.Small_Left_Black}> {'Tổ chức'}</Text>
                        <Text style={[AppStyle.Small_Left_Black, { marginLeft: scale(5) }]}> {data.company}</Text>
                    </View>
                </View>
            </View>
        )
    }

    renderSaleList(list) {
        var template = []
        for (var i = 0; i < list.length; i++) {
            template.push(
                <View style={{
                    borderColor: Colors.whiteThree,
                    borderWidth: scale(2),
                    marginLeft: scale(5)
                }} key={'salelist-' + i}>
                    <Text style={AppStyle.Small_Left_Black}> {list[i]}</Text>
                </View>
            )
        }
        return template
    }

    renderNewHelperTypeGridLeftRight(dataLeft) {
        if (null === dataLeft || undefined === dataLeft) {
            return <View />
        }
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                }}>
                    <Image resizeMode='contain' style={{
                        width: scale(175),
                        height: scale(175),
                        borderRadius: scale(2),
                    }} source={dataLeft.avatar} resizeMode={'contain'} />
                    <View style={{
                        marginTop: - scale(50),
                        marginLeft: scale(120),
                        flexDirection: 'row',
                        position: 'relative'
                    }}>
                        <Octicons name="info" size={30} color={Colors.whiteTwo} />
                    </View>
                </View>
                <Text style={[AppStyle.Small_Left_Black, { marginTop: scale(20) }]}> {dataLeft.name}</Text>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <EvilIcons style={{
                    }} name="location" size={20} color={Colors.red} />
                    <Text style={AppStyle.Small_Right_Black}> {dataLeft.city}</Text>
                </View>
            </View>
        )
    }

    renderNewHelperTypeGrid(dataLeft, dataRight, i, j) {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderRadius: 5,
                padding: scale(10),
            }} key={'st-' + i + j}>
                {this.renderNewHelperTypeGridLeftRight(dataLeft)}
                {this.renderNewHelperTypeGridLeftRight(dataRight)}
            </View>
        )
    }

    renderTypeList() {
        var template = []
        for (var i = 0; i < data.length; i++) {
            template.push(
                this.renderNewHelperTypeList(data[i], i)
            )
        }
        return template
    }

    renderTypeGrid() {
        var template = []
        for (var i = 0; i < data.length; i = i + 2) {
            var j = i + 1
            template.push(
                this.renderNewHelperTypeGrid(data[i], data[j], i, j)
            )
        }
        return template
    }

    renderNewHelper() {
        switch (this.state.renderTypeNewHelper) {
            case RENDER_TYPE_NEW_HELPER.LIST: {
                return this.renderTypeList()
            }
            case RENDER_TYPE_NEW_HELPER.GRID: {
                return this.renderTypeGrid()
            }
        }
    }

    renderStyleRenderTypeNewHelperGrid() {
        if (this.state.renderTypeNewHelper === RENDER_TYPE_NEW_HELPER.GRID) {
            return {
                borderColor: Colors.black,
                borderWidth: scale(1)
            }
        }
        return {}
    }
    renderStyleRenderTypeNewHelperList() {
        if (this.state.renderTypeNewHelper === RENDER_TYPE_NEW_HELPER.LIST) {
            return {
                borderColor: Colors.black,
                borderWidth: scale(1)
            }
        }
        return {}
    }

    renderModalGender() {
        if (this.state.showModalGender) {
            return (
                <FindModalGender
                    name={'GIỚI TÍNH'}
                    showModal={this.state.showModalGender}
                    actionModalResult={this.actionModalGenderResult}
                />
            )
        } else {
            return null
        }
    }
    renderModalArea() {
        if (this.state.showModalArea) {
            return (
                <FindModalArea
                    name={'KHU VỰC'}
                    showModal={this.state.showModalArea}
                    actionModalResult={this.actionModalAreaResult}
                />
            )
        } else {
            return null
        }
    }
    renderModalLoan() {
        if (this.state.showModalLoan) {
            return (
                <FindModalLoan
                    name={'SẢN PHẨM'}
                    showModal={this.state.showModalLoan}
                    actionModalResult={this.actionModalLoanResult}
                />
            )
        } else {
            return null
        }
    }

    renderModalOrganize() {
        if (this.state.showModalOrganize) {
            return (
                <FindModalOrganize
                    name={'TỔ CHỨC'}
                    showModal={this.state.showModalOrganize}
                    actionModalResult={this.actionModalOrganizeResult}
                />
            )
        } else {
            return null
        }
    }

    renderUpdateAlert() {
        return (
            <UpdateAlert
                showModal={true}
                allowHide={null}
                hideModal={false}
            />
        )
    }

    actionBack = () => {
        console.log('actionBack Helper')
        this.props.navigation.goBack()
    }
    baseRef = (obj) => this.base = obj
    render() {
        return (
            <BaseContainer
                currentScreen={'Helper'}
                ref={this.baseRef}
                // onBackHandler={this.actionBack}
                ownStyle={{
                    flex: 1,
                    backgroundColor: Colors.whiteTwo
                }}
            >
                <View style={{
                    flexDirection: 'column',
                    // marginTop: scale(10),
                    height: scale(120)
                }}>
                    <Find
                        data={config.hintHelper}
                        onChangeText={(text) => this.onChangeKeySearch(text)}
                        actionHint={(label) => this.actionHint(label)}
                        actionMap={this.actionMap}
                    />
                    <View style={{
                        width: '100%',
                        height: scale(10),
                        borderRadius: 5,
                        backgroundColor: Colors.whiteThree,
                        marginTop: scale(10)
                    }} />
                </View>
                <ScrollView style={{
                    flex: 1,
                    flexDirection: 'column',
                    marginTop: scale(20)
                }} showsVerticalScrollIndicator={false}>
                    <View style={{
                        height: scale(140),
                        flexDirection: 'column',
                        paddingLeft: scale(10),
                        paddingRight: scale(10),
                    }}>
                        <Text style={[AppStyle.Paragraph_Left_Black, { color: Colors.alive_BD3F32 }]}> {'Tư vấn viên Nổi Bật'}</Text>
                        <HighHelper
                            data={config.hintHelper}
                            helperDetail={(item) => this.helperDetail(item)}
                        />
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        marginTop: scale(30),
                        justifyContent: 'space-between',
                        paddingLeft: scale(10),
                        paddingRight: scale(10),
                    }}>
                        <Text style={[AppStyle.Paragraph_Left_Black, { color: Colors.alive_BD3F32 }]}> {'Tư vấn viên mới'}</Text>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <Text style={[AppStyle.Tiny_Left_Black, { color: Colors.alive_BD3F32 }]}> {'Kiểu hiển thị'}</Text>
                            <View style={{
                                flexDirection: 'row',
                                marginLeft: scale(10),
                                alignItems: 'center'
                            }}>
                                <TouchableOpacity onPress={this.actionRenderNewHelperGrid}
                                    style={this.renderStyleRenderTypeNewHelperGrid()}>
                                    <MaterialCommunityIcons style={{
                                    }} name="view-grid" size={15}
                                        color={this.state.renderTypeNewHelper === RENDER_TYPE_NEW_HELPER.GRID ? Colors.black : Colors.grey} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.actionRenderNewHelperList}
                                    style={this.renderStyleRenderTypeNewHelperList()}>
                                    <Feather style={{
                                        marginLeft: scale(5)
                                    }} name="list" size={15} color={this.state.renderTypeNewHelper === RENDER_TYPE_NEW_HELPER.LIST ? Colors.black : Colors.grey} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    {this.renderNewHelper()}
                </ScrollView>
                {this.renderModalGender()}
                {this.renderModalArea()}
                {this.renderModalLoan()}
                {this.renderModalOrganize()}
                {/* {this.renderUpdateAlert()} */}
            </BaseContainer>
        )
    }

    actionNext = () => {
    }

    actionHint(label) {
        switch (label) {
            case 1:
                this.setState({
                    showModalGender: true
                })
                break;
            case 2:
                this.setState({
                    showModalArea: true
                })
                break;
            case 3:
                this.setState({
                    showModalLoan: true
                })
                break;
            case 4:
                this.setState({
                    showModalOrganize: true
                })
                break;

            default:
                break;
        }
        // alert(label)
    }

    actionModalGenderResult = () => {
        this.setState({
            showModalGender: false
        })
    }
    actionModalAreaResult = () => {
        this.setState({
            showModalArea: false
        })
    }
    actionModalLoanResult = () => {
        this.setState({
            showModalLoan: false
        })
    }
    actionModalOrganizeResult = () => {
        this.setState({
            showModalOrganize: false
        })
    }

    helperDetail(item) {
        this.props.navigation.navigate(Screens.HelperDetail)
    }

    actionRenderNewHelperGrid = () => {
        this.setState({
            renderTypeNewHelper: RENDER_TYPE_NEW_HELPER.GRID
        })
    }

    actionRenderNewHelperList = () => {
        this.setState({
            renderTypeNewHelper: RENDER_TYPE_NEW_HELPER.LIST
        })
    }

    actionMap = () => {
        this.props.navigation.navigate('HelperMap')
    }

    onChangeKeySearch(text) {
        console.log(text)
    }
}
const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(HelperContainer)