import React, { PureComponent } from 'react';
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Animated
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view'
import { scale } from '../../theme/scaling'
import Localization from '../../config/languages/i18n'
import ReferalProcess from './referal-process.container'
import ReferalActive from './referal-active.container'
import ReferalBonus from './referal-bonus.container'
import HeaderReferal from '../../components/common/HeaderReferal'
import { Screens, Colors, Images, AppStyle } from '../../theme'
import config from '../../config/config'

class ReferalContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            index: 1,
            routes: [
                // { key: 'first', title: 'CẦN XỬ LÝ' },
                { key: 'second', title: 'ĐÃ THAM GIA' },
                { key: 'three', title: 'HOA HỒNG' },
            ],
        };
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

    renderHeader() {
        return (
            <HeaderReferal titleHeader={'Mời bạn bè'}
                showBack={true}
                actionBack={this.actionBack}
                showNext={true}
                actionNext={this.actionShare}
                actionCondition={this.actionCondition}
            />
        )
    }
    renderScene = ({ route }) => {
        switch (route.key) {
            // case 'first':
            //     return <ReferalProcess navigation={this.props.navigation} />
            case 'second':
                return <ReferalActive navigation={this.props.navigation} />
            case 'three':
                return <ReferalBonus navigation={this.props.navigation} />
        }
    }

    renderCodeRef() {
        return (
            <View style={{
                height: scale(30),
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: Colors.grey,
                paddingLeft: scale(10),
                paddingRight: scale(10),
            }}>
                <Text style={AppStyle.Tiny_Left_White}>{'Mã giới thiệu: '}</Text>
                <Text style={AppStyle.Paragraph_Left_White}>{'11223344'}</Text>
            </View>
        )
    }

    actionBack = () => {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <BaseContainer
                currentScreen={'Referal'}
                onBackHandler={this.actionBack}
                showHeader={false}
                ownStyle={{
                    flex: 1,
                }}
            >
                {this.renderHeader()}
                {/* {this.renderCodeRef()} */}
                <TabView
                    navigationState={this.state}
                    renderScene={this.renderScene}
                    renderTabBar={this._renderTabBar}
                    onIndexChange={index => this.setState({ index })}
                    initialLayout={Dimensions.get('window')}
                    style={{
                        // marginTop: - scale(50),
                    }}
                    lazy={true}
                />
            </BaseContainer>
        )
    }

    actionCondition = () => {
        this.props.navigation.navigate(Screens.ReferalCondition)
    }

    actionShare = () => {
        this.props.navigation.navigate(Screens.ReferalShare)
    }
}
const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(ReferalContainer)