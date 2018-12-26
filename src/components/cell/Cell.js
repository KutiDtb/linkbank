import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { scale } from '../../theme/scaling';
import { AppStyle, Colors, Images } from '../../theme';
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class Cell extends PureComponent {

    render() {
        return (
            <TouchableOpacity style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: scale(10),
                height: scale(30),
                borderBottomColor: Colors.whiteThree,
                borderBottomWidth: 1,
                paddingBottom: scale(10)
            }} onPress={() => {
                if (this.props.actionClick) {
                    this.props.actionClick()
                }
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    {this.props.iconLeft}
                    <Text style={[AppStyle.Tiny_Left_Black, { marginLeft: scale(10) }]}> {this.props.content}</Text>
                </View>
                <AntDesign style={{
                    alignItems: 'center'
                }} name="right" size={20} color={Colors.grey} />
            </TouchableOpacity>
        )
    }

}