import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { scale } from '../../theme/scaling';
import { AppStyle, Colors } from '../../theme';
import { PropTypes } from 'prop-types'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class Task extends PureComponent {

    renderComplete() {
        if (this.props.complete) {
            return (
                <AntDesign name="checksquare" size={30} color={Colors.red} style={{ marginLeft: scale(5) }} />
            )
        } else {
            return (
                <AntDesign name="closesquare" size={30} color={Colors.black} style={{ marginLeft: scale(5) }} />
            )
        }
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
                if (this.props.actionClick) {
                    this.props.actionClick()
                }
            }} >
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderRadius: scale(5)
                }}>
                    {this.props.iconLeft}
                    <Text style={[AppStyle.Paragraph_Left_Black, { marginLeft: scale(10) }]}>{this.props.task}</Text>
                </View>

                {this.renderComplete()}
            </TouchableOpacity>

        )
    }
}

Task.propTypes = {
    task: PropTypes.string,
    complete: PropTypes.bool,
}

Task.defaultProps = {
    complete: false
}