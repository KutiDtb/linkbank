import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { scale, verticalScale } from '../../theme/scaling';
import { AppStyle, Colors } from '../../theme';

export default class CashIns extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            amountActive: this.props.value
        }
    }

    renderCashIn(data) {
        if (undefined !== data && null !== data) {
            return (
                <TouchableOpacity style={{
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: 5,
                    width: scale(115),
                    paddingBottom: scale(10),
                    borderColor: (this.state.amountActive === data.amt ? Colors.alive_BD3F32 : Colors.grey),
                    borderWidth: (this.state.amountActive === data.amt ? scale(2) : scale(1)),
                }} onPress={() => this.actionClickCashIn(data)}>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: (this.state.amountActive === data.amt ? Colors.alive_BD3F32 : Colors.grey),
                    }}>
                        <View style={{
                            // justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'row'
                        }}>
                            <Text style={[AppStyle.Credit_Center_White, { marginTop: scale(10), fontWeight: 'bold' }]}> {data.credit}</Text>
                            <Text style={[AppStyle.Small_Center_White, { marginTop: scale(20) }]}> {' Credit'}</Text>
                        </View>

                        <View style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                            marginTop: scale(10)
                        }}>
                            <Text style={[AppStyle.Paragraph_Center_White]}> {data.amt}</Text>
                            <Text style={[AppStyle.Small_Center_White]}> {' VND'}</Text>
                        </View>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={[AppStyle.Small_Center_Red, { marginTop: scale(5) }]}> {'Tiết kiệm ' + data.sale + ' %'}</Text>
                    </View>

                </TouchableOpacity>
            )
        } else {
            return <View />
        }
    }

    renderCashIns() {
        var template = [];
        var cashins = this.props.data
        if (cashins instanceof Array) {
            for (var i = 0; i < cashins.length; i++) {
                var func = cashins[i];
                template.push(
                    <View style={{
                        marginTop: scale(10),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }} key={"funcRow-" + i}>
                        {this.renderCashIn(func[0])}
                        {this.renderCashIn(func[1])}
                        {this.renderCashIn(func[2])}
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
                paddingLeft: scale(10),
                paddingRight: scale(10),
                paddingBottom: scale(20),
                backgroundColor: Colors.whiteTwo,
            }}>
                {this.renderCashIns()}
            </View>
        )
    }

    actionClickCashIn = (data) => {
        this.setState({
            amountActive: data.amt
        })
        if (this.props.actionClick) {
            this.props.actionClick(data)
        }
    }
}