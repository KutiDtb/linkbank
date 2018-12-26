import React, { PureComponent } from 'react';
import { Text, View, TextInput, Platform, TouchableOpacity } from 'react-native';
import { scale } from '../../theme/scaling';
import { AppStyle, Colors } from '../../theme';
import { PropTypes } from 'prop-types'
import Modal from 'react-native-modal'
import Picker from '../input/Picker'
import config from '../../config/config'
const { city, mapCityProvince, mapProvinceWard } = require('../../config/city')

export default class FindModalArea extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            city: this.props.value.city,
            district: this.props.value.district,
            ward: this.props.value.ward,

            configCity: city,
            configProvince: [],
            configAward: [],
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
                    // height: scale(150),
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
                        // height: scale(40),
                        marginTop: scale(20),
                    }} >
                        <Picker
                            data={this.state.configCity}
                            placeholder={'Tỉnh/Thành phố'}
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
                            onValueChange={(text) => this.onChangeCity(text)}
                            value={this.state.city}
                        />

                        <Picker
                            data={this.state.configProvince}
                            placeholder={'Quận/Huyện'}
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
                            onValueChange={(text) => this.onChangeDistrict(text)}
                            value={this.state.district}
                        />

                        <Picker
                            data={this.state.configAward}
                            placeholder={'Phường/Xã'}
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
                            value={this.state.ward}
                        />
                    </View>

                    <TouchableOpacity style={{
                        marginTop: scale(20),
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} onPress={() => {
                        if (this.props.actionModalResult) {
                            var result = {
                                city: this.state.city,
                                district: this.state.district,
                                ward: this.state.ward,
                            }
                            this.props.actionModalResult(result)
                        }
                    }}>
                        <Text style={AppStyle.Paragraph_Center_Red}> {'Xem kết quả'}</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }

    onChangeCity(text) {
        this.setState({
            city: text,
            configProvince: mapCityProvince[text],
            configAward: []
        })
    }
    onChangeDistrict(text) {
        this.setState({
            district: text,
            configAward: mapProvinceWard[text]
        })
    }
    onChangeWard(text) {
        this.setState({
            ward: text
        })
    }
}

FindModalArea.propTypes = {
    name: PropTypes.string,
}

FindModalArea.defaultProps = {
    // editable: true,
}