import React, { PureComponent } from 'react';
import { Text, View, TextInput, Platform, TouchableOpacity } from 'react-native';
import { scale } from '../../theme/scaling';
import { AppStyle, Colors } from '../../theme';
import { PropTypes } from 'prop-types'
import Modal from 'react-native-modal'
import InputType3 from '../../components/input/InputType3'
import config from '../../config/config'

export default class ChannelModalOTP extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            otp: '',
        }
    }

    render() {
        return (
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
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: scale(20),
                    borderRadius: scale(5),
                    backgroundColor: Colors.whiteTwo,
                    opacity: 1,
                    height: scale(150),
                }} >
                    <InputType3
                        keyboardType={'numeric'}
                        title={'OTP'}
                        placeholder={'OTP'}
                        onChangeText={(text) => this.onChangeOTP(text)}
                        styleInput={{
                            borderColor: Colors._1ea7ea,
                            borderWidth: scale(1),
                            borderRadius: scale(5),
                            backgroundColor: Colors.whiteTwo,
                            paddingLeft: scale(20),
                        }}
                        maxLength={6}
                    />

                    <TouchableOpacity style={{
                        marginTop: scale(20),
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} onPress={() => {
                        if (this.props.actionResult) {
                            this.props.actionResult(this.state.otp)
                        }
                    }}>
                        <Text style={AppStyle.Paragraph_Center_Red}> {'Gửi kết quả'}</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }

    onChangeOTP(text) {
        this.setState({
            otp: text
        })
    }
}

ChannelModalOTP.propTypes = {
    name: PropTypes.string,
}

ChannelModalOTP.defaultProps = {
    // editable: true,
}