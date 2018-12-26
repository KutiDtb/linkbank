import React, { PureComponent } from 'react';
import { Text, View, TextInput, Platform, TouchableOpacity } from 'react-native';
import { scale } from '../../theme/scaling';
import { AppStyle, Colors } from '../../theme';
import { PropTypes } from 'prop-types'
import Modal from 'react-native-modal'
import config from '../../config/config'
import PureFlastList from '../../components/flatlist/PureFlatList'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class FindModalMonth extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            // data: [{ label: 'Tất cả các tháng', value: 'ALL' }, { label: 'Tháng 06/2018', value: '06/2018' }, { label: 'Tháng 07/2018', value: '07/2018' },
            // { label: 'Tháng 08/2018', value: '08/2018' }, { label: 'Tháng 09/2018', value: '09/2018' },],
            data: this.props.data,
            value: this.props.value,
        }
    }

    renderTicket(item){
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
                        <Text style={AppStyle.Title_Center_Black}> {'Thời gian'}</Text>
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

FindModalMonth.propTypes = {
    name: PropTypes.string,
}

FindModalMonth.defaultProps = {
    // editable: true,
}