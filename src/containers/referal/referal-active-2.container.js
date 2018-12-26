import React, { PureComponent } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import Header from '../../components/common/Header'
import { scale } from '../../theme/scaling'
import Localization from '../../config/languages/i18n'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import { Screens, Colors, Images, AppStyle } from '../../theme'
import config from '../../config/config'
import PureFlastList from '../../components/flatlist/PureFlatList'

var data = {
    referalCode: '5PJUGN',
    list: [
        {
            month: '8',
            list: [
                { type: '1', name: 'Trần Văn A', function: 'Nạp Credit vào tài khoản', date: '05/11', credit: 70000 },
                { type: '2', name: 'Trần Văn A', function: 'Nạp Credit vào tài khoản', date: '05/11', credit: 70000 },
                { type: '1', name: 'Trần Văn A', function: 'Nạp Credit vào tài khoản', date: '05/11', credit: 70000 },
                { type: '2', name: 'Trần Văn A', function: 'Nạp Credit vào tài khoản', date: '05/11', credit: 70000 },
            ]
        },
        {
            month: '9',
            list: [
                { type: '1', name: 'Trần Văn A', function: 'Nạp Credit vào tài khoản', date: '05/11', credit: 70000 },
                { type: '2', name: 'Trần Văn A', function: 'Nạp Credit vào tài khoản', date: '05/11', credit: 70000 },
            ]
        },
        {
            month: '11',
            list: [
                { type: '1', name: 'Trần Văn A', function: 'Nạp Credit vào tài khoản', date: '05/11', credit: 70000 },
                { type: '2', name: 'Trần Văn A', function: 'Nạp Credit vào tài khoản', date: '05/11', credit: 70000 },
                { type: '1', name: 'Trần Văn A', function: 'Nạp Credit vào tài khoản', date: '05/11', credit: 70000 },
                { type: '2', name: 'Trần Văn A', function: 'Nạp Credit vào tài khoản', date: '05/11', credit: 70000 },
            ]
        },
    ]
}

class ReferalActiveContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            nameMonth: 'Tất cả các tháng',
            nameService: 'Tất cả giao dịch',
        }
    }

    renderIcon(type) {
        switch (type) {
            default:
                return <Entypo name="location" size={30} color={Colors.alive_BD3F32} />
        }
    }

    renderItem = ({ item }) => {
        return (
            <View style={{
                flexDirection: 'row',
                // alignItems: 'center',
                // justifyContent: 'space-between',
                width: '100%',
                padding: scale(10),
            }} >
                    <View style={{
                        flexDirection: 'column',
                        marginLeft: scale(10),
                        // alignItems
                    }}>
                        <Text style={AppStyle.Paragraph_Left_Black}> {item.name}</Text>
                        <Text style={AppStyle.Tiny_Left_Grey}> {item.date}</Text>
                    </View>
            </View>
        )
    }

    renderTransHistory(data) {
        return (
            <View style={{
                // paddingLeft: scale(10),
                // paddingRight: scale(10),
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

    renderMonth(data) {
        return (
            <View style={{
                width: '100%',
                paddingLeft: scale(10),
                paddingRight: scale(10),
            }} key={'month-' + data.month}>
                <View style={{
                    height: scale(30),
                    backgroundColor: Colors.whiteThree,
                    justifyContent: 'center',
                    paddingLeft: scale(10),
                }}>
                    <Text style={AppStyle.Paragraph_Left_Black}>{'THÁNG ' + data.month}</Text>
                </View>
                {this.renderTransHistory(data)}
            </View>
        )
    }

    renderHistory() {
        var template = []
        for (var i = 0; i < data.list.length; i++) {
            template.push(
                this.renderMonth(data.list[i])
            )
        }
        return template
    }

    actionBack = () => {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <BaseContainer
                currentScreen={'ReferalActive'}
                onBackHandler={this.actionBack}
                ownStyle={{
                    flex: 1
                }}
            >
                <View style={{
                    // flex: 1,
                    flexDirection: 'row',
                    height: scale(30),
                    alignItems: 'center',
                    paddingLeft: scale(20)
                }}>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Text style={AppStyle.Tiny_left_Black}>{this.state.nameMonth}</Text>
                        <AntDesign style={{ marginLeft: scale(5)}} name="caretdown" size={15} color={Colors.grey} />
                    </TouchableOpacity>
                </View>
                {this.renderHistory()}
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


export default connect(mapStateToProps, mapDispatchToProps)(ReferalActiveContainer)