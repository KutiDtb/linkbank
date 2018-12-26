import React, { PureComponent } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { scale } from '../../theme/scaling';
import { AppStyle, Colors, Images } from '../../theme';
import { PropTypes } from 'prop-types'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default class LandModal extends PureComponent {
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
                    {this.renderModal('TO_RENT', 'Thuê', this.state.value.includes('1'),
                        <Image style={{
                            width: scale(132),
                            height: scale(120)
                        }} resizeMode={'contain'} source={Images.land.toRent} />)}
                    {this.renderModal('FOR_RENT', 'Cho thuê', this.state.value.includes('1'),
                        <Image style={{
                            width: scale(132),
                            height: scale(120)
                        }} resizeMode={'contain'} source={Images.land.forRent} />)}
                </View>
                <View style={{
                    marginTop: scale(10),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                    {this.renderModal('BUY', 'Mua', this.state.value.includes('1'),
                        <Image style={{
                            width: scale(132),
                            height: scale(120)
                        }} resizeMode={'contain'} source={Images.land.buy} />)}
                    {this.renderModal('SALE', 'Bán', this.state.value.includes('1'),
                        <Image style={{
                            width: scale(132),
                            height: scale(120)
                        }} resizeMode={'contain'} source={Images.land.sale} />)}
                </View>
                
            </View>
        )
    }

}

LandModal.propTypes = {

}

LandModal.defaultProps = {

}