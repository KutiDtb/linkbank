import React, { PureComponent } from 'react';
import { Text, View, Platform, Image, TouchableOpacity } from 'react-native';
import { scale } from '../../theme/scaling';
import { AppStyle, Colors, Images } from '../../theme';
import PureFlastList from '../../components/flatlist/PureFlatList'
import { PropTypes } from 'prop-types'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
// var hints = ['Giới tính', 'Khu vực', 'Sản phẩm', 'Tổ chức']
export default class HighHelper extends PureComponent {

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={{
                flexDirection: 'column',
                justifyContent: 'center',
                // width: scale(80),
                height: scale(120),
                borderRadius: 5,
            }} onPress={() => {
                if (this.props.helperDetail) {
                    this.props.helperDetail(item)
                }
            }}>
                <View style={{
                    flexDirection: 'column',
                }}>
                    {/* <View style={{
                        flexDirection: 'column',
                        width: scale(100),
                        height: scale(100),
                        borderRadius: scale(5),
                    }}> */}
                        <Image resizeMode='contain' style={{
                            width: scale(100),
                            height: scale(100),
                            borderRadius: Platform.OS === 'ios' ? scale(10) : scale(30),
                            // position: 'relative'
                        }} source={Images.awatar.default} resizeMode={'contain'} />
                    {/* </View> */}
                    <View style={{
                        marginTop: - scale(30),
                        paddingLeft: scale(5),
                        paddingRight: scale(5),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        position: 'relative'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <FontAwesome name="commenting-o" size={20} color={Colors.whiteTwo} />
                            <Text style={[AppStyle.VerySmall_Left_White, {
                                marginTop: scale(3)
                            }]}> {'7'}</Text>
                        </View>
                        <Feather name="video" size={20} color={Colors.whiteTwo} />
                    </View>
                </View>
                <Text style={[AppStyle.Small_Center_Black, { marginTop: scale(10) }]}> {'KuTi'}</Text>
            </TouchableOpacity>
        )
    }

    renderHints() {
        return (
            <View style={{
                // backgroundColor: 'grey',
                marginTop: scale(10),
                // height: scale(30),
            }}>
                <PureFlastList
                    data={this.props.data}
                    renderItem={this.renderItem}
                    horizontal={true}
                />
            </View>
        )
    }

    render() {
        return (
            <View style={{
                flexDirection: 'column',
                borderBottomColor: Colors.whiteThree,
                borderBottomWidth: 3,
            }} >
                {this.renderHints()}
            </View>
        )
    }
}

HighHelper.propTypes = {
    data: PropTypes.array
}

HighHelper.defaultProps = {
    data: []
}