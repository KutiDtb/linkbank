import React, { PureComponent } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { scale } from '../../theme/scaling';
import { AppStyle, Colors } from '../../theme';
import { PropTypes } from 'prop-types'
import Modal from 'react-native-modal'
import PureFlastList from '../flatlist/PureFlatList'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

var loanModal = [
    { label: 'Thẻ tín dụng', value: '1' },
    { label: 'Vay theo bảng lương', value: '2' },
    { label: 'Vay theo đăng ký xe máy', value: '3' },
    { label: 'Vay theo bảo hiểm nhân thọ', value: '4' },
    { label: 'Vay theo hóa đơn điện nước', value: '5' },
    { label: 'Vay theo thẻ tín dụng', value: '6' },
    { label: 'Vay theo hộ kinh doanh cá thể', value: '7' },
    { label: 'Vay theo hợp đồng tín dụng khác', value: '8' },
    { label: 'Vay theo số dư tài khoản ngân hàng', value: '9' },
    { label: 'Vay theo hóa đơn mua hàng siêu thị', value: '10' },
    { label: 'Vay theo đăng ký xe ô tô', value: '11' },
    { label: 'Vay thế chấp ô tô', value: '12' },
    { label: 'Vay thế chấp bất động sản', value: '13' },
    { label: 'Vay theo giấy phép kinh doanh', value: '14' },
    { label: 'Vay trả góp theo ngày', value: '15' },
    { label: 'Vay theo sim điện thoại', value: '16' },
]

export default class FindModalLoan extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            result: this.getResult(),
            value: this.props.value,
            render: 0,
        }
    }

    getResult() {
        var vProp = this.props.value
        var result = []
        for(var i=0; i<vProp.length; i++) {
            result.push(vProp[i].value)
        }
        return result
    }

    renderItem(item) {
        var icon = <MaterialIcons name="check-box-outline-blank" size={30} color={Colors.black} />
        // console.log('this.state.result', JSON.stringify(this.state.result), 'item.value', item.value)
        if (this.state.result.includes(item.value)) {
            icon = <MaterialIcons name="check-box" size={30} color={Colors._1ea7ea} />
        }
        return (
            <TouchableOpacity style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                width: '100%',
                // height: scale(30),
                alignItems: 'center',
            }} key={'loan-' + item.value} onPress={() => {
                var value = item.value
                if (this.state.result.includes(value)) {
                    this.actionRemoveValue(value, item.label)
                } else {
                    this.actionAddValue(value, item.label)
                }
            }}>
                {icon}
                <Text style={AppStyle.Small_Center_Black}> {item.label}</Text>
            </TouchableOpacity>
        )
    }


    renderLoan() {
        var template = []
        for (var i = 0; i < loanModal.length; i++) {
            template.push(
                this.renderItem(loanModal[i])
            )
        }
        return template
    }

    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <Modal
                    isVisible={this.props.showModal}
                    backdropColor={Colors.black}
                    backdropOpacity={0.7}
                    style={{

                    }}
                    onBackdropPress={() => {
                    }}
                >

                    <View style={{
                        justifyContent: 'space-between',
                        padding: scale(20),
                        borderRadius: scale(5),
                        backgroundColor: Colors.whiteTwo,
                        opacity: 1,
                    }} >
                        <View style={{
                        }} >
                            <Text style={AppStyle.Paragraph_Left_Black}> {this.props.name}</Text>
                        </View>

                        <View style={{
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginTop: scale(20),
                        }} >
                            {this.renderLoan()}
                        </View>

                        <TouchableOpacity style={{
                            marginTop: scale(20),
                            justifyContent: 'center',
                            alignItems: 'center',
                        }} onPress={() => {
                            if (this.props.actionModalResult) {
                                this.props.actionModalResult(this.state.value)
                            }
                        }}>
                            <Text style={AppStyle.Paragraph_Center_Red}> {'Xem kết quả'}</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        )
    }

    actionAddValue(value, label) {
        var newResult = this.state.result
        newResult.push(value)
        var newValue = this.state.value
        newValue.push({
            label,
            value
        })

        this.setState({
            value: newValue,
            result: newResult,
            render: this.state.render + 1,
        })
        // console.log('reseult', JSON.stringify(newResult))
    }

    actionRemoveValue(value, label) {
        var newResult = this.state.result
        var i = newResult.indexOf(value)

        newResult.splice(i, 1)

        var newValue = this.state.value
        newValue.splice(i, 1)
        this.setState({
            value: newValue,
            result: newResult,
            render: this.state.render - 1
        })
        // console.log('reseult', JSON.stringify(newResult))
    }
}

FindModalLoan.propTypes = {
    name: PropTypes.string,
    // data: PropTypes.object,
}

FindModalLoan.defaultProps = {
    // data: [],
}