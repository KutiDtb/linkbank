import React, { PureComponent } from 'react';
import { Text, View, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { scale } from '../../theme/scaling';
import { AppStyle, Colors, Images } from '../../theme';
import { PropTypes } from 'prop-types'
import Modal from 'react-native-modal'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient'

export default class ErrorAlert extends PureComponent {

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
                        if (this.props.hideModal) {
                            this.props.hideModal()
                        }
                    }}
                >

                    <View style={{
                        width: '80%',
                        // height: scale(150),
                        justifyContent: 'center',
                        alignItems: 'center',
                        // padding: scale(20),
                        // borderRadius: scale(5),
                        backgroundColor: Colors.whiteTwo,
                        borderRadius: scale(5),
                        // opacity: 1,
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
                        <Text style={[AppStyle.Credit_Center_White, { color: Colors.alive_BD3F32, fontWeight: 'bold', marginTop: scale(10) }]}> {'Thông báo'}</Text>

                        <Text style={[AppStyle.Paragraph_Center_Black, { marginTop: scale(20) }]}> {this.props.msg}</Text>
                        <View style={{
                            marginTop: scale(20),
                            justifyContent: 'center',
                            alignItems: 'center',
                        }} >
                            <MaterialIcons name="report-problem" size={150} color={Colors.grey} />
                        </View>
                    </View>
                </Modal>
            // </View>
        )
    }
}

ErrorAlert.propTypes = {

}

ErrorAlert.defaultProps = {

}