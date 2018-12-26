import React, { PureComponent } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { scale } from '../../theme/scaling';
import { AppStyle, Colors } from '../../theme';
import { PropTypes } from 'prop-types'
import Modal from 'react-native-modal'
import config from '../../config/config'
import Picker from '../../components/input/Picker'

export default class FindModalSalary extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value
        }
    }

    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <Modal
                    isVisible={this.props.showModal}
                    backdropColor={Colors.black}
                    backdropOpacity={0.7}
                    style={{

                    }}
                    onBackdropPress={() => {
                    }}
                >

                    <View style={{
                        height: scale(150),
                        justifyContent: 'space-between',
                        padding: scale(20),
                        borderRadius: scale(5),
                        backgroundColor: Colors.whiteTwo,
                        opacity: 1,
                    }} >
                        <View style={{
                        }} >
                            <Text style={AppStyle.Paragraph_Left_Black}> {this.props.name}</Text>
                        </View>

                        <Picker
                            data={config.salary}
                            styleInput={{
                                marginTop: scale(5),
                                borderColor: Colors._1ea7ea,
                                borderWidth: scale(1),
                                borderRadius: scale(5),
                                padding: scale(0),
                                backgroundColor: Colors.whiteTwo,
                                paddingLeft: scale(20),
                            }}
                            onValueChange={(text) => this.onChangeSalary(text)}
                            value={this.state.value}
                        />
                        <TouchableOpacity style={{
                            marginTop: scale(20),
                            justifyContent: 'center',
                            alignItems: 'center',
                        }} onPress={() => {
                            if (this.props.actionModalResult) {
                                this.props.actionModalResult(this.state.value)
                            }
                        }}>
                            <Text style={AppStyle.Paragraph_Center_Red}> {'Xem kết quả'}</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        )
    }

    onChangeSalary(value) {
        this.setState({
            value
        })
    }
}

FindModalSalary.propTypes = {
    name: PropTypes.string,
}

FindModalSalary.defaultProps = {
    // editable: true,
}