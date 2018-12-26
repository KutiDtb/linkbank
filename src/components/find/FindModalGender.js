import React, { PureComponent } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { scale } from '../../theme/scaling';
import { AppStyle, Colors } from '../../theme';
import { PropTypes } from 'prop-types'
import Modal from 'react-native-modal'

export default class FindModalGender extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            value: 'ALL'
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
                            <Text style={AppStyle.Paragraph_Left_Black}> {this.props.name}</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: scale(40),
                            // borderColor: Colors.grey,
                            // borderWidth: scale(1),
                            // borderRadius: scale(5),
                            marginTop: scale(20),
                        }} >
                            <TouchableOpacity style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: scale(100),
                                height: scale(40),
                                borderRadius: scale(5),
                                borderWidth: scale(1),
                                borderColor: this.state.value === 'NAM' ? Colors.red : Colors.grey
                            }} onPress={() => this.onChangeGender('NAM')}>
                                <Text style={AppStyle.Paragraph_Center_Grey}> {'Nam'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: scale(100),
                                height: scale(40),
                                borderRadius: scale(5),
                                borderWidth: scale(1),
                                borderColor: this.state.value === 'NU' ? Colors.red : Colors.grey
                            }} onPress={() => this.onChangeGender('NU')}>
                                <Text style={AppStyle.Paragraph_Center_Grey}> {'Nữ'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: scale(100),
                                height: scale(40),
                                borderRadius: scale(5),
                                borderWidth: scale(1),
                                borderColor: this.state.value === 'ALL' ? Colors.red : Colors.grey
                            }} onPress={() => this.onChangeGender('ALL')}>
                                <Text style={AppStyle.Paragraph_Center_Grey}> {'Tất cả'}</Text>
                            </TouchableOpacity>
                        </View>

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

    onChangeGender = (gender) => {
        this.setState({
            value: gender
        })
    }
}

FindModalGender.propTypes = {
    name: PropTypes.string,
}

FindModalGender.defaultProps = {
    // editable: true,
}