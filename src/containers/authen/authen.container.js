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
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import Header from '../../components/common/Header'
import Input from '../../components/input/Input'
import InputPicker from '../../components/input/InputPicker'
import { scale } from '../../theme/scaling'
import { Colors, AppStyle, Images } from '../../theme'
import Localization from '../../config/languages/i18n'
import config from '../../config/config'
import RegisterContainer from './register.container'
import LoginContainer from './login.container'
import * as Buz from '../../saga/buz/app-buz'

class AuthenContainer extends PureComponent {
    constructor(props) {
        super(props);
        var index = 0
        this.account = Buz.getAccount()
        if (this.account.phone === '' && this.account.pass === '') {
            index = 1
        }
        this.state = {
            index: index,
            routes: [
                { key: 'first', title: 'Đăng nhập' },
                { key: 'second', title: 'Đăng ký' },
            ],
        };
    }

    _renderTabBar = props => {
        const inputRange = props.navigationState.routes.map((x, i) => i);

        return (
            <View style={{
                flexDirection: 'row',
                paddingTop: 10
            }}>
                {props.navigationState.routes.map((route, i) => {
                    const color = props.position.interpolate({
                        inputRange,
                        outputRange: inputRange.map(
                            inputIndex => (inputIndex === i ? Colors.whiteTwo : Colors.black)
                        ),
                    });
                    return (
                        <TouchableOpacity
                            key={'tabbar-' + i}
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                padding: 16,
                            }} onPress={() => this.setState({ index: i })}
                        >
                            <Animated.Text style={[AppStyle.Paragraph_Center_White, { color, }]}>{route.title}</Animated.Text>
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
                currentScreen={'Authen'}
                onBackHandler={this.actionBack}
                bgLinear={true}
            >
                <Image style={{
                    // marginTop: - scale(30),
                    height: scale(133),
                    width: scale(200),
                    marginLeft: scale(70),
                }} resizeMode='contain' source={Images.logo.test_1} />
                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: () => (<LoginContainer rootNaviation={this.props.navigation} />),
                        second: () => (<RegisterContainer rootNaviation={this.props.navigation} />),
                    })}
                    renderTabBar={this._renderTabBar}
                    onIndexChange={index => this.setState({ index })}
                    initialLayout={Dimensions.get('window')}
                    style={{
                        // marginTop: - scale(50),
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


export default connect(mapStateToProps, mapDispatchToProps)(AuthenContainer)