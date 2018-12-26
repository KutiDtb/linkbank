import React, { PureComponent } from 'react';
import { Text, View, TextInput, Platform, TouchableOpacity } from 'react-native';
import { scale } from '../../theme/scaling';
import { AppStyle, Colors } from '../../theme';
import { PropTypes } from 'prop-types'
import Modal from 'react-native-modal'
import Picker from '../input/Picker'
import config from '../../config/config'

export default class FindModalOrganize extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
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
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: scale(20),
                    }} >
                        <Picker
                            data={config.company}
                            styleInput={{
                                marginTop: scale(5),
                                borderColor: Colors._1ea7ea,
                                borderWidth: scale(1),
                                borderRadius: scale(5),
                                padding: scale(0),
                                backgroundColor: Colors.whiteTwo,
                                width: '100%',
                                height: Platform.OS === 'ios' ? scale(40) : scale(40),
                                paddingTop: Platform.OS === 'ios' ? scale(5) : scale(0),
                                paddingLeft: scale(20),
                            }}
                            onValueChange={(text) => this.onChangeWard(text)}
                        />
                    </View>

                    <TouchableOpacity style={{
                        marginTop: scale(20),
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} onPress={() => {
                        if (this.props.actionModalResult) {
                            this.props.actionModalResult()
                        }
                    }}>
                        <Text style={AppStyle.Paragraph_Center_Red}> {'Xem kết quả'}</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }
    onChangeOrganize(text) {
        console.log(text)
    }
}

FindModalOrganize.propTypes = {
    name: PropTypes.string,
}

FindModalOrganize.defaultProps = {
    // editable: true,
}