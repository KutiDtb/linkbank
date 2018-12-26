import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { scale } from '../../theme/scaling';
import { AppStyle, Colors } from '../../theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class Payments extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            key: this.props.value
        }
    }

    renderIconByKey(key) {
        switch (key) {
            case 'VISA':
                return (
                    <FontAwesome name="cc-visa" size={25} color={this.state.key === key ? Colors.whiteTwo : Colors.alive_BD3F32} />
                )
            case 'ATM':
                return (
                    <MaterialCommunityIcons name="bank" size={35} color={this.state.key === key ? Colors.whiteTwo : Colors.alive_BD3F32} />
                )
            case 'TRANSFER':
                return (
                    <Ionicons name="md-wifi" size={35} color={this.state.key === key ? Colors.whiteTwo : Colors.alive_BD3F32} />
                )
            default:
                break;
        }
    }

    renderPayment(data) {
        if (undefined !== data && null !== data) {
            return (
                <TouchableOpacity style={{
                    marginTop: scale(10),
                    flexDirection: 'row',
                    // justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: (this.state.key === data.key ? Colors.alive_BD3F32 : Colors.whiteTwo),
                    // borderBottomColor: Colors.grey,
                    // borderBottomWidth: scale(2),
                    borderRadius: scale(5),
                    borderColor: Colors.whiteThree,
                    borderWidth: scale(1),
                }} onPress={() => this.actionClick(data.key)}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: scale(40),
                        height: scale(50),
                        borderRadius: 5
                    }}>
                        {this.renderIconByKey(data.key)}
                    </View>
                    <Text style={[AppStyle.Paragraph_Center_Black, { marginTop: scale(0) }]}> {data.txt}</Text>
                </TouchableOpacity>
            )
        } else {
            return <View />
        }
    }

    renderPayments() {
        var template = [];
        var payments = this.props.data
        if (payments instanceof Array) {
            for (var i = 0; i < payments.length; i++) {
                var func = payments[i];
                template.push(
                    <View style={{
                        marginTop: scale(10),
                        flexDirection: 'column',
                        // justifyContent: 'space-between',
                    }} key={"funcRow-" + i}>
                        {this.renderPayment(func[0])}
                        {this.renderPayment(func[1])}
                        {this.renderPayment(func[2])}
                    </View>
                );
            }
        }
        return template;
    }

    render() {
        return (
            <View style={{
                flexDirection: 'column',
                paddingLeft: scale(20),
                paddingRight: scale(20),
                backgroundColor: Colors.whiteTwo,
            }}>
                <Text style={AppStyle.Paragraph_Left_Black}> {'Chọn hình thức thanh toán'}</Text>
                {this.renderPayments()}
            </View>
        )
    }

    actionClick = (key) => {
        this.setState({
            key
        })
        if (this.props.actionClick) {
            this.props.actionClick(key)
        }
    }

}