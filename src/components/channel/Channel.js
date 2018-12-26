import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { scale } from '../../theme/scaling';
import { AppStyle, Colors } from '../../theme';
import { PropTypes } from 'prop-types'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class Channel extends PureComponent {

    renderComplete() {
        var icon = ''
        if (this.props.complete) {
            icon =  (
                <AntDesign name="check" size={30} color={Colors.red} style={{ marginLeft: scale(5) }} />
            )
        } else {
            icon =  (
                <AntDesign name="close" size={30} color={Colors.black} style={{ marginLeft: scale(5) }} />
            )
        }
        return (
            <View style={{
                backgroundColor: Colors.grey,
                height: scale(30),
                justifyContent: 'center',
                alignItems: 'center',
            }}> 
                {icon}
            </View>
        )
    }
    render() {
        return (
            <TouchableOpacity style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: Colors.whiteTwo,
                height: scale(45),
                marginTop: scale(10),
                borderRadius: scale(5),
                paddingLeft: scale(10),
                paddingRight: scale(20),
            }} onPress={() => {
                if (this.props.actionClick && !this.props.complete) {
                    this.props.actionClick()
                }
            }} >
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderRadius: scale(5)
                }}>
                    {this.props.iconLeft}
                    <Text style={[AppStyle.Paragraph_Left_Black, { marginLeft: scale(20) }]}>{this.props.task}</Text>
                </View>

                {this.renderComplete()}
            </TouchableOpacity>

        )
    }
}

Channel.propTypes = {
    task: PropTypes.string,
    complete: PropTypes.bool,
}

Channel.defaultProps = {
    complete: false
}