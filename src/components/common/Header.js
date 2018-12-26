import React, { PureComponent } from 'react';
import { Text, Platform, TouchableOpacity, Image, View } from 'react-native';
import { scale, verticalScale } from '../../theme/scaling';
import { AppStyle, Colors, Images } from '../../theme';
import Localization from '../../config/languages/i18n'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class Header extends PureComponent {

    renderNext() {
        if (this.props.showNext) {
            return (
                <TouchableOpacity onPress={() => {
                    if (this.props.actionNext) {
                        this.props.actionNext()
                    }
                }} >
                    <AntDesign name="arrowright" size={30} color={Colors.whiteTwo} />
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity />
            )
        }
    }

    renderIconBack() {
        switch (this.props.iconBack) {
            case 'menu':
                return <AntDesign name="menuunfold" size={30} color={Colors.whiteTwo} />
            default:
                return <AntDesign name="arrowleft" size={30} color={Colors.whiteTwo} />
        }
    }

    renderBack() {
        if (this.props.showBack) {
            return (
                <TouchableOpacity onPress={() => {
                    if (this.props.actionBack) {
                        this.props.actionBack()
                    }
                }} >
                    {this.renderIconBack()}
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity />
            )
        }
    }

    render() {
        var mgl = 0
        if (this.props.showNext) {
            mgl = 20
        } else {
            mgl = -20
        }
        return (
            <LinearGradient
                colors={[Colors.alive_BD3F32, Colors.alive_CB356B]}
                start={{ x: 0.0, y: 0.9 }} end={{ x: 0.9, y: 1.0 }}
                locations={[0, 1]}
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: scale(20),
                    paddingTop: Platform.OS === 'ios' ? scale(20) : scale(20),
                    height: Platform.OS === 'ios' ? scale(70) : scale(50)
                }}
            >
                {this.renderBack()}
                <Text style={[AppStyle.Title_Center_White, { marginLeft: scale(mgl) }]}> {this.props.titleHeader}</Text>
                {this.renderNext()}
            </LinearGradient>
        )
    }
}