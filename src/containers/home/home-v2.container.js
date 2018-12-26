import React, { PureComponent } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    Dimensions,
    Image
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { scale } from '../../theme/scaling'
import { Colors, AppStyle, Images } from '../../theme'
import MessageContainer from './message.container'
import HelperContainer from '../helper/helper-v2.container'
import StockExchangeContainer from '../stockexchange/stockexchange-v2.container'
import AccountContainer from './account.container'
import HomeContainer from './home.container'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'

class HomeV2Container extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            index: 2,
            routes: [
                {
                    id: 0, key: 'first', title: 'Tìm tư vấn',
                },
                { id: 1, key: 'second', title: 'Sàn giao dịch' },
                { id: 2, key: 'three', title: 'Trang chủ' },
                { id: 3, key: 'four', title: 'Tin nhắn' },
                { id: 4, key: 'five', title: 'Tài khoản'},
            ],
        };
    }

    renderIcontab(currentIndex, index) {
        switch (index) {
            case 0:
                return (
                    <FontAwesome5 name="search-location" size={23}
                        color={index === currentIndex ? Colors.alive_CB356B : Colors.grey} />
                )
            case 1:
                return (
                    <Feather name="bar-chart-2" size={25}
                        color={index === currentIndex ? Colors.alive_CB356B : Colors.grey} />
                )
            case 2:
                return (
                    <MaterialCommunityIcons name="home-currency-usd" size={30}
                        color={index === currentIndex ? Colors.alive_CB356B : Colors.grey} />
                )
            case 3:
                return (
                    <AntDesign name="message1" size={23}
                        color={index === currentIndex ? Colors.alive_CB356B : Colors.grey} />
                )
            case 4:
                return (
                    <MaterialCommunityIcons name="account" size={25}
                        color={index === currentIndex ? Colors.alive_CB356B : Colors.grey} />
                )
            default:
                break;
        }
    }

    _renderTabBar = props => {
        const inputRange = props.navigationState.routes.map((x, i) => i);
        var currentIndex = props.navigationState.index
        return (
            <View
                style={{
                    flexDirection: 'row',
                    backgroundColor: Colors.whiteThree,
                }}>
                {props.navigationState.routes.map((route, i) => {
                    var color = props.position.interpolate({
                        inputRange,
                        outputRange: inputRange.map(
                            inputIndex => (inputIndex === i ? Colors.alive_CB356B : Colors.grey)
                        ),
                    });
                    return (
                        <TouchableOpacity
                            key={'tabbar-' + i}
                            style={{
                                flex: 1,
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: scale(5),
                            }} onPress={() => this.setState({ index: i })}
                        >
                            <Animated.View style={{
                                padding: scale(1)
                            }}>
                                {this.renderIcontab(currentIndex, route.id)}
                            </Animated.View>
                            <Animated.Text style={[AppStyle.TabMain_Center_Black, { color, }]}>{route.title}</Animated.Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };
    renderScene = ({ route }) => {
        switch (route.key) {
            case 'first':
                return <HelperContainer navigation={this.props.navigation} />
            case 'second':
                return <StockExchangeContainer navigation={this.props.navigation} />
            case 'three':
                return <HomeContainer handleMenu={this.props.handleMenu} navigation={this.props.navigation} />
            case 'four':
                return <MessageContainer navigation={this.props.navigation} />
            case 'five':
                return <AccountContainer navigation={this.props.navigation} />
            default:
                return null;
        }
    }

    actionBack = () => {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <BaseContainer
                currentScreen={'Authen'}
                onBackHandler={this.actionBack}
                ownStyle={{
                    flex: 1,
                    backgroundColor: Colors.whiteTwo,
                }}
            >
                <TabView
                    navigationState={this.state}
                    renderScene={this.renderScene}
                    renderTabBar={this._renderTabBar}
                    onIndexChange={index => this.setState({ index })}
                    initialLayout={Dimensions.get('window')}
                    tabStyle={{ backgroundColor: 'grey' }}
                    tabBarPosition={'bottom'}
                    lazy={true}
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


export default connect(mapStateToProps, mapDispatchToProps)(HomeV2Container)