import React, { PureComponent } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from './base.container'
import Cell from '../../components/cell/Cell'
import ToggleSwitch from '../../components/toggle/Toggle'
import { scale } from '../../theme/scaling';
import Localization from '../../config/languages/i18n';
import { AppStyle, Screens, Colors, Images } from '../../theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Octicons from 'react-native-vector-icons/Octicons'
import AccountAction, { AccountTypes } from '../../redux/account.redux'
import config from '../../config/config'
import * as Buz from '../../saga/buz/app-buz'
import ButtonNextType2 from '../../components/button/BtnNext2'

// var data = {
//     id: '12345567',
//     avatar: Images.awatar.default,
//     name: 'NGUYEN VAN A',
//     level: 1,
//     position: 'Nhân viên tập sự',
//     credit: 123
// }

class AccountContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.account = Buz.getAccount()
        this.level = this.account.level
        console.log('this.level', this.level)
        this.state = {
            isSupportFinger: this.account.isSupportFinger,
            openTouchID: this.account.flagFinger,
            openGPS: true
        }
    }

    componentWillReceiveProps(nextProps) {
        // console.log('logout-receive', JSON.stringify(nextProps))
        // console.log('this.props.fetchStatus', this.props.fetchStatus)
        // console.log('nextProps.fetchStatus', nextProps.fetchStatus)
        // if (nextProps.fetchStatus === config.FetchStatus.kFinishFetch &&
        //     this.props.fetchStatus !== nextProps.fetchStatus) {
        switch (nextProps.currentRequestName) {
            case AccountTypes.LOGOUT:
                if (true === nextProps.apiStatus) {
                    // this.props.navigation.navigate('AuthenDefault')
                    this.props.navigation.navigate(nextProps.nextScreen)
                } else {
                    this.base.showErrorAlert(nextProps.error)
                }
                break;

            default:
                break;
        }
        // }
    }

    getColorCrown(level) {
        switch (level) {
            case 0:
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

    renderCashin() {
        if (this.level > 0) {
            return (
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: scale(10),
                    height: scale(30),
                }} onPress={this.actionCashin}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Ionicons name="md-wallet" size={30} color={Colors.alive_BD3F32} />
                        <Text style={AppStyle.Tiny_Right_Black}> {'Nạp Credit'}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Text style={[AppStyle.Tiny_Right_Black, { color: Colors.alive_BD3F32 }]}> {this.props.credit + ' Credit'}</Text>
                        <FontAwesome style={{
                            marginLeft: scale(20)
                        }} name="angle-right" size={30} color={Colors.grey} />
                    </View>
                </TouchableOpacity>
            )
        }
    }

    renderInfo() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                borderBottomColor: Colors.whiteThree,
                borderBottomWidth: 2,
                padding: scale(10),
                paddingTop: 0,
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    borderBottomColor: Colors.whiteThree,
                    borderBottomWidth: 2,
                    padding: scale(10)
                }}>
                    <Image style={{
                        height: scale(50),
                        width: scale(50),
                        borderRadius: scale(25),
                    }} source={this.props.avatar} />
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        marginLeft: scale(20)
                    }}>
                        <Text style={AppStyle.Paragraph_Left_Black}> {this.props.name}</Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingBottom: scale(3),
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                                <FontAwesome5 name="crown" size={15} color={this.getColorCrown(this.level)} />
                                <Text style={AppStyle.Tiny_Left_Black}> {Buz.getPositionByLevel(this.level)}</Text>
                            </View>
                            <Text style={AppStyle.Tiny_Right_Black}> {'ID: ' + this.props.id}</Text>
                        </View>
                    </View>
                </View>
                {this.renderCashin()}
            </View>
        )
    }

    renderTouchID() {
        if (this.state.isSupportFinger) {
            return (
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: scale(10),
                    height: scale(30),
                    borderBottomColor: Colors.whiteThree,
                    borderBottomWidth: 1,
                    paddingBottom: scale(10)
                }} onPress={null}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <FontAwesome5 name="fingerprint" size={25} color={Colors.alive_BD3F32} />
                        <Text style={[AppStyle.Tiny_Left_Black, { marginLeft: scale(10) }]}> {'Đăng nhập bằng vân tay'}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                        <ToggleSwitch
                            size='small'
                            isOn={this.state.openTouchID}
                            offColor={Colors.grey}
                            onColor={Colors.alive_BD3F32}
                            onToggle={this.toggleTouchID}
                        />
                        <AntDesign style={{
                            marginLeft: scale(20),
                            alignItems: 'center'
                        }} name="right" size={20} color={Colors.grey} />
                    </View>
                </TouchableOpacity>
            )
        }
    }

    renderGPS() {
        return (
            <TouchableOpacity style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: scale(10),
                height: scale(30),
                borderBottomColor: Colors.whiteThree,
                borderBottomWidth: 1,
                paddingBottom: scale(10)
            }} onPress={null}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // width: scale(250)
                }}>
                    <Entypo name="location" size={30} color={Colors.alive_BD3F32} />
                    <Text style={[AppStyle.Tiny_Left_Black, { marginLeft: scale(10) }]} numberOfLines={2}> {'Bật định vị\n(giúp Khách hàng và tư vấn tìm thấy bạn)'}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <ToggleSwitch
                        size='small'
                        isOn={this.state.openGPS}
                        offColor={Colors.grey}
                        onColor={Colors.alive_BD3F32}
                        onToggle={this.toggleGPS}
                    />
                    <AntDesign style={{
                        marginLeft: scale(20),
                        alignItems: 'center'
                    }} name="right" size={20} color={Colors.grey} />
                </View>
            </TouchableOpacity>
        )
    }

    renderTicketManaged() {
        // if (this.level > 0) {
        return (
            <Cell actionClick={this.actionMangeLoan}
                iconLeft={<MaterialCommunityIcons name="format-list-numbers" size={30} color={Colors.alive_BD3F32} />}
                content={Localization('quanlydon')} />
        )
        // }
    }

    renderConsultanceRegister() {
        if (this.level === 0) {
            return (
                <Cell actionClick={this.actionConsultation}
                    iconLeft={<EvilIcons name="star" size={30} color={Colors.alive_BD3F32} />}
                    content={Localization('trothanhtvv')} />
            )
        }
    }

    actionBack = () => {
        console.log('actionBack Account')
    }
    baseRef = (obj) => this.base = obj
    render() {
        return (
            <BaseContainer
                currentScreen={'Account'}
                ref={this.baseRef}
                showHeader={true}
                titleHeader={Localization('taikhoan')}
                // showHeaderNext={false}
                // actionHeaderBack={this.actionBack}
                ownStyle={{
                    flex: 1,
                    backgroundColor: Colors.whiteTwo,
                    justifyContent: 'space-between',
                    paddingBottom: scale(10)
                }}
            >
                <ScrollView style={{
                    flex: 1,
                    flexDirection: 'column'
                }} showsVerticalScrollIndicator={false}>
                    {this.renderInfo()}
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        height: scale(10),
                        backgroundColor: Colors.white,
                    }}>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        marginLeft: scale(10),
                        marginRight: scale(10),
                    }}>
                        <Cell actionClick={this.actionUpdateInfo}
                            iconLeft={<Octicons name="checklist" size={30} color={Colors.alive_BD3F32} />}
                            content={Localization('thongtin')} />
                        <Cell actionClick={this.comminsoon}
                            iconLeft={<FontAwesome5 name="crown" size={20} color={Colors.alive_BD3F32} />}
                            content={'Nâng cấp tài khoản'} />
                        {this.renderTicketManaged()}
                        <Cell actionClick={this.actionHistory}
                            iconLeft={<FontAwesome5 name="history" size={25} color={Colors.alive_BD3F32} />}
                            content={Localization('lichsu')} />
                        <Cell actionClick={this.comminsoon}
                            iconLeft={<AntDesign name="piechart" size={25} color={Colors.alive_BD3F32} />}
                            content={Localization('thongke')} />
                        {this.renderConsultanceRegister()}
                        {this.renderTouchID()}
                        {/* {this.renderGPS()} */}
                    </View>
                </ScrollView>
                <View style={{
                    paddingLeft: scale(10),
                    paddingRight: scale(10),
                }}>
                    <ButtonNextType2
                        actionPress={this.logout}
                        disable={false}
                        title={'Đăng xuất'}
                        textStyle={AppStyle.Title_Center_Black}
                    />
                </View>
            </BaseContainer>
        )
    }

    actionCashin = () => {
        this.props.navigation.navigate(Screens.CashIn)
    }

    actionUpdateInfo = () => {
        this.props.navigation.navigate(Screens.AccountTaks)
    }

    actionAccountUpgrade = () => {
        this.props.navigation.navigate(Screens.AccountUpgrade)
    }

    actionConsultation = () => {
        // alert('Chức năng đang được cập nhật')
        this.props.navigation.navigate('Consultation')
    }

    actionMangeLoan = () => {
        this.props.navigation.navigate(Screens.ManageLoan)
    }

    actionHistory = () => {
        this.props.navigation.navigate(Screens.History)
    }

    logout = () => {
        this.props.logout()
        // this.props.navigation.navigate(Screens.AuthenRouter)
    }

    comminsoon = () => {
        this.base.showUpdateAlert()
    }

    toggleTouchID = () => {
        Buz.upateFinger(this.state.isSupportFinger, !this.state.openTouchID)
        this.setState({
            openTouchID: !this.state.openTouchID
        })
    }

    toggleGPS = () => {
        this.setState({
            openGPS: !this.state.openGPS
        })
    }

}
const mapStateToProps = (state) => {
    return {
        name: state.accountRedux.name,
        credit: state.accountRedux.credit,
        avatar: state.accountRedux.avatar,
        id: state.accountRedux.id,
        level: state.accountRedux.level,

        fetchStatus: state.accountRedux.fetchStatus,
        apiStatus: state.accountRedux.status,
        data: state.accountRedux.data,
        error: state.accountRedux.error,
        currentRequestName: state.accountRedux.currentRequestName,
        nextScreen: state.accountRedux.nextScreen,
    }
}

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(AccountAction.logout()),
})


export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer)