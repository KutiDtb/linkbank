import React, { PureComponent } from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import { scale, verticalScale } from '../../theme/scaling';
import { AppStyle, Colors, Images } from '../../theme';
import { PropTypes } from 'prop-types'

export default class Input extends PureComponent {

    render() {
        return (
            <View style={{
                flexDirection: 'column',
                borderRadius: 5,
                paddingTop: verticalScale(5),
                paddingLeft: scale(20),
                backgroundColor: this.props.backgroundColor,
                borderColor: Colors.whiteThree,
                borderWidth: scale(2),
            }} >
                <TextInput
                    style={{
                        // height: scale(100),
                        // textAlign: 'left',
                        // color: 'black',
                    }}
                    placeholder={this.props.placeholder}
                    keyboardType={this.props.keyboardType}
                    editable={this.props.editable}
                    multiline={this.props.multiline}
                    onChangeText={(text) => this.props.onChangeText(text)}
                />
            </View>
        )
    }
}

Input.propTypes = {
    title: PropTypes.string,
    backgroundColor: PropTypes.string,
    placeholder: PropTypes.string,
    keyboardType: PropTypes.string,
    editable: PropTypes.bool,
    multiline: PropTypes.bool,
}

Input.defaultProps = {
    backgroundColor: Colors.whiteThree,
    editable: true,
    multiline: false
}