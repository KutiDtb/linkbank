import React, { PureComponent } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { scale } from '../../theme/scaling';
import { AppStyle, Colors, Images } from '../../theme';
import { PropTypes } from 'prop-types'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default class InsuranceModal extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            value: [],
            render: 0
        }
    }

    renderModal(key, feature, active, myIcon) {
        return (
            <TouchableOpacity style={{
                flexDirection: 'column',
                width: scale(172),
                height: scale(172),
                backgroundColor: Colors.whiteTwo,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: scale(10),
                padding: scale(10)
                // marginLeft: scale(10)
            }} onPress={() => {
                if (this.props.actionClick) {
                    this.props.actionClick(key)
                }
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    {myIcon}
                </View>
                <Text style={[AppStyle.Paragraph_Center_Black, { marginTop: scale(0) }]}>{feature}</Text>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    {this.renderModal('MANULIFE', 'Bảo hiểm nhân thọ Manulife', this.state.value.includes('1'),
                        <Image style={{
                            width: scale(132),
                            height: scale(120)
                        }} resizeMode={'contain'} source={Images.insurance.manulife} />)}
                    {this.renderModal('LIBERTY', 'Bảo hiểm liberty', this.state.value.includes('1'),
                        <Image style={{
                            width: scale(132),
                            height: scale(120)
                        }} resizeMode={'contain'} source={Images.insurance.liberty} />)}
                </View>
                <View style={{
                    marginTop: scale(10),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    {this.renderModal('UPDATE', 'Đang cập nhật', this.state.value.includes('2'),
                        <MaterialCommunityIcons name="update" size={scale(125)} color={Colors.whiteThree} />)}
                </View>
                
            </View>
        )
    }

}

InsuranceModal.propTypes = {

}

InsuranceModal.defaultProps = {

}