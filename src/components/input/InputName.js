import React, { PureComponent } from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import { scale, verticalScale } from '../../theme/scaling';
import { AppStyle, Colors, Images } from '../../theme';
import { PropTypes } from 'prop-types'

export default class InputName extends PureComponent {

    render() {
        return (
            <View style={{
                flexDirection: 'column',
                marginTop: verticalScale(10),
                borderRadius: 5,
                paddingTop: verticalScale(10),
                paddingLeft: scale(20),
                backgroundColor: Colors.whiteThree
            }} >
                <Text style={AppStyle.Small_Left_Black}> {this.props.name}</Text>
                <TextInput
                    style={{
                    }}
                    placeholder={this.props.placeholder}
                    keyboardType={this.props.keyboardType}
                    editable={this.props.editable}
                    onChangeText={(text) => this.props.onChangeText(text)}
                />
            </View>
        )
    }
}

InputName.propTypes = {
    name: PropTypes.string,
    placeholder: PropTypes.string,
    keyboardType: PropTypes.string,
    editable: PropTypes.bool,
}

InputName.defaultProps = {
    editable: true,
}