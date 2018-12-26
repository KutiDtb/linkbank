import React, { PureComponent } from 'react';
import { Text, View, TouchableOpacity, Platform } from 'react-native';
import { scale } from '../../theme/scaling';
import { AppStyle, Colors } from '../../theme';
import { PropTypes } from 'prop-types'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Picker from '../input/Picker'
import RNPickerSelect from 'react-native-picker-select'
import config from '../../config/config'

export default class TaskDocumentPicker extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }

    render() {
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: Colors.whiteTwo,
                height: scale(45),
                marginTop: scale(10),
                borderRadius: scale(5),
                paddingRight: scale(20),
            }}>

                <Picker
                    data={this.props.data}
                    placeholder={this.props.placeholder}
                    styleInput={{
                        flex: 1,
                        borderWidth: scale(0),
                        marginTop: 0,
                        paddingLeft: scale(10),
                        backgroundColor: Colors.whiteTwo,
                        height: Platform.OS === 'ios' ? scale(40) : scale(40),
                    }}
                    onValueChange={(text) => this.onChangeWard(text)}
                />

                <AntDesign name="camera" size={30} color={Colors._1ea7ea} style={{ marginLeft: scale(5) }} />
            </View>

        )
    }

    onChangeWard(text) {
        console.log(text)
    }
}

TaskDocumentPicker.propTypes = {
    task: PropTypes.string,
    complete: PropTypes.bool,
}

TaskDocumentPicker.defaultProps = {
    complete: false
}