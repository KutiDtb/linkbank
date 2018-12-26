import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { scale, verticalScale } from '../../theme/scaling';
import { AppStyle, Colors } from '../../theme';

export default class StockExchanges extends PureComponent {

    constructor(props) {
        super(props);

    }

    renderStockExchange(data) {
        if (undefined !== data && null !== data) {
            return (
                <TouchableOpacity style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    width: scale(160),
                    borderRadius: 5,
                    backgroundColor: Colors.whiteThree
                }} onPress={() => {
                    if (this.props.actionLoanTicket) {
                        this.props.actionLoanTicket(data)
                    }
                }}>
                    <Text style={[AppStyle.txtFunctionMain, { marginTop: scale(10) }]}> {data.name}</Text>
                    <Text style={[AppStyle.Small_Center_Red, { marginTop: scale(10) }]}> {data.address}</Text>
                    <Text style={[AppStyle.txtFunctionMain, { marginTop: scale(10) }]}> {data.modalJob}</Text>
                    <Text style={[AppStyle.Small_Center_Red, { marginTop: scale(10) }]}> {data.salary}</Text>
                    <Text style={[AppStyle.txtFunctionMain, { marginTop: scale(10) }]}> {data.created}</Text>
                    <Text style={[AppStyle.Small_Center_Red, { marginTop: scale(10) }]}> {data.credits}</Text>
                </TouchableOpacity>
            )
        } else {
            return <View />
        }
    }

    renderStockExchanges() {
        var template = [];
        var stockExchange = this.props.data
        if (stockExchange instanceof Array) {
            for (var i = 0; i < stockExchange.length; i++) {
                var func = stockExchange[i];
                template.push(
                    <View style={{
                        marginTop: scale(20),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }} key={"funcRow-" + i}>
                        {this.renderStockExchange(func[0])}
                        {this.renderStockExchange(func[1])}
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
            }}>
                {this.renderStockExchanges()}
            </View>
        )
    }

}