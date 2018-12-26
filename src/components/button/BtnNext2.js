import React, {
    PureComponent
} from 'react';
import { Platform, TouchableOpacity, Text } from "react-native";
import { Button } from "react-native-elements";
import { scale } from '../../theme/scaling';
import { Colors, Constants, AppStyle } from '../../theme';
import LinearGradient from 'react-native-linear-gradient'

export default class ButtonNextType2 extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        var { actionPress, disable, title } = this.props;
        return (
            <TouchableOpacity style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
            }} onPress={actionPress}>
                <LinearGradient
                    colors={[Colors.alive_CB356B, Colors.alive_BD3F32]}
                    start={{ x: 0.0, y: 0.9 }} end={{ x: 0.9, y: 1.0 }}
                    locations={[0, 1]}
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        borderRadius: 5,
                        height: scale(45),
                        // backgroundColor: Colors.black,
                        // opacity: 0.5
                    }}
                >
                    <Text style={AppStyle.Title_Center_White}> {title}</Text>
                </LinearGradient>
            </TouchableOpacity>
        );
    }
}