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
import FindModalMonth from '../../components/find/FindModalMonth'
import FindModalTransaction from '../../components/find/FindMondalTransaction';
import ReferalAction, { ReferalTypes } from '../../redux/referal.redux'

class ReferalActiveContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data: {},
            dataFillter: {},

            nameMonth: config.nameMonth,

            valueMonth: 'ALL',
            showModalMonth: false,
            dataModalMonth: [],
            
        }
    }

    componentDidMount() {
        this.props.getReferalBonus()
    }

    componentWillReceiveProps(nextProps) {
        console.log('referal-active-receive', JSON.stringify(nextProps))
        // console.log('this.props.fetchStatus', this.props.fetchStatus)
        // console.log('nextProps.fetchStatus', nextProps.fetchStatus)
        // if (nextProps.fetchStatus === config.FetchStatus.kFinishFetch &&
        //     this.props.fetchStatus !== nextProps.fetchStatus) {
        switch (nextProps.currentRequestName) {
            case ReferalTypes.GET_REFERAL_BONUS:
                if (true === nextProps.apiStatus) {
                    // this.props.navigation.navigate('AuthenDefault')
                    this.setState({
                        data: nextProps.data.data,
                        dataFillter: nextProps.data.data,
                    })
                    this.getDataForModalMonth(nextProps.data.data)
                } else {
                    this.base.showErrorAlert(nextProps.error)
                }
                break;

            default:
                break;
        }
        // }
    }

    renderIcon(type) {
        switch (type) {
            default:
                return <Entypo name="location" size={30} color={Colors.alive_BD3F32} />
        }
    }

    getDataForModalMonth(data) {
        var dataModalMonth = [{ label: 'Tất cả các tháng', value: 'ALL' }]
        for (var i = 0; i < data.list.length; i++) {
            var e = data.list[i]
            var element = {
                label: 'Tháng ' + e.month,
                value: e.month,
            }
            dataModalMonth.push(element)
        }
        this.setState({ dataModalMonth })
    }

    renderModalMonth() {
        if (this.state.showModalMonth) {
            return (
                <FindModalMonth
                    showModal={true}
                    data={this.state.dataModalMonth}
                    value={this.state.valueMonth}
                    actionModalResult={this.actionModalMonthResult}
                    actionHide={this.actionModalMonthHide}
                />
            )
        }
    }

    renderMonth(item) {
        return (
            <View style={{
                flexDirection: 'row',
                // alignItems: 'center',
                // justifyContent: 'space-between',
                width: '100%',
                padding: scale(10),
            }} key={'RA-' + item.id}>
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

    renderItemV2 = ({ item }) => {
        // console.log('item.size', item.list.length)
        return (
            <View style={{
                width: '100%',
                paddingLeft: scale(10),
                paddingRight: scale(10),
            }}>
                <View style={{
                    height: scale(30),
                    backgroundColor: Colors.whiteThree,
                    justifyContent: 'center',
                    paddingLeft: scale(10),
                }}>
                    <Text style={AppStyle.Paragraph_Center_Black}>{'THÁNG ' + item.month}</Text>
                </View>
                {this.renderHisOfMonth(item.list)}
            </View>
        )
    }

    renderHisOfMonth(data) {
        var template = []
        for (var i = 0; i < data.length; i++) {
            template.push(
                this.renderMonth(data[i])
            )
        }
        return template
    }

    renderHistory() {

        return (
            <PureFlastList
                data={this.state.dataFillter.list}
                renderItem={this.renderItemV2}
                horizontal={false}
            />
        )
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
                    }} onPress={this.actionFindMonth}>
                        <Text style={AppStyle.Tiny_left_Black}>{this.state.nameMonth}</Text>
                        <AntDesign style={{ marginLeft: scale(5) }} name="caretdown" size={15} color={Colors.grey} />
                    </TouchableOpacity>
                </View>
                {this.renderHistory()}
                {this.renderModalMonth()}
            </BaseContainer>
        )
    }

    actionModalMonthHide = () => {
        this.setState({
            showModalMonth: false,
        })
    }

    actionFindMonth = () => {
        this.setState({
            showModalMonth: true,
        })
    }

    actionModalMonthResult = (item) => {
        var dataFillter = this.state.dataFillter
        if (item.value === 'ALL') {
            dataFillter = this.state.data
        } else {
            var newList = []
            for (var i = 0; i < this.state.data.list.length; i++) {
                var e = this.state.data.list[i]
                if (e.month === item.value) {
                    newList.push(e)
                }
            }
            dataFillter = {
                list: newList
            }
        }
        this.setState({
            showModalMonth: false,
            nameMonth: item.label,
            valueMonth: item.value,
            dataFillter,
        })
    }

}
const mapStateToProps = (state) => {
    return {
        fetchStatus: state.referalRedux.fetchStatus,
        apiStatus: state.referalRedux.status,
        data: state.referalRedux.data,
        error: state.referalRedux.error,
        currentRequestName: state.referalRedux.currentRequestName,
        nextScreen: state.referalRedux.nextScreen,
    }
}

const mapDispatchToProps = (dispatch) => ({
    getReferalBonus: () => dispatch(ReferalAction.getReferalBonus()),
})


export default connect(mapStateToProps, mapDispatchToProps)(ReferalActiveContainer)