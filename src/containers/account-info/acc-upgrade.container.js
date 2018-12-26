import React, { PureComponent } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    Animated,
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import { scale } from '../../theme/scaling'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import AccountLevel1Container from './acc-level1.container'
import AccountLevel2Container from './acc-level2.container'
import AccountLevel3Container from './acc-level3.container'
import Localization from '../../config/languages/i18n'
import { Screens, Colors, Images, AppStyle } from '../../theme'
import config from '../../config/config'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'

var data = {
    score: 852,
    name: 'PHAN THANH QUANG',
    city: 'Hố Chí Minh',
    loanAmount: '20,000,000',
    loanTimeDes: '24 tháng',
    loanModal: 'Vay theo đăng ký xe máy',
    job: 'Nhân viên văn phòng',
    salary: '10,000,000 VND/Tháng',
}

class AccountUpgradeContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            index: 2,
            routes: [
                { key: 'first', title: 'Tư vấn viên' },
                { key: 'second', title: 'Chuyên viên' },
                { key: 'three', title: 'Chuyên Gia' },
            ],
        };
    }

    renderInfo() {
        return (
            <View>
                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingLeft: scale(20),
                    paddingRight: scale(20),
                }}>
                    <Text style={[AppStyle.Tiny_Center_White, { color: Colors.alive_BD3F32 }]}>{'TỔNG SỐ ĐIỂM CỦA BẠN HIỆN TẠI'}</Text>
                    <Text style={[AppStyle.Credit_Center_White, { color: Colors.alive_BD3F32 }]}>{data.score}</Text>
                </View>
                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingLeft: scale(15),
                    paddingRight: scale(10),
                    marginTop: scale(10),
                }}>
                    <Text style={[AppStyle.Paragraph_Left_Black]}>{'QUÁ TRÌNH TÍCH ĐIỂM'}</Text>
                    <Text style={[AppStyle.Tiny_Left_Black, { color: Colors.grey }]}>
                        {'Với 10 Credit được cộng vào tài khoản, bạn sẽ tích luỹ thêm 1 điểm vào tài khoản nâng cấp'}</Text>
                </View>
                <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingLeft: scale(15),
                    paddingRight: scale(10),
                    marginTop: scale(10),
                }}>
                    <View style={{
                        flexDirection: 'row',
                        borderRadius: scale(5),
                        backgroundColor: Colors.whiteThree,
                        height: scale(10),
                        width: scale(300),
                        marginRight: scale(20),
                    }} >
                        <View style={{
                            flexDirection: 'row',
                            borderRadius: scale(5),
                            backgroundColor: Colors.alive_BD3F32,
                            height: scale(10),
                            width: scale(80 * 300 / 100),
                            position: 'relative'
                        }} >
                        </View>
                    </View>
                    <FontAwesome5 name="crown" size={15} color={Colors.alive_BD3F32} />
                </View>
                <View style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingLeft: scale(15),
                    paddingRight: scale(10),
                    marginTop: scale(10),
                }}>
                    <Text style={[AppStyle.Tiny_Left_Black]}>{'Tích luỹ thêm 500 điểm nữa để trở thành Chuyên Gia'}</Text>
                    <Text style={[AppStyle.Tiny_Left_Black, { color: Colors.alive_BD3F32 }]}>
                        {'Cấp độ tư vấn của bạn càng cao, cơ hội Khách hàng tìm đến bạn càng nhiều, doanh thu ngày càng tăng, độ tin cậy và uy tín của bạnbạn cũng theo đó mà ngày một tăng'}</Text>
                </View>
            </View>
        )
    }

    _renderTabBar = props => {
        const inputRange = props.navigationState.routes.map((x, i) => i);
        var currentIndex = props.navigationState.index
        return (
            <View style={{
                flexDirection: 'row',
                borderTopColor: Colors.grey,
                borderTopWidth: scale(0.5)
                // paddingTop: 10
            }}>
                {props.navigationState.routes.map((route, i) => {
                    const color = props.position.interpolate({
                        inputRange,
                        outputRange: inputRange.map(
                            inputIndex => (inputIndex === i ? Colors.alive_BD3F32 : Colors.grey)
                        ),
                    });
                    return (
                        <TouchableOpacity
                            key={'tabbar-' + i}
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                padding: 16,
                                backgroundColor: currentIndex === i ? Colors.whiteTwo : Colors.whiteThree,
                            }} onPress={() => this.setState({ index: i })}
                        >
                            <Animated.Text style={[AppStyle.Tiny_Center_White, { color, }]}>{route.title}</Animated.Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };

    actionBack = () => {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <BaseContainer
                currentScreen={'Message'}
                onBackHandler={this.actionBack}
                showHeader={true}
                titleHeader={'Nâng cấp tài khoản'}
                showHeaderBack={true}
                actionHeaderBack={this.actionBack}
                ownStyle={{
                    flex: 1,
                    paddingTop: scale(10),
                    paddingBottom: scale(10),
                }}
            >
                {this.renderInfo()}
                <View style={{
                    width: '100%',
                    height: scale(10),
                    backgroundColor: Colors.whiteThree,
                    // marginTop: scale(10)
                }} />
                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: () => (<AccountLevel1Container navigation={this.props.navigation} />),
                        second: () => (<AccountLevel2Container navigation={this.props.navigation} />),
                        three: () => (<AccountLevel3Container navigation={this.props.navigation} />),
                    })}
                    renderTabBar={this._renderTabBar}
                    onIndexChange={index => this.setState({ index })}
                    initialLayout={Dimensions.get('window')}
                    style={{
                    }}
                />
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


export default connect(mapStateToProps, mapDispatchToProps)(AccountUpgradeContainer)