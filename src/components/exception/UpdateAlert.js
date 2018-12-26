import React, { PureComponent } from 'react';
import { Text, View, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { scale } from '../../theme/scaling';
import { AppStyle, Colors, Images } from '../../theme';
import { PropTypes } from 'prop-types'
import Modal from 'react-native-modal'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient'

export default class UpdateAlert extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            // <View style={{
            //     flex: 1
            // }}>
                <Modal
                    // transparent={true}
                    isVisible={this.props.showModal}
                    backdropColor={Colors.black}
                    backdropOpacity={0.7}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onBackdropPress={() => {
                        if (this.props.allowHide && this.props.hideModal) {
                            this.props.hideModal()
                        }
                    }}
                >

                    <View style={{
                        width: '80%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: Colors.whiteTwo,
                        borderRadius: scale(5),
                    }} >
                        <View style={{
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',

                        }} >
                            <LinearGradient
                                colors={[Colors.alive_CB356B, Colors.alive_BD3F32]}
                                start={{ x: 0.0, y: 0.9 }} end={{ x: 0.9, y: 1.0 }}
                                locations={[0, 1]}
                                style={{
                                    width: '100%',
                                    height: scale(50),
                                    backgroundColor: Colors.alive_BD3F32,
                                    borderTopLeftRadius: scale(5),
                                    borderTopRightRadius: scale(5),
                                }}
                            >
                            </LinearGradient>

                            <View style={{
                                position: 'relative',
                                marginTop: - scale(25),
                                backgroundColor: Colors.whiteTwo,
                                borderRadius: scale(25),
                                width: scale(50),
                                height: scale(50),
                                borderColor: Colors.whiteTwo,
                                borderWidth: scale(1),
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Image style={{
                                    width: scale(30),
                                    height: scale(30),
                                    borderRadius: scale(15),
                                }} source={Images.logo.logo_error} />
                            </View>
                        </View>
                        <Text style={[AppStyle.Title_Center_Black, { marginTop: scale(10) }]}> {'Chức năng đang bảo trì'}</Text>
                        <View style={{
                            marginTop: scale(20),
                            justifyContent: 'center',
                            alignItems: 'center',
                        }} >
                            <MaterialCommunityIcons name="update" size={150} color={Colors.grey} />
                        </View>
                    </View>
                </Modal>
            // </View>
        )
    }
}

UpdateAlert.propTypes = {

}

UpdateAlert.defaultProps = {

}