import { Animated, Easing } from 'react-native';
const API_DEV = 'https://dev-wallet.paysmart.com.vn/v1.0/';
const API_SB = 'https://sb-wallet.paysmart.com.vn/v1.0/';

var configDefault = {
    TIMEOUT: 30000,
    VALIDATE: {
        REGREX: {
            PHONE_NUMBER_10: '0((9[0-9]{8})|(3[23456789][0-9]{7})|(5[689][0-9]{7})|(7[06789][0-9]{7})|(8[12345689][0-9]{7}))',
        },
    },
    LENGTH_PASS: 6,
    LENGTH_OTP: 6,
    LENGTH_CMND: 10,
    LENGTH_PHONE: 10,
    LOAN_PERCENTAGE_REQUIRE: 50,
    PAYMENT_CLOSE_URL: 'https://vnexpress.net/',
    NAVIGATION_TRANSISION_CONFIG: () => {
        return {
            transitionSpec: {
                duration: 300,
                easing: Easing.out(Easing.poly(4)),
                timing: Animated.timing,
                useNativeDriver: true,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps

                const thisSceneIndex = scene.index
                const width = layout.initWidth

                const translateX = position.interpolate({
                    inputRange: [thisSceneIndex - 1, thisSceneIndex],
                    outputRange: [width, 0],
                })

                return { transform: [{ translateX }] }
            },
        }
    }
}
var config = {
    dev: {
        API_URL: API_DEV,
        ...configDefault
    },
    sandbox: {
        API_URL: API_SB,
        ...configDefault
    }
}

export default config.dev;