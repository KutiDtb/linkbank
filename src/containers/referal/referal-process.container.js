import React, { PureComponent } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import Header from '../../components/common/Header'
import { verticalScale, scale } from '../../theme/scaling'
import Localization from '../../config/languages/i18n'
import InputPicker from '../../components/input/InputPicker'
import Picker from '../../components/input/Picker'
import { Screens, Colors, Images, AppStyle } from '../../theme'
import config from '../../config/config'
import PureFlastList from '../../components/flatlist/PureFlatList'

var data = {
    referalCode: '5PJUGN',
    list: [
        { name: 'Trần Văn A', email: 'tranvana@gmail.com' },
        { name: 'Trần Văn A', email: 'tranvana@gmail.com' },
        { name: 'Trần Văn A', email: 'tranvana@gmail.com' },
        { name: 'Trần Văn A', email: 'tranvana@gmail.com' },
        { name: 'Trần Văn A', email: 'tranvana@gmail.com' },
        { name: 'Trần Văn A', email: 'tranvana@gmail.com' },
        { name: 'Trần Văn A', email: 'tranvana@gmail.com' },
        { name: 'Trần Văn A', email: 'tranvana@gmail.com' },
        { name: 'Trần Văn A', email: 'tranvana@gmail.com' },
        { name: 'Trần Văn A', email: 'tranvana@gmail.com' },
        { name: 'Trần Văn A', email: 'tranvana@gmail.com' },
        { name: 'Trần Văn A', email: 'tranvana@gmail.com' },
    ]
}

class ReferalProcessContainer extends PureComponent {
    constructor(props) {
        super(props);
    }

    renderItem = ({ item }) => {
        return (
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                padding: scale(10),
            }} >
                <View style={{
                    flexDirection: 'column',
                }}>
                    <Text style={AppStyle.Paragraph_Left_Grey}> {item.name}</Text>
                    <Text style={AppStyle.Tiny_Left_Black}> {item.email}</Text>
                </View>
                <View style={{
                    flexDirection: 'column',
                }}>
                    <TouchableOpacity style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: scale(5),
                        borderColor: Colors.alive_BD3F32,
                        borderWidth: scale(1),
                        padding: scale(5),
                    }}>
                        <Text style={AppStyle.Paragraph_Left_Grey}> {'Gửi lại'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    renderListReferalProcess() {
        return (
            <View style={{
                paddingLeft: scale(10),
                paddingRight: scale(10),
                paddingBottom: scale(30),
            }}>
                <PureFlastList
                    data={data.list}
                    renderItem={this.renderItem}
                    horizontal={false}
                    viewSeparate={<View style={{
                        backgroundColor: Colors.whiteThree,
                        height: scale(1)
                    }} />}
                />
            </View>
        )
    }

    renderListReferalEmty() {
        return (
            <View style={{
                padding: scale(10),
            }}>
                
            </View>
        )
    }

    renderListReferal() {
        if (data.list !== undefined && data.list !== undefined && data.list.length > 0) {
            return this.renderListReferalProcess()
        } else {
            return this.renderListReferalEmty()
        }
    }

    renderShare() {
        return (
            <View style={{
                // marginTop: - scale(100),
            }}>
                <TouchableOpacity style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: scale(70),
                    height: scale(70),
                    borderRadius: scale(45),
                    borderColor: Colors.alive_BD3F32,
                    borderWidth: scale(1),
                    padding: scale(10),
                }}>
                    <Text style={AppStyle.Paragraph_Left_Grey}> {'Share'}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    actionBack = () => {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <BaseContainer
                currentScreen={'Message'}
                onBackHandler={this.actionBack}
                ownStyle={{
                    flex: 1,
                }}
            >
                <View style={{
                    // flex: 1,
                    height: scale(30),
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: Colors.grey,
                    paddingLeft: scale(10),
                    paddingRight: scale(10),
                }}>
                    <Text style={AppStyle.Tiny_Left_White}>{'Mã giới thiệu: '}</Text>
                    <Text style={AppStyle.Paragraph_Left_White}>{data.referalCode}</Text>
                </View>
                {this.renderListReferal()}
                {/* {this.renderShare()} */}
            </BaseContainer>
        )
    }

}
const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(ReferalProcessContainer)