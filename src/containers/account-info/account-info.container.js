import React, { PureComponent } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Platform,
    Animated,
    Dimensions
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import { scale } from '../../theme/scaling';
import Localization from '../../config/languages/i18n'
import { AppStyle, Colors, Screens } from '../../theme'
import AccountInfo1 from './account-info-1.container'
import AccountInfo2 from './account-info-2.container'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import * as Buz from '../../saga/buz/app-buz'
import config from '../../config/config'

class AccountInfoContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            routes: [
                { key: 'first', title: 'Thông tin cơ bản' },
                { key: 'second', title: 'Thông tin địa chỉ' },
            ],
        }
    }

    _renderTabBar = props => {
        const inputRange = props.navigationState.routes.map((x, i) => i);
        const currentIndex = props.navigationState.index
        return (
            <View style={{
                flexDirection: 'row',
                paddingTop: 10
            }}>
                {props.navigationState.routes.map((route, i) => {
                    const color = props.position.interpolate({
                        inputRange,
                        outputRange: inputRange.map(
                            inputIndex => (inputIndex === i ? Colors.alive_BD3F32 : Colors.grey)
                        ),
                    });
                    return (
                        <Animated.View style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderBottomWidth: currentIndex === i ? scale(2) : 0,
                            borderBottomColor: color,
                            height: scale(40),
                        }} key={'tabbar-' + i}>
                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }} onPress={() => this.setState({ index: i })}
                            >
                                <Animated.Text style={[AppStyle.Tiny_Center_Black, { color, }]}>{route.title}</Animated.Text>
                            </TouchableOpacity>
                        </Animated.View>
                    );
                })}
            </View>
        );
    }

    actionBack = () => {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <BaseContainer
                currentScreen={'AccountInfo'}
                onBackHandler={this.actionBack}
                showHeader={true}
                titleHeader={Localization('capnhatthongtin')}
                showHeaderBack={true}
                actionHeaderBack={this.actionBack}
                ownStyle={{
                    flex: 1,
                    backgroundColor: Colors.white,
                }}
            >
                <TabView
                    navigationState={this.state}
                    renderScene={SceneMap({
                        first: () => (<AccountInfo1 actionFinish={this.actionFinish} navigation={this.props.navigation} />),
                        second: () => (<AccountInfo2 actionFinish={this.actionFinish} navigation={this.props.navigation} />),
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

    actionFinish = () => {
        if (this.state.index === 0) {
            var account = Buz.getAccount()
            if (account.updateInfoTask.includes(config.ACCOUNT_INFO_NORMAL_TWO)) {
                this.props.navigation.goBack()
            } else {
                this.setState({
                    index: 1,
                })
            }
        } else {
            var account = Buz.getAccount()
            if (account.updateInfoTask.includes(config.ACCOUNT_INFO_NORMAL_ONE)) {
                this.props.navigation.goBack()
            } else {
                this.setState({
                    index: 0,
                })
            }
        }
    }

    actionNext = () => {
        this.props.navigation.goBack()
    }
}
const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(AccountInfoContainer)