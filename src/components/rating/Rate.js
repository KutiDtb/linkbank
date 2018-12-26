import React, { PureComponent } from 'react';
import { Text, View, TextInput, Image } from 'react-native';
import { scale, verticalScale } from '../../theme/scaling';
import { AppStyle, Colors, Images } from '../../theme';
import { PropTypes } from 'prop-types'
import Entypo from 'react-native-vector-icons/Entypo'

export default class Rate extends PureComponent {

    render() {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems:'center',
            }}
            >
                <Text style={AppStyle.Small_Left_Black}>{this.props.id}</Text>
                <Entypo name="star" size={20} color={'#f1c40f'} style={{marginLeft: scale(5)}}/>
                <View style={{
                    flexDirection: 'row',
                    borderRadius: scale(5),
                    backgroundColor: Colors.whiteThree,
                    height: scale(10),
                    width: scale(100),
                    marginLeft: scale(10)
                }} >
                    <View style={{
                        flexDirection: 'row',
                        borderRadius: scale(5),
                        backgroundColor: Colors.grey,
                        height: scale(10),
                        width: scale(this.props.score),
                        position: 'relative'
                    }} >
                    </View>
                </View>
                <Text style={[AppStyle.Small_Left_Black, {marginLeft: scale(5)}]}>{this.props.score + ' %'}</Text>
            </View>

        )
    }
}

Rate.propTypes = {
    id: PropTypes.number,
    score: PropTypes.number,
    // backgroundColor: PropTypes.string,
    // placeholder: PropTypes.string,
    // keyboardType: PropTypes.string,
    // editable: PropTypes.bool,
    // multiline: PropTypes.bool,
}

Rate.defaultProps = {
    // backgroundColor: Colors.whiteThree,
    // editable: true,
    // multiline: false
}