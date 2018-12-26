import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { scale } from '../../theme/scaling';
import { AppStyle, Colors } from '../../theme';
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

export default class Functions extends PureComponent {

    renderIcon(key) {
        switch (key) {
            case 'R1':
                return (
                    <FontAwesome name="money" size={35} color={Colors.alive_BD3F32} />
                )
            case 'R2':
                return (
                    <Entypo name="credit-card" size={35} color={'#008080'} />
                )
            case 'R3':
                return (
                    <FontAwesome name="umbrella" size={35} color={'#ff7f50'} />
                )
            case 'R4':
                return (
                    <Entypo name="shop" size={35} color={'#3399ff'} />
                )
            case 'R5':
                return (
                    <Octicons name="home" size={35} color={'#800000'} />
                )
            case 'R6':
                return (
                    <FontAwesome5 name="car-crash" size={35} color={Colors.black} />
                )
            case 'R7':
                return (
                    <EvilIcons name="credit-card" size={45} color={Colors.alive_BD3F32} />
                )
            case 'R8':
                return (
                    <FontAwesome name="car" size={35} color={Colors.alive_BD3F32} />
                )
            case 'U1':
                return (
                    <FontAwesome name="mobile-phone" size={35} color={Colors.alive_BD3F32} />
                )
            case 'U2':
                return (
                    <MaterialIcons name="card-giftcard" size={35} color={Colors.alive_BD3F32} />
                )
            case 'U3':
                return (
                    <MaterialCommunityIcons name="bank" size={35} color={Colors.alive_BD3F32} />
                )
            case 'U4':
                return (
                    <FontAwesome5 name="money-check-alt" size={35} color={Colors.alive_BD3F32} />
                )
            case 'U5':
                return (
                    <FontAwesome5 name="money-bill-alt" size={35} color={Colors.alive_BD3F32} />
                )
            case 'U6':
                return (
                    <MaterialCommunityIcons name="file-find" size={35} color={Colors.alive_BD3F32} />
                )
            case 'U7':
                return (
                    <FontAwesome name="cc-visa" size={35} color={Colors.alive_BD3F32} />
                )
            case 'U8':
                return (
                    <AntDesign name="questioncircleo" size={35} color={Colors.alive_BD3F32} />
                )
            case 'UPDATE':
                return (
                    <MaterialCommunityIcons name="update" size={35} color={Colors.grey} />
                )
            default:
                break;
        }
    }

    renderFunction(data) {
        if (undefined !== data && null !== data) {
            return (
                <TouchableOpacity style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    // width: scale(90),
                }} onPress={() => {
                    if (this.props.actionFunction) {
                        this.props.actionFunction(data.key)
                    }
                }}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: scale(80),
                        height: scale(50),
                    }}>
                        {this.renderIcon(data.key)}
                    </View>
                    <Text style={[AppStyle.txtFunctionMain, { marginTop: scale(0) }]}> {data.txt}</Text>
                </TouchableOpacity>
            )
        } else {
            return <View />
        }
    }

    renderFunctions() {
        var template = [];
        var functions = this.props.data
        if (functions instanceof Array) {
            for (var i = 0; i < functions.length; i++) {
                var func = functions[i];
                template.push(
                    <View style={{
                        marginTop: scale(10),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }} key={"funcRow-" + i}>
                        {this.renderFunction(func[0])}
                        {this.renderFunction(func[1])}
                        {this.renderFunction(func[2])}
                        {this.renderFunction(func[3])}
                    </View>
                );
            }
        }
        return template;
    }

    render() {
        return (
            <View>
                {this.renderFunctions()}
            </View>
        )
    }

}