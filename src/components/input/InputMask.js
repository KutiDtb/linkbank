import React, { PureComponent } from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import { scale, verticalScale } from '../../theme/scaling';
import { AppStyle, Colors, Images } from '../../theme';

export default class InputMask extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <View style={{
                flexDirection: 'column',
                marginTop: verticalScale(10),
                // borderWidth: 1,
                // borderBottomColor: Colors.black,
                borderRadius: 5,
                paddingTop: verticalScale(5),
                paddingLeft: scale(20),
                backgroundColor: Colors.whiteThree
            }} >
                {/* <Text style={AppStyle.txtFunctionMainExpand}> {this.props.name}</Text> */}
                <TextInput
                    ref={this.props.refInput}
                    keyboardType={this.props.keyboardType}
                    autoFocus={this.props.autoFocus}
                    placeholder={this.props.placeholder}
                    placeholderTextColor={this.props.placeholderTextColor}
                    maxLength={this.props.mask.length}
                    style={this.props.style}
                    onChangeText={(value) => this.onChangeText(value)}
                    value={this.state.value}
                />
            </View>
        )
    }

    onChangeText(value) {
        var valueExtract = value.replace(/\//g, '');
        valueExtract = valueExtract.replace(/ /g, '');
        value = this.onGetMask(valueExtract);

        this.setState({
            value
        });
        var onChangeText = this.props.onChangeText;
        if (onChangeText) {
            onChangeText(value, valueExtract);
        }
    }

    onGetMask(value) {
        var mask = '';
        var countSplit = 0;
        for (var i = 0; i < value.length; i++) {
            if (this.props.mask[i + countSplit] === '0') {
                mask = mask + value[i];
            } else {
                mask = mask + this.props.mask[i + countSplit] + value[i];

                countSplit = countSplit + 1;
            }
        }
        // console.log('format', this.props.mask, 'value', value, 'mask', mask);
        return mask;
    }
}