import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import CounterAction, { CountTypes } from '../../redux/count.redux'
import { scale, verticalScale } from '../../theme/scaling';
import { Images, AppStyle, Colors, Screens } from '../../theme';
import Localization from '../../config/languages/i18n'
import Functions from '../../components/functions/Function'
import config from '../../config/config'
import appConfig from '../../config/app-config'
import BaseContainer from './base.container'
import LinearGradient from 'react-native-linear-gradient'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AccountAction, { AccountTypes } from '../../redux/account.redux'
import * as Buz from '../../saga/buz/app-buz'

class HomeContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.account = Buz.getAccount()

        this.state = {
            menuOpen: false
        }
    }

    renderHeader() {
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: verticalScale(40),
            }}>
                <TouchableOpacity onPress={() => this.props.handleMenu()}>
                    <AntDesign name="menuunfold" size={30} color={Colors.whiteTwo} />
                </TouchableOpacity>
                <View style={{
                    // width: '65%',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // paddingBottom: scale(10),
                }}>
                    <Text style={[AppStyle.Paragraph_Center_White, { marginTop: scale(10), }]}> {this.props.name}</Text>
                    <View style={{
                        width: '100%',
                        // marginTop: scale(10),
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={AppStyle.Tiny_Center_White}> {this.props.credit}</Text>
                        <Entypo name="credit" size={14} color='#ffffff' />
                    </View>
                </View>
                <TouchableOpacity onPress={this.actionNotify}>
                    <Feather name="bell" size={30} color={Colors.whiteTwo} />
                </TouchableOpacity>
            </View>
        )
    }

    renderMainFunction() {
        return (
            <View style={{
                marginTop: scale(10),
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: scale(10),
                paddingRight: scale(10),
            }}>
                <TouchableOpacity style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }} onPress={() => this.actionFunctionMain('CASHIN')}>
                    <Ionicons name="md-wallet" size={40} color={Colors.whiteTwo} />
                    <Text style={[AppStyle.Small_Center_White, { marginTop: scale(5) }]}> {'Nạp credit'}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }} onPress={() => this.actionFunctionMain('CASHOUT')}>
                    <Ionicons name="ios-wallet" size={40} color={Colors.whiteTwo} />
                    <Text style={[AppStyle.Small_Center_White, { marginTop: scale(5) }]}> {'Rút tiền'}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }} onPress={() => this.actionFunctionMain('REFERAL')}>
                    <Feather name="user-plus" size={40} color={Colors.whiteTwo} />
                    <Text style={[AppStyle.Small_Center_White, { marginTop: scale(5) }]}> {'Giới thiệu'}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderHeaderAndMainFunction() {
        return (
            <LinearGradient
                colors={[Colors.alive_BD3F32, Colors.alive_CB356B]}
                start={{ x: 0.0, y: 0.9 }} end={{ x: 0.9, y: 1.0 }}
                locations={[0, 1]}
                // colors={[Colors.alive_CB356B, Colors.alive_BD3F32]}
                style={{
                    paddingLeft: scale(20),
                    paddingRight: scale(20),
                    paddingTop: scale(10),
                    paddingBottom: scale(10),
                    borderBottomLeftRadius: scale(10),
                    borderBottomRightRadius: scale(10),
                }}>
                {this.renderHeader()}
                {this.renderMainFunction()}
            </LinearGradient>
        )
    }

    renderServices() {
        return (
            <View style={{
                // marginTop: scale(10),
                flexDirection: 'column',
            }}>
                <View style={{
                    width: '100%',
                    backgroundColor: Colors.whiteThree,
                    height: scale(30),
                    paddingLeft: scale(20),
                    justifyContent: 'center',
                    borderTopLeftRadius: scale(10),
                    borderTopRightRadius: scale(10),
                }}>
                    <Text style={[AppStyle.Paragraph_Left_Black]}> {'Đăng ký tư vấn'}</Text>
                </View>
                <View style={{
                    paddingLeft: scale(10),
                    paddingRight: scale(10),
                }}>
                    <Functions
                        data={config.service}
                        actionFunction={this.actionFunction}
                    />
                </View>
            </View>
        )
    }

    renderServicesDifferent() {
        return (
            <View style={{
                flexDirection: 'column',
            }}>
                <View style={{
                    width: '100%',
                    backgroundColor: Colors.whiteThree,
                    height: scale(30),
                    paddingLeft: scale(20),
                    justifyContent: 'center',
                    borderTopLeftRadius: scale(10),
                    borderTopRightRadius: scale(10),
                }}>
                    <Text style={[AppStyle.Paragraph_Left_Black]}> {'Dịch vụ khác'}</Text>
                </View>
                <View style={{
                    paddingLeft: scale(10),
                    paddingRight: scale(10),
                }}>
                    <Functions
                        data={config.serviceDifferent}
                        actionFunction={this.actionFunction}
                    />
                </View>
            </View>
        )
    }

    renderCredits() {
        return (
            <View style={{
                marginTop: scale(10),
                flexDirection: 'column',
                paddingBottom: scale(10),
            }}>
                <View style={{
                    width: '100%',
                    backgroundColor: Colors.whiteThree,
                    height: scale(30),
                    paddingLeft: scale(20),
                    justifyContent: 'center',
                    borderRadius: scale(10),
                }}>
                    <Text style={[AppStyle.Paragraph_Left_Black]}> {'Đơn vị cho vay nhanh nhất'}</Text>
                </View>
                <View style={{
                    paddingTop: scale(10),
                    paddingLeft: scale(20),
                    paddingRight: scale(20),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <TouchableOpacity style={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }} onPress={null}>
                        <Image style={{
                            width: scale(90),
                            height: scale(90),
                        }} resizeMode={'contain'} source={Images.credits.pawn} />
                        <Text style={[AppStyle.Tiny_Center_Black]}> {'Pawncredit'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }} onPress={this.actionOCB}>
                        <Image style={{
                            width: scale(90),
                            height: scale(90),
                        }} resizeMode={'contain'} source={Images.credits.ocb} />
                        <Text style={[AppStyle.Tiny_Center_Black]}> {'OCB Bank'}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }} onPress={null}>
                        <Image style={{
                            width: scale(90),
                            height: scale(90),
                        }} resizeMode={'contain'} source={Images.credits.easy} />
                        <Text style={[AppStyle.Tiny_Center_Black]}> {'Easy Credit'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    renderUtilities() {
        return (
            <View style={{
                marginTop: scale(10),
                flexDirection: 'column',
            }}>
                <View style={{
                    width: '100%',
                    backgroundColor: Colors.whiteThree,
                    height: scale(30),
                    paddingLeft: scale(20),
                    justifyContent: 'center',
                    borderRadius: scale(10),
                    // borderBottomLeftRadius: scale(10),
                    // borderBottomRightRadius: scale(10),
                }}>
                    <Text style={[AppStyle.Paragraph_Left_Black]}> {Localization('tienich')}</Text>
                </View>
                <View style={{
                    paddingLeft: scale(10),
                    paddingRight: scale(10),
                }}>
                    <Functions data={config.utility} />
                </View>
            </View>
        )
    }

    actionBack = () => {
        console.log('actionBack HomeDefault')
        this.props.navigation.goBack()
    }
    baseRef = (obj) => this.base = obj
    render() {
        return (
            <BaseContainer
                currentScreen={'HomeDefault'}
                ref={this.baseRef}
                ownStyle={{
                    flex: 1,
                    backgroundColor: Colors.whiteTwo,
                    paddingBottom: scale(10),
                    // backgroundColor: 'grey'
                }}
            >
                {this.renderHeaderAndMainFunction()}
                <ScrollView style={{
                    // paddingLeft: scale(20),
                    // paddingRight: scale(20),
                }} showsVerticalScrollIndicator={false}>
                    {this.renderServices()}
                    {this.renderCredits()}
                    {this.renderServicesDifferent()}
                    {this.renderUtilities()}
                </ScrollView>
            </BaseContainer>
        );
    }

    actionMenu = () => {
        this.setState({
            menuOpen: false
        })
    }

    actionChangeStatusMenu = () => {
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

    actionNotify = () => {
        // this.props.navigation.navigate(Screens.NotifyDetail)
    }

    actionFunction = (key) => {
        switch (key) {
            case 'R1': {
                var account = Buz.getAccount()
                if (account.percentage > appConfig.LOAN_PERCENTAGE_REQUIRE) {
                    this.props.navigation.navigate(Screens.Loan)
                } else {
                    this.base.showErrorAlert(Localization('ERR_APP_NOT_UPDATE_INFO'))
                }
                break;
            }
            case 'R2': {
                this.props.navigation.navigate(Screens.CreditContainer)
                break;
            }
            case 'R3': {
                // alert('Chức năng đang được cập nhật')
                this.props.navigation.navigate(Screens.InsuranceContainer)
                break;
            }
            case 'R4': {
                // alert('Chức năng đang được cập nhật')
                this.props.navigation.navigate(Screens.Shop)
                break;
            }
            case 'R5': {
                // alert('Chức năng đang được cập nhật')
                this.props.navigation.navigate(Screens.LandContainer)
                break;
            }
            case 'R6': {
                // alert('Chức năng đang được cập nhật')
                this.props.navigation.navigate(Screens.Oto)
                break;
            }
            case 'R7': {
                // alert('Chức năng đang được cập nhật')
                this.props.navigation.navigate(Screens.ATMContainer)
                break;
            }
            case 'UPDATE': {
                break;
            }
            default: {
                // alert('Chức năng đang được cập nhật')
                this.base.showUpdateAlert()
            }
        }
    }


    actionFunctionMain = (key) => {
        switch (key) {
            case 'CASHIN': {
                this.props.navigation.navigate('CashIn')
                break;
            }
            case 'CASHOUT': {
                // alert('Chức năng đang được cập nhật')
                this.props.navigation.navigate(Screens.CashOut)
                break;
            }
            case 'REFERAL': {
                this.props.navigation.navigate(Screens.Referal)
                break;
            }
        }
    }

    actionOCB = () => {
        this.props.navigation.navigate(Screens.ATMWeb, {
            url: 'https://saleonline.com-b.vn/?utm_source=accesstrade&aff_sid=FEJZhBk0Ia711WhUXD4nEQETuquMeJXvOFuP4Z6z7X24vXPb',
            header: 'OCB Bank'
        })
    }

    // actionDoctorDong = () => {
    //     this.props.navigation.navigate(Screens.ATMWeb, {
    //         url: '',
    //         header: 'OCB Bank'
    //     })
    // }
}

const mapStateToProps = (state) => {
    return {
        name: state.accountRedux.name,
        credit: state.accountRedux.credit,
    }
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)