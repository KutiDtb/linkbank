import React, { PureComponent } from 'react';
import { Text, View, TextInput } from 'react-native';
import { scale } from '../../theme/scaling';
import { AppStyle, Colors } from '../../theme';
import { PropTypes } from 'prop-types'
import PasswordInputText from './PasswordInputText'

export default class InputPassword extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            password: '',
        }
    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                borderRadius: 5,
                marginTop: scale(10)
            }} >
                <Text style={AppStyle.Paragraph_Left_Black}>{this.props.title}</Text>
                <View style={{
                    justifyContent: 'center',
                    ...this.props.styleInput,
                    height: scale(50),
                    paddingBottom: scale(15),
                }} >
                    <PasswordInputText
                        value={this.state.password}
                        onChangeText={(password) => this.onChangeText(password)}
                        style={AppStyle.Paragraph_Left_Black}
                        keyboardType={this.props.keyboardType}
                        maxLength={this.props.maxLength}
                        label={this.props.placeholder}
                    />
                </View>
            </View>
        )
    }

    onChangeText(password) {
        this.setState({ password })
        if (this.props.onChangeText) {
            this.props.onChangeText(password)
        }
    }
}

InputPassword.propTypes = {
    title: PropTypes.string,
    backgroundColor: PropTypes.string,
    placeholder: PropTypes.string,
    keyboardType: PropTypes.string,
    editable: PropTypes.bool,
    multiline: PropTypes.bool,
    maxLength: PropTypes.number,
}

InputPassword.defaultProps = {
    backgroundColor: Colors.whiteThree,
    editable: true,
    multiline: false,
    maxLength: 100,
}