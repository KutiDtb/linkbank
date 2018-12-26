import React, { PureComponent } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { scale } from '../../theme/scaling';
import { AppStyle, Colors, Images } from '../../theme';
import { PropTypes } from 'prop-types'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default class LoanModal extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            value: [],
            features: [],
            render: 0
        }
    }

    getColorByKey(key) {
        switch (key) {
            case '1':
                return '#ff7373'
            case '2':
                return '#003366'
            case '3':
                return '#c0c0c0'
            case '4':
                return '#20b2aa'
            case '5':
                return '#ffc3a0'
            case '6':
                return '#f6546a'
            case '7':
                return '#c39797'
            case '8':
                return '#468499'
            case '9':
                return '#008000'
            case '10':
                return '#bada55'
            case '11':
                return '#ff7f50'
            case '12':
                return '#660066'
            case '13':
                return '#00ced1'
            case '14':
                return '#088da5'
            case '15':
                return '#990000'
            default:
                return Colors.e18513
        }
    }

    renderModal(key, feature, active, myIcon) {
        var icon = <MaterialIcons name="check-box-outline-blank" size={20} color={Colors.black} />
        if (active) {
            icon = <MaterialIcons name="check-box" size={20} color={Colors._1ea7ea} />
        }
        return (
            <TouchableOpacity style={{
                flexDirection: 'column',
                width: scale(110),
                height: scale(110),
                // backgroundColor: Colors.whiteTwo,
                justifyContent: 'center',
                alignItems: 'center',
                padding: scale(10)
            }} onPress={() => {
                if (active) {
                    this.actionClickRemove(key, feature)
                } else {
                    this.actionClickAdd(key, feature)
                }
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    <View style={{
                        flexDirection: 'column',
                        width: scale(60),
                        height: scale(60),
                        borderRadius: scale(30),
                        backgroundColor: this.getColorByKey(key),
                        marginLeft: scale(10),
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        {myIcon}
                    </View>
                    {icon}
                </View>
                <Text style={[AppStyle.Small_Center_Black, { marginTop: scale(5) }]}>{feature}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        // console.log('value', JSON.stringify(this.state.value))
        return (
            <View style={{
                flex: 1,
                marginTop: scale(10),
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    // backgroundColor: Colors.whiteTwo,
                    // marginTop: scale(10),
                }}>
                    {this.renderModal('1', 'Vay theo bảng lương', this.state.value.includes('1'),
                        <Entypo name="text-document" size={30} color={Colors.whiteTwo} />)}
                    {this.renderModal('2', 'Vay theo đăng ký xe máy', this.state.value.includes('2'),
                        <MaterialCommunityIcons name="motorbike" size={30} color={Colors.whiteTwo} />)}
                    {this.renderModal('3', 'Vay theo bảo hiểm nhân thọ', this.state.value.includes('3'),
                        <FontAwesome name="umbrella" size={30} color={Colors.whiteTwo} />)}
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    // backgroundColor: Colors.whiteTwo,
                    // marginTop: scale(10),
                }}>
                    {this.renderModal('4', 'Vay theo hóa đơn điện nước', this.state.value.includes('4'),
                        <MaterialCommunityIcons name="water-pump" size={30} color={Colors.whiteTwo} />)}
                    {this.renderModal('5', 'Vay theo thẻ tín dụng', this.state.value.includes('5'),
                        <AntDesign name="creditcard" size={30} color={Colors.whiteTwo} />)}
                    {this.renderModal('14', 'Vay theo hộ kinh doanh cá thể', this.state.value.includes('14'),
                        <Entypo name="shop" size={30} color={Colors.whiteTwo} />)}
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    // backgroundColor: Colors.whiteTwo,
                    // marginTop: scale(10),
                }}>
                    {this.renderModal('7', 'Vay theo hợp đồng tín dụng khác', this.state.value.includes('7'),
                        <FontAwesome5 name="file-contract" size={30} color={Colors.whiteTwo} />)}
                    {this.renderModal('8', 'Vay theo số dư tài khoản ngân hàng', this.state.value.includes('8'),
                        <FontAwesome5 name="piggy-bank" size={30} color={Colors.whiteTwo} />)}
                    {this.renderModal('9', 'Vay theo hóa đơn mua hàng siêu thị', this.state.value.includes('9'),
                        <MaterialCommunityIcons name="file-document-box-multiple-outline" size={30} color={Colors.whiteTwo} />)}
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    // backgroundColor: Colors.whiteTwo,
                    // marginTop: scale(10),
                }}>
                    {this.renderModal('10', 'Vay theo đăng ký xe ô tô', this.state.value.includes('10'),
                        <FontAwesome5 name="car-side" size={30} color={Colors.whiteTwo} />)}
                    {this.renderModal('11', 'Vay thế chấp ô tô', this.state.value.includes('11'),
                        <MaterialCommunityIcons name="car-limousine" size={30} color={Colors.whiteTwo} />)}
                    {this.renderModal('12', 'Vay thế chấp bất động sản', this.state.value.includes('12'),
                        <FontAwesome5 name="house-damage" size={30} color={Colors.whiteTwo} />)}
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    // backgroundColor: Colors.whiteTwo,
                    // marginTop: scale(10),
                }}>
                    {this.renderModal('13', 'Vay theo giấy phép kinh doanh', this.state.value.includes('13'),
                        <Ionicons name="ios-today" size={30} color={Colors.whiteTwo} />)}
                    {this.renderModal('15', 'Vay trả góp theo ngày', this.state.value.includes('15'),
                        <FontAwesome5 name="person-booth" size={30} color={Colors.whiteTwo} />)}
                    {this.renderModal('6', 'Vay theo sim điện thoại', this.state.value.includes('6'),
                        <MaterialIcons name="sim-card" size={30} color={Colors.whiteTwo} />)}
                </View>
            </View>
        )
    }

    actionClickAdd(key, feature) {
        var value = this.state.value
        value.push(key)
        var features = this.state.features
        features.push(feature)

        if (value.length > this.props.maxLength) {
            value.shift()
            features.shift()
        }

        // console.log('actionClickAdd', JSON.stringify(value))
        this.setState({
            value,
            features,
            render: this.state.render + 1
        })

        if (this.props.actionClick) {
            this.props.actionClick(features)
        }
    }

    actionClickRemove(key, feature) {
        var value = this.state.value
        var features = this.state.features
        // console.log('after actionClickRemove', JSON.stringify(value))
        var i = value.indexOf(key)

        value.splice(i, 1)
        features.splice(i, 1)
        // console.log('actionClickRemove', JSON.stringify(value), 'i', i)
        this.setState({
            value,
            features,
            render: this.state.render - 1
        })

        if (this.props.actionClick) {
            this.props.actionClick(features)
        }
    }
}

LoanModal.propTypes = {

}

LoanModal.defaultProps = {

}