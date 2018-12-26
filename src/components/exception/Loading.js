import React, { PureComponent } from 'react';
import { Text, View, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import { scale } from '../../theme/scaling';
import { AppStyle, Colors } from '../../theme';
import { PropTypes } from 'prop-types'
import Modal from 'react-native-modal'

export default class Loading extends PureComponent {

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

                    }}
                    onBackdropPress={() => {
                    }}
                >

                    <View style={{
                        // height: scale(150),
                        justifyContent: 'center',
                        alignItems: 'center',
                        // padding: scale(20),
                        // borderRadius: scale(5),
                        // backgroundColor: Colors.whiteTwo,
                        // opacity: 1,
                    }} >
                        <ActivityIndicator size="large" color={Colors.alive_BD3F32} />
                    </View>
                </Modal>
            // </View>
        )
    }
}

Loading.propTypes = {
    
}

Loading.defaultProps = {
    
}