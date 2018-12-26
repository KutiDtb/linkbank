import React, { PureComponent } from 'react';
import { Text, View, Platform, Picker } from 'react-native'
import { PropTypes } from 'prop-types'
import { scale, verticalScale } from '../../theme/scaling';
import { AppStyle, Colors } from '../../theme';
import RNPickerSelect from 'react-native-picker-select'

export default class MyPicker extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value
        }
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.enableReceive === true && nextProps.value !== this.state.value) {
            this.setState({
                value: nextProps.value
            })
        }
    }

    renderPicker() {
        var values = []
        for (var i = 0; i < this.props.data.length; i++) {
            var item = this.props.data[i]
            values.push(
                <Picker.Item key={i} label={item.key} value={item.value} />
            )
        }
        return values
    }

    render() {
        return (
            <View style={{
                flexDirection: 'column',
                marginTop: verticalScale(10),
                borderRadius: 5,
                paddingTop: verticalScale(5),
                paddingLeft: scale(20),
                backgroundColor: this.props.backgroundColor,
                borderColor: Colors.whiteThree,
                borderWidth: scale(2),
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

MyPicker.propTypes = {
    placeholder: PropTypes.string,
    backgroundColor: PropTypes.string,
    data: PropTypes.array,
    value: PropTypes.string,
    editable: PropTypes.bool,
}
MyPicker.defaultProps = {
    placeholder: 'Vui lòng chọn',
    backgroundColor: Colors.whiteThree,
    data: [],
    value: '',
    editable: true,
}