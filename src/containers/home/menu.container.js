import React, { Component } from 'react'
import {
    Image,
    Text,
    View,
    StatusBar
} from 'react-native'
import OffCanvas3D from '../../components/menu-canvas/offcanvas3d'
import HomeV2Container from './home-v2.container'
import MenuItem from './menu-item.container'
import Menu3 from './menu3'
import { scale } from '../../theme/scaling'
import { connect } from 'react-redux'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { Colors, AppStyle, Screens } from '../../theme';
import AccountAction, { AccountTypes } from '../../redux/account.redux'
import config from '../../config/config'

// const data = {
//     avatar: Images.awatar.default,
//     name: 'PHAN THANH QUANG',
//     credit: 120,
// }

// role = {
//     0: 'Khách hàng',
//     1: 'Tư vấn viên',
//     2: 'Chuyên viên',
//     3: 'Chuyên gia'
// }

class MenuContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            menuOpen: false
        }
    }

    componentWillReceiveProps(nextProps) {
        // console.log('menu-receive', JSON.stringify(nextProps))
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
                    // this.base.showErrorAlert(nextProps.error)
                }
                break;

            default:
                break;
        }
        // }
    }

    renderAwatar() {
        console.log(this.props.avatar)
        return (
            <View style={{
                width: '65%',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: scale(10),
            }}>
                <Image style={{
                    height: scale(50),
                    width: scale(50),
                    borderRadius: scale(25),
                }} source={this.props.avatar} />
                <Text style={[AppStyle.Paragraph_Center_White, { marginTop: scale(10), }]}> {this.props.name}</Text>
                <View style={{
                    width: '100%',
                    marginTop: scale(10),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Entypo name="credit" size={20} color='#ffffff' />
                    <Text style={AppStyle.Paragraph_Center_White}> {this.props.credit + ' Credit'}</Text>
                    <AntDesign style={{
                        marginRight: - scale(20)
                    }} name="sync" size={20} color='#ffffff' />
                </View>
            </View>
        )
    }

    renderHotline() {
        return (
            <View style={{
                width: '65%',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: scale(15),
                marginTop: scale(20),
            }}>

                <Text style={AppStyle.Paragraph_Center_White}> {'Hotline: 028 7777 6767'}</Text>

            </View>
        )
    }

    render() {
        const statusBar = this.state.menuOpen ?
            <StatusBar
                backgroundColor="#222222"
                animated={true}
            />
            : null

        return (
            <View style={{ flex: 1 }}>
                <OffCanvas3D
                    active={this.state.menuOpen}
                    onMenuPress={this.handleMenu.bind(this)}
                    menuTextStyles={{
                        width: '65%',
                        color: Colors.whiteTwo,
                        borderBottomColor: Colors.grey,
                        borderBottomWidth: scale(0.5),
                    }}
                    renderAvatar={this.renderAwatar()}
                    renderHotline={this.renderHotline()}
                    actionLogout={this.actionLogout}
                    menuItems={[
                        {
                            renderScene: <HomeV2Container navigation={this.props.navigation} handleMenu={this.handleMenu.bind(this)} />
                        },
                        {
                            title: 'Giới thiệu',
                            icon: <FontAwesome name="folder-open" size={20} color='#ffffff' />,
                            renderScene: <MenuItem url={'http://linkbank.vn/gioi-thieu'} header={'Giới thiệu'} handleMenu={this.handleMenu.bind(this)} />
                        },
                        {
                            title: 'Sứ mệnh và tầm nhìn',
                            icon: <FontAwesome name="folder-open" size={20} color='#ffffff' />,
                            renderScene: <MenuItem url={'http://linkbank.vn/su-menh-tam-nhin'} header={'Sứ mệnh và tầm nhìn'} handleMenu={this.handleMenu.bind(this)} />
                        },
                        {
                            title: 'Quy chế hoạt động',
                            icon: <FontAwesome name="folder-open" size={20} color='#ffffff' />,
                            renderScene: <MenuItem url={'http://linkbank.vn/quy-che-hoat-dong'} header={'Quy chế hoạt động'} handleMenu={this.handleMenu.bind(this)} />
                        },
                        {
                            title: 'Chính sách bảo mật',
                            icon: <FontAwesome name="folder-open" size={20} color='#ffffff' />,
                            renderScene: <MenuItem url={'http://linkbank.vn/chinh-sach-bao-mat'} header={'Chính sách bảo mật'} handleMenu={this.handleMenu.bind(this)} />
                        },
                        {
                            title: 'Cơ hội việc làm',
                            icon: <MaterialIcons name="work" size={20} color='#ffffff' />,
                            renderScene: <MenuItem url={'http://linkbank.vn/tuyen-dung'} header={'Cơ hội việc làm'} handleMenu={this.handleMenu.bind(this)} />
                        },
                        {
                            title: 'Hướng dẫn đăng ký tư vấn',
                            icon: <MaterialIcons name="live-help" size={20} color='#ffffff' />,
                            renderScene: <MenuItem url={'http://linkbank.vn/huong-dan-dang-ky-vay'} header={'Hướng dẫn đăng ký tư vấn'} handleMenu={this.handleMenu.bind(this)} />
                        },
                        {
                            title: 'Hướng dẫn nạp tiền',
                            icon: <MaterialIcons name="live-help" size={20} color='#ffffff' />,
                            renderScene: <MenuItem url={'http://linkbank.vn/gioi-thieu'} header={'Hướng dẫn nạp tiền'} handleMenu={this.handleMenu.bind(this)} />
                        },
                        {
                            title: 'Góp ý của bạn',
                            icon: <MaterialIcons name="feedback" size={20} color='#ffffff' />,
                            renderScene: <MenuItem url={'http://linkbank.vn/gioi-thieu'} header={'Góp ý của bạn'} handleMenu={this.handleMenu.bind(this)} />
                        },
                        {
                            title: 'Đăng xuất',
                            icon: <AntDesign name="logout" size={20} color='#ffffff' />,
                            renderScene: <Menu3 handleMenu={this.handleMenu.bind(this)} />
                        },
                        {
                            title: 'Góp ý của bạn',
                            icon: <MaterialIcons name="feedback" size={20} color='#ffffff' />,
                            renderScene: <MenuItem url={'http://linkbank.vn/gioi-thieu'} header={'Góp ý của bạn'} handleMenu={this.handleMenu.bind(this)} />
                        },
                    ]} />
            </View>
        )
    }

    handleMenu() {
        var newStatus = !this.state.menuOpen
        this.setState({
            menuOpen: newStatus
        })
    }

    actionLogout = () => {
        this.props.logout()
        // this.props.navigation.navigate(Screens.AuthenRouter)
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.accountRedux.name,
        credit: state.accountRedux.credit,
        avatar: state.accountRedux.avatar,

        fetchStatus: state.accountRedux.fetchStatus,
        apiStatus: state.accountRedux.status,
        data: state.accountRedux.data,
        error: state.accountRedux.error,
        currentRequestName: state.accountRedux.currentRequestName,
        nextScreen: state.accountRedux.nextScreen,
    }
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(AccountAction.logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuContainer)