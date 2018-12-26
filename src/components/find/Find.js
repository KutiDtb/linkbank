import React, { PureComponent } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { scale } from '../../theme/scaling';
import { AppStyle, Colors } from '../../theme';
import PureFlastList from '../../components/flatlist/PureFlatList'
import { PropTypes } from 'prop-types'
import IconEvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default class Find extends PureComponent {

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={{
                justifyContent: 'center',
                // width: item.length > 10 ? scale(120) : scale(100),
                height: scale(30),
                borderColor: Colors.whiteThree,
                borderWidth: scale(2),
                borderRadius: scale(3),
                paddingLeft: scale(5),
                paddingRight: scale(5),
            }} onPress={() => {
                if (this.props.actionHint) {
                    this.props.actionHint(item.label)
                }
            }}>
                <Text style={AppStyle.Tiny_Center_Black}> {item.value}</Text>
            </TouchableOpacity>
        )
    }

    renderHints() {
        return (
            <View style={{
                marginTop: scale(10),
                paddingLeft: scale(10),
                paddingRight: scale(10),
                height: scale(30),
                // justifyContent: 'center',
                // alignContent: 'center'
            }}>
                <PureFlastList
                    data={this.props.data}
                    renderItem={this.renderItem}
                    horizontal={true}
                />
            </View>
        )
    }

    renderMap() {
        if (this.props.showMap) {
            return (
                <TouchableOpacity onPress={this.actionMap}>
                    <Entypo style={{
                        marginTop: scale(7),
                        marginLeft: scale(5),
                        marginRight: scale(10),
                    }} name="location" size={25} color={Colors.alive_BD3F32} />
                </TouchableOpacity>
            )
        }
    }

    renderSearch() {
        var width = 230
        if (this.props.showMap) {
            width = 190
        } else {
            if (this.props.showBack) {
                width = 190
            }
        }
        return (
            <View
                style={{
                    flexDirection: 'row',
                    borderRadius: scale(5),
                    borderWidth: scale(2),
                    borderColor: Colors.whiteTwo,
                    backgroundColor: Colors.whiteTwo,
                }} >
                <IconEvilIcons style={{
                    marginTop: scale(7),
                    marginLeft: scale(5),
                }} name="search" size={40} color={Colors.alive_BD3F32} />
                <TextInput
                    style={{
                        marginLeft: scale(10),
                        // width: this.props.showMap === true ? scale(190) : scale(230),
                        width: scale(width),
                        backgroundColor: Colors.whiteTwo,
                    }}
                    placeholder={this.props.placeholder}
                    keyboardType={this.props.keyboardType}
                    editable={this.props.editable}
                    onChangeText={(text) => this.props.onChangeText(text)}
                />
                {this.renderMap()}
                <TouchableOpacity style={{
                    width: scale(70),
                    borderLeftColor: Colors.whiteThree,
                    borderLeftWidth: scale(3),
                    justifyContent: 'center',
                }} onPress={() => {
                    if (this.props.actionSearch) {
                        this.props.actionSearch()
                    }
                }}>
                    <Text style={AppStyle.Tiny_Center_Black}> {'Gửi'}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    renderIconBack() {
        if (this.props.showBack) {
            return (
                <TouchableOpacity 
                    onPress={() => {
                        if (this.props.actionBack) {
                            this.props.actionBack()
                        }
                    }}
                >
                    <AntDesign name="arrowleft" size={30} color={Colors.whiteTwo} />
                </TouchableOpacity>
            )
        }
    }

    render() {
        return (
            <View
                style={{
                    flexDirection: 'column',
                }} >
                <LinearGradient
                    colors={[Colors.alive_BD3F32, Colors.alive_CB356B]}
                    start={{ x: 0.0, y: 0.9 }} end={{ x: 0.9, y: 1.0 }}
                    locations={[0, 1]}
                    style={{
                        padding: scale(10),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }} >
                    {this.renderIconBack()}
                    {this.renderSearch()}
                </LinearGradient>
                {this.renderHints()}
            </View>
        )
    }

    actionMap = () => {
        if (this.props.actionMap) {
            this.props.actionMap()
        }
    }
}

Find.propTypes = {
    placeholder: PropTypes.string,
    keyboardType: PropTypes.string,
    data: PropTypes.array,
    showMap: PropTypes.bool,
}

Find.defaultProps = {
    placeholder: 'Tìm kiếm',
    keyboardType: 'default',
    data: [],
    showMap: true,
}