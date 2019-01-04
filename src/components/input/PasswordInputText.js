import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    View,
    StyleSheet
} from 'react-native';
import {
    TextField
} from 'react-native-material-textfield';
import { AppStyle, Colors } from '../../theme'


export default class PasswordInputText extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            icEye: 'visibility-off',
            password: true
        }
    }

    changePwdType = () => {
        let newState;
        if (this.state.password) {
            newState = {
                icEye: 'visibility',
                password: false
            }
        } else {
            newState = {
                icEye: 'visibility-off',
                password: true
            }
        }

        // set new state value
        this.setState(newState)

    };


    render() {
        return (
            <View>
                <TextField {...this.props}
                    secureTextEntry={this.state.password}
                    label={this.props.label}
                    disabledLineWidth={0}
                    activeLineWidth={0}
                    lineWidth={0}
                    tintColor={Colors.grey}
                    maxLength={6}
                    // selectTextOnFocus={true}
                    // selection={{
                    //     start: 0,
                    //     end: 1,
                    // }}
                    // selectionColor={Colors.alive_BD3F32}
                 />
                <Icon style={styles.icon}
                    name={this.state.icEye}
                    size={this.props.iconSize}
                    color={this.props.iconColor}
                    onPress={this.changePwdType}
                />
            </View>
        );
    }
}


export const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        top: 33,
        right: 0,
        marginRight: 20,
    }

});

PasswordInputText.defaultProps = {
    iconSize: 25,
    label: 'Nhập mật khẩu'
}

