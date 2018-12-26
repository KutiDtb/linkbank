import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, Platform } from 'react-native'
import { scale } from '../../theme/scaling'
import { AppStyle, Colors } from '../../theme'
import { PropTypes } from 'prop-types'
import RNPickerSelect from 'react-native-picker-select'
// var data = [{key: 'Hưởng lương hằng tháng', value: 'worker'}, {key: 'Chủ kinh doanh', value: 'business'}]

export default class InputPicker extends PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            value: this.props.value,
        }
    }

    showTitle() {
        if (this.props.showCoppyData) {
            return (
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }} >
                    <Text style={AppStyle.Paragraph_Left_Black}> {this.props.name}</Text>
                    <TouchableOpacity onPress={() => {
                        if (this.props.actionCoppy) {
                            this.props.actionCoppy()
                        }
                    }}>
                        <Text style={AppStyle.Paragraph_Right_Black}> {'Giống địa chỉ hộ khẩu'}</Text>
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <Text style={AppStyle.Paragraph_Left_Black}> {this.props.name}</Text>
            )
        }

    }

    render() {
        return (
            <View style={{
                flexDirection: 'column',
                marginTop: scale(10),
            }} >
                {this.showTitle()}
                <View style={{
                    justifyContent: 'center',
                    height: scale(50),
                    ...this.props.styleInput
                }} >
                    <RNPickerSelect
                        hideIcon={true}
                        disabled={!this.props.editable}
                        useNativeAndroidPickerStyle={true}
                        placeholder={{
                            label: this.props.placeholder,
                            value: null,
                        }}
                        items={this.props.data}
                        onValueChange={(value) => this.onChangeItem(value)}
                        onUpArrow={() => {
                        }}
                        onDownArrow={() => {
                        }}
                        style={{
                            underline: {
                                borderTopWidth: 0,
                            },
                            viewContainer: {
                                marginTop: Platform.OS === 'ios' ? scale(7) : - scale(5),
                            }
                        }}
                        placeholderTextColor={
                            Colors.black
                        }
                        value={this.state.value}
                        ref={(el) => {
                            this.inputRefs = el;
                        }}
                    />
                </View>
            </View>
        )
    }

    onChangeItem(value) {
        this.setState({
            value
        })

        if (this.props.onValueChange) {
            this.props.onValueChange(value)
        }
    }

}

InputPicker.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    editable: PropTypes.bool,
    showCoppyData: PropTypes.bool,
}
InputPicker.defaultProps = {
    placeholder: 'Vui lòng chọn',
    value: '',
    editable: true,
    showCoppyData: false,
}