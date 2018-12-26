import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { scale } from '../../theme/scaling';
import { AppStyle, Colors } from '../../theme';
import { PropTypes } from 'prop-types'
import AntDesign from 'react-native-vector-icons/AntDesign'
import appConfig from '../../config/app-config'

export default class ChannelPhone extends PureComponent {

    renderComplete() {
        var icon = ''
        if (this.props.complete) {
            icon = (
                <AntDesign name="check" size={30} color={Colors.red} style={{ marginLeft: scale(5) }} />
            )
        } else {
            icon = (
                <AntDesign name="close" size={30} color={Colors.black} style={{ marginLeft: scale(5) }} />
            )
        }
        return (
            <View style={{
                backgroundColor: Colors.grey,
                height: scale(30),
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {icon}
            </View>
        )
    }

    renderContent() {
        if (this.props.complete) {
            return (
                <Text style={[AppStyle.Paragraph_Left_Black, { marginLeft: scale(20) }]}>{this.props.task}</Text>
            )
        } else {
            return (
                <TextInput
                    style={[AppStyle.Paragraph_Left_Black, { marginLeft: scale(20) }]}
                    placeholder={'Thêm số điện thoại'}
                    keyboardType={'numeric'}
                    onChangeText={(text) => this.props.onChangePhone(text)}
                    maxLength={appConfig.LENGTH_PHONE}
                />
            )
        }
    }

    render() {
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: Colors.whiteTwo,
                height: scale(45),
                marginTop: scale(10),
                borderRadius: scale(5),
                paddingLeft: scale(10),
                paddingRight: scale(20),
            }} onPress={() => {
                if (this.props.actionClick && !this.props.complete) {
                    this.props.actionClick()
                }
            }} >
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderRadius: scale(5)
                }}>
                    {this.props.iconLeft}
                    {this.renderContent()}
                    {/* <Text style={[AppStyle.Paragraph_Left_Black, { marginLeft: scale(20) }]}>{this.props.task}</Text> */}
                </View>

                {this.renderComplete()}
            </View>

        )
    }

    // onChangePhone(text) {

    // }
}

ChannelPhone.propTypes = {
    task: PropTypes.string,
    complete: PropTypes.bool,
}

ChannelPhone.defaultProps = {
    complete: false
}