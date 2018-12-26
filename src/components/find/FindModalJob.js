import React, { PureComponent } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { scale } from '../../theme/scaling';
import { AppStyle, Colors } from '../../theme';
import { PropTypes } from 'prop-types'
import Modal from 'react-native-modal'
import config from '../../config/config'
import Picker from '../../components/input/Picker'

export default class FindModalJob extends PureComponent {

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
                    // transparent={true}
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
                            <Text style={AppStyle.Paragraph_Left_Black}> {'Công việc'}</Text>
                        </View>

                        <Picker
                            data={config.job}
                            styleInput={{
                                marginTop: scale(5),
                                borderColor: Colors._1ea7ea,
                                borderWidth: scale(1),
                                borderRadius: scale(5),
                                padding: scale(0),
                                backgroundColor: Colors.whiteTwo,
                                paddingLeft: scale(20),
                            }}
                            onValueChange={(text) => this.onChangeJob(text)}
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

    onChangeJob(value) {
        this.setState({
            value: value
        })
        // if (this.props.actionModalResult) {
        //     this.props.actionModalResult(value)
        // }
    }
}

FindModalJob.propTypes = {
    name: PropTypes.string,
}

FindModalJob.defaultProps = {
    // editable: true,
}