import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { scale } from '../../theme/scaling';
import { AppStyle, Colors } from '../../theme';
import { PropTypes } from 'prop-types'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class TaskConsultant extends PureComponent {

    render() {
        return (
            <View style={{
                marginTop: scale(10),
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingLeft: scale(20),
                paddingRight: scale(20),
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: scale(50),
                        width: scale(50),
                        borderRadius: scale(25),
                        borderColor: this.props.step >= 1 ? Colors._1ea7ea : Colors.grey,
                        borderWidth: scale(1)
                    }}>
                        <FontAwesome5 name="shopping-bag" size={30} color={this.props.step >= 1 ? Colors._1ea7ea : Colors.grey} />
                    </View>
                    {/* <Text style={[AppStyle.Small_Center_Grey, {marginTop: scale(5)}]}> {'NƠI LÀM VIỆC'}</Text> */}
                    <View style={{
                        flexDirection: 'row',
                        height: scale(2),
                        width: scale(50),
                        backgroundColor: this.props.step >= 2 ? Colors._1ea7ea : Colors.grey
                    }} />

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: scale(50),
                        width: scale(50),
                        borderRadius: scale(25),
                        borderColor: this.props.step >= 2 ? Colors._1ea7ea : Colors.grey,
                        borderWidth: scale(1)
                    }}>
                        <Ionicons name="ios-list-box" size={30} color={this.props.step >= 2 ? Colors._1ea7ea : Colors.grey} />
                    </View>
                    {/* <Text style={[AppStyle.Small_Center_Grey, {marginTop: scale(5)}]}> {'THAM CHIẾU'}</Text> */}
                    <View style={{
                        flexDirection: 'row',
                        height: scale(2),
                        width: scale(50),
                        backgroundColor: this.props.step >= 3 ? Colors._1ea7ea : Colors.grey
                    }} />

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: scale(50),
                        width: scale(50),
                        borderRadius: scale(25),
                        borderColor: this.props.step >= 3 ? Colors._1ea7ea : Colors.grey,
                        borderWidth: scale(1)
                    }}>
                        <Entypo name="camera" size={30} color={this.props.step >= 3 ? Colors._1ea7ea : Colors.grey} />
                    </View>
                    {/* <Text style={[AppStyle.Small_Center_Grey, {marginTop: scale(5)}]}> {'CHỨNG TỪ'}</Text> */}
                </View>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Text style={[AppStyle.Small_Center_Grey, {
                        marginTop: scale(5),
                        marginLeft: - scale(15),
                        color: this.props.step >= 1 ? Colors._1ea7ea : Colors.grey,
                    }]}> {'NƠI LÀM VIỆC'}</Text>
                    <View style={{
                        flexDirection: 'row',
                        width: scale(30),
                    }} />
                    <Text style={[AppStyle.Small_Center_Grey, {
                        marginTop: scale(5),
                        color: this.props.step >= 2 ? Colors._1ea7ea : Colors.grey,
                    }]}> {'THAM CHIẾU'}</Text>
                    <View style={{
                        flexDirection: 'row',
                        width: scale(25),
                    }} />
                    <Text style={[AppStyle.Small_Center_Grey, {
                        marginTop: scale(5),
                        color: this.props.step >= 3 ? Colors._1ea7ea : Colors.grey,
                    }]}> {'CHỨNG TỪ'}</Text>
                </View>
            </View>
        )
    }
}

TaskConsultant.propTypes = {
    step: PropTypes.number,
}

TaskConsultant.defaultProps = {
    step: 1,
}