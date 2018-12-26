import React, { PureComponent } from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import { scale, verticalScale } from '../../theme/scaling';
import { AppStyle, Colors, Images } from '../../theme';

export default class InputType2 extends PureComponent {

    render() {
        return (
            <View style={{
                flexDirection: 'column',
                marginTop: verticalScale(10),
                borderBottomWidth: 1,
                borderBottomColor: Colors.whiteTwo,
                paddingTop: verticalScale(5),
                paddingLeft: scale(100)
            }} >
                <TextInput
                    style={{
                    }}
                    placeholder={this.props.placeholder}
                    autoFocus={this.props.autoFocus}
                    keyboardType={this.props.keyboardType}
                    onChangeText={(text) => this.props.onChangeText(text)}
                />
            </View>
        )
    }

}