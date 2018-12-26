import React, {
    PureComponent
} from 'react';
import { Platform, KeyboardAvoidingView } from "react-native";
import { Button } from "react-native-elements";
import { scale } from '../../theme/scaling';
import { Colors, Constants, AppStyle } from '../../theme';

export default class ButtonNext extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        var { actionPress, disable, title } = this.props;
        return (
            // <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position' : ''}>
            <Button
                onPress={actionPress}
                title={title}
                buttonStyle={{
                    marginTop: scale(30),
                    backgroundColor: (disable === true ? Colors.whiteTwo : Colors.whiteTwo),
                    height: scale(50),
                    borderRadius: 5,
                    ...this.props.style,
                }}
                containerViewStyle={{
                    marginLeft: 0,
                    marginRight: 0,
                }}
                textStyle={disable === true ?
                    AppStyle.Title_Center_White :
                    (this.props.textStyle ? this.props.textStyle : AppStyle.Title_Center_White)}
                disabled={disable}
            />
        );
    }
}