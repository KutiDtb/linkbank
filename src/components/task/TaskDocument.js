import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { scale } from '../../theme/scaling';
import { AppStyle, Colors } from '../../theme';
import { PropTypes } from 'prop-types'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class TaskDocument extends PureComponent {

    renderIcon() {
        var icon = ''
        if (this.props.complete) {
            icon = (
                <AntDesign name="check" size={30} color={Colors.alive_BD3F32} style={{ marginLeft: scale(5) }} />
            )
        } else {
            icon = (
                <AntDesign name="camera" size={30} color={Colors._1ea7ea} style={{ marginLeft: scale(5) }} />
            )
        }
        return icon
    }

    renderContent() {
        if (this.props.source) {
            return (
                <Image style={{
                    width: scale(300),
                    height: scale(300)
                }} resizeMode={'contain'} source={this.props.source} />
            )
        } else {
            return (
                <Text style={[AppStyle.Paragraph_Left_Black, { marginLeft: scale(10) }]}>{this.props.task}</Text>
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
                height: this.props.source ? null : scale(45),
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
                    {this.renderContent()}
                </View>

                {this.renderIcon()}
            </TouchableOpacity>

        )
    }
}

TaskDocument.propTypes = {
    task: PropTypes.string,
    complete: PropTypes.bool,
}

TaskDocument.defaultProps = {
    complete: false
}