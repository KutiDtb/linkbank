import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Text,
    View,
    StyleSheet,
    Animated,
    TouchableWithoutFeedback,
    ScrollView,
    BackHandler,
    Image,
    TouchableOpacity,
} from 'react-native'
import { scale } from '../../theme/scaling'
import { Screens, Colors, AppStyle, Images } from '../../theme'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient'

class OffCanvas3D extends Component {
    constructor(props) {
        super(props)

        this._hardwareBackHandler = this._hardwareBackHandler.bind(this)

        this.state = {
            activityLeftPos: new Animated.Value(0),
            scaleSize: new Animated.Value(1.0),
            rotate: new Animated.Value(0),
            animationDuration: 300,
            stagArr: [],
            animatedStagArr: [],
            menuItems: this.props.menuItems,
            activeMenu: 0
        }
    }

    // staggered animation configuration for menu items
    componentDidMount() {
        let stagArrNew = []
        for (let i = 0; i < this.state.menuItems.length; i++) stagArrNew.push(i)
        this.setState({ stagArr: stagArrNew })

        let animatedStagArrNew = []
        stagArrNew.forEach((value) => {
            animatedStagArrNew[value] = new Animated.Value(0)
        })
        this.setState({ animatedStagArr: animatedStagArrNew })
    }

    // any update to component will fire the animation
    componentDidUpdate() {
        this._animateStuffs()

        if (this.props.handleBackPress && this.props.active) {
            BackHandler.addEventListener('hardwareBackPress', this._hardwareBackHandler)
        }

        if (this.props.handleBackPress && !this.props.active) {
            BackHandler.removeEventListener('hardwareBackPress', this._hardwareBackHandler)
        }
    }

    renderAwatar() {
        return (
            <View style={{
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image style={{
                    height: scale(50),
                    width: scale(50),
                    borderRadius: scale(25),
                }} source={Images.awatar.default} />
            </View>
        )
    }

    render() {
        const rotateVal = this.state.rotate.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '-60deg']
        })

        const staggeredAnimatedMenus = this.state.stagArr.map((index) => {
            var item
            if (index === 0) {
                item = (
                    <View style={[styles.menuItemContainer, { marginLeft: scale(0), marginTop: scale(10) }]}>
                        {this.props.renderAvatar}
                    </View>
                )
            } else if (index === this.props.menuItems.length - 1) {
                item = (
                    <View style={[styles.menuItemContainer, { marginLeft: scale(0), marginTop: scale(10) }]}>
                        {this.props.renderHotline}
                    </View>
                )
            } else {
                item = (
                    <View style={styles.menuItemContainer}>
                        {this.state.menuItems[index].icon}
                        <Text style={[styles.menuItem, { ...this.props.menuTextStyles }]}>
                            {this.state.menuItems[index].title}
                        </Text>
                        <FontAwesome style={{
                            alignItems: 'center'
                        }} name="angle-right" size={30} color={'white'} />
                    </View>
                )
            }
            return (
                <TouchableWithoutFeedback key={index} onPress={this._handlePress.bind(this, index)} style={{ backgroundColor: 'red' }}>
                    <Animated.View
                        style={{ transform: [{ translateX: this.state.animatedStagArr[index] }] }}>
                        {item}
                    </Animated.View>
                </TouchableWithoutFeedback>
            )

        })

        return (
            <LinearGradient colors={[Colors.alive_BD3F32, Colors.alive_CB356B]}
                style={[styles.offCanvasContainer, {
                    flex: 1,
                }]}>

                <Animated.View
                    showsVerticalScrollIndicator={false}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    }}>
                    <Animated.View style={styles.menuItemsContainer}>
                        {staggeredAnimatedMenus}
                    </Animated.View>
                </Animated.View>

                <Animated.View
                    // onStartShouldSetResponder={() => true}
                    // onResponderTerminationRequest={() => true}
                    onResponderRelease={(evt) => this._gestureControl(evt)}
                    style={[styles.activityContainer, {
                        flex: 1,
                        backgroundColor: this.props.backgroundColor,
                        transform: [
                            { translateX: this.state.activityLeftPos },
                            { scale: this.state.scaleSize },
                            { rotateY: rotateVal }
                        ]
                    }]}>
                    {this.state.menuItems[this.state.activeMenu].renderScene}
                </Animated.View>
            </LinearGradient>
        )
    }

    // press on any menu item, render the respective scene
    _handlePress(index) {
        // console.log('index', index)
        this.setState({ activeMenu: index })
        if (index === 9) {
            this.props.actionLogout()
        } else {
            this.props.onMenuPress()
        }
    }

    _hardwareBackHandler() {
        this.props.onMenuPress()
        return true
    }

    // control swipe left or right reveal for menu
    _gestureControl(evt) {
        // const { locationX, pageX } = evt.nativeEvent

        // if (!this.props.active) {
        //     if (locationX < 40 && pageX > 100) this.props.onMenuPress()
        // } else {
        //     if (pageX) this.props.onMenuPress()
        // }
        alert('_gestureControl')
    }

    // animate stuffs with hard coded values for fine tuning
    _animateStuffs() {
        const activityLeftPos = this.props.active ? 150 : 0
        const scaleSize = this.props.active ? .5 : 1
        const rotate = this.props.active ? 1 : 0
        const menuTranslateX = this.props.active ? 0 : -150

        Animated.parallel([
            Animated.timing(this.state.activityLeftPos, { toValue: activityLeftPos, duration: this.state.animationDuration }),
            Animated.timing(this.state.scaleSize, { toValue: scaleSize, duration: this.state.animationDuration }),
            Animated.timing(this.state.rotate, { toValue: rotate, duration: this.state.animationDuration }),
            Animated.stagger(50, this.state.stagArr.map((item) => {
                if (this.props.active) {
                    return Animated.timing(
                        this.state.animatedStagArr[item],
                        {
                            toValue: menuTranslateX,
                            duration: this.state.animationDuration,
                            delay: 0
                        }
                    )
                } else {
                    return Animated.timing(
                        this.state.animatedStagArr[item],
                        {
                            toValue: menuTranslateX,
                            duration: this.state.animationDuration,
                            delay: 0
                        }
                    )
                }
            }))
        ])
            .start()
    }
}

// validate props
OffCanvas3D.propTypes = {
    active: PropTypes.bool.isRequired,
    onMenuPress: PropTypes.func.isRequired,
    menuItems: PropTypes.array.isRequired,
    backgroundColor: PropTypes.string,
    menuTextStyles: PropTypes.object,
    handleBackPress: PropTypes.bool
}

// set default props
OffCanvas3D.defaultProps = {
    backgroundColor: '#222222',
    menuTextStyles: { color: 'white' },
    handleBackPress: true
}

export default OffCanvas3D

// structure stylesheet
const styles = StyleSheet.create({
    offCanvasContainer: {

    },
    menuItemsContainer: {
        paddingTop: scale(30)
    },
    menuItemContainer: {
        paddingLeft: scale(10),
        flexDirection: 'row',
        alignItems: 'center'
    },
    menuItem: {
        fontWeight: 'bold',
        paddingLeft: scale(12),
        paddingTop: scale(10),
        paddingBottom: scale(10),
    },
    activityContainer: {

    }
})
