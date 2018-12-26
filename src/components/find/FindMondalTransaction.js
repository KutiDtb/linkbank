import React, { PureComponent } from 'react';
import { Text, View, TextInput, Platform, TouchableOpacity } from 'react-native';
import { scale } from '../../theme/scaling';
import { AppStyle, Colors } from '../../theme';
import { PropTypes } from 'prop-types'
import Modal from 'react-native-modal'
import config from '../../config/config'
import PureFlastList from '../flatlist/PureFlatList'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class FindModalTransaction extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                { label: 'Tất cả giao dịch', value: 'ALL' },
                { label: 'Tư vấn viên nhận đơn', value: 'buyTicket' },
                { label: 'Tư vấn viên nạp tiền', value: 'cashin' },],

            value: this.props.value,
        }
    }

    renderTicket(item) {
        if (item.value === this.state.value) {
            return (
                <AntDesign name="check" size={30} color={Colors.alive_BD3F32} />
            )
        }
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={{
                justifyContent: 'space-between',
                paddingLeft: scale(20),
                height: scale(50),
                flexDirection: 'row',
                alignItems: 'center',
                paddingRight: scale(20),
            }} onPress={() => {
                if (this.props.actionModalResult) {
                    this.props.actionModalResult(item)
                }
            }}>
                <Text style={AppStyle.Title_Left_Black}> {item.label}</Text>
                {this.renderTicket(item)}
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <Modal
                isVisible={this.props.showModal}
                backdropColor={Colors.black}
                backdropOpacity={0.7}
                swipeDirection={'down'}
                style={{
                    margin: 0,
                    justifyContent: 'flex-end',
                }}
                // deviceWidth={deviceWidth}
                // deviceHeight={deviceHeight}
                onBackdropPress={() => {
                    if (this.props.actionHide) {
                        this.props.actionHide()
                    }
                }}
            >
                <View style={{
                    backgroundColor: Colors.whiteTwo,
                }}>
                    <View style={{
                        justifyContent: 'space-between',
                        paddingLeft: scale(20),
                        height: scale(50),
                        borderBottomColor: Colors.whiteThree,
                        borderBottomWidth: scale(1),
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}>
                        <TouchableOpacity onPress={() => {
                            if (this.props.actionHide) {
                                this.props.actionHide()
                            }
                        }}>
                            <AntDesign name="close" size={30} color={Colors.black} />
                        </TouchableOpacity>
                        <Text style={AppStyle.Title_Center_Black}> {'Giao dịch'}</Text>
                        <View />
                    </View>

                    <PureFlastList
                        data={this.state.data}
                        renderItem={this.renderItem}
                        horizontal={false}
                        viewSeparate={<View style={{
                            backgroundColor: Colors.whiteThree,
                            height: scale(1)
                        }} />}
                    />
                </View>
            </Modal>
        )
    }

}

FindModalTransaction.propTypes = {
}

FindModalTransaction.defaultProps = {
}