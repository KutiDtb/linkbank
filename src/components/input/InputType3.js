import React, { PureComponent } from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import { scale } from '../../theme/scaling';
import { AppStyle, Colors, Images } from '../../theme';
import { PropTypes } from 'prop-types'

export default class InputType3 extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value,
            mask: '',
        }
    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                borderRadius: 5,
                // borderBottomColor: Colors.whiteThree,
                // borderBottomWidth: scale(1),
                marginTop: scale(10)
            }} >
                <Text style={AppStyle.Paragraph_Left_Black}>{this.props.title}</Text>
                <View style={{
                    justifyContent: 'center',
                    height: scale(50),
                    ...this.props.styleInput,
                }} >
                    <TextInput
                        style={AppStyle.Paragraph_Left_Black}
                        placeholder={this.props.placeholder}
                        keyboardType={this.props.keyboardType}
                        autoCapitalize={this.props.autoCapitalize}
                        editable={this.props.editable}
                        multiline={this.props.multiline}
                        onChangeText={(text) => this.props.onChangeText(text)}
                        maxLength={this.props.maxLength}
                        value={this.props.value !== '' ? this.props.value : null}
                    />
                </View>
            </View>
        )
    }

    // onChangeText(text) {
    //     if (this.props.onChangeText) {
    //         this.props.onChangeText(text)
    //     }

    //     this.setState({
    //         value: text,
    //         mask
    //     })
    // }
}

InputType3.propTypes = {
    title: PropTypes.string,
    backgroundColor: PropTypes.string,
    placeholder: PropTypes.string,
    keyboardType: PropTypes.string,
    editable: PropTypes.bool,
    multiline: PropTypes.bool,
    maxLength: PropTypes.number,
    autoCapitalize: PropTypes.string,
    value: PropTypes.string,
}

InputType3.defaultProps = {
    backgroundColor: Colors.whiteThree,
    editable: true,
    multiline: false,
    maxLength: 100,
    autoCapitalize: 'none',
    value: '',
}