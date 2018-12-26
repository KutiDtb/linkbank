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
// import ReferalAction, { ReferalTypes } from '../../redux/referal.redux'
import PaymentAction, { PaymentTypes } from '../../redux/payment.redux'

class HistoryContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            data: {},
            dataFillter: {},

            nameMonth: config.nameMonth,
            nameService: config.nameService,

            valueMonth: 'ALL',
            showModalMonth: false,
            dataModalMonth: [],
            valueTrans: 'ALL',
            showModalTrans: false,
            dataModalTrans: [],
        }
    }

    componentDidMount() {
        this.props.paymentHistory()
    }

    componentWillReceiveProps(nextProps) {
        console.log('history-receive', JSON.stringify(nextProps))
        // console.log('this.props.fetchStatus', this.props.fetchStatus)
        // console.log('nextProps.fetchStatus', nextProps.fetchStatus)
        // if (nextProps.fetchStatus === config.FetchStatus.kFinishFetch &&
        //     this.props.fetchStatus !== nextProps.fetchStatus) {
        switch (nextProps.currentRequestName) {
            case PaymentTypes.PAYMENT_HISTORY:
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

    renderModalTrans() {
        if (this.state.showModalTrans) {
            return (
                <FindModalTransaction
                    showModal={true}
                    value={this.state.valueTrans}
                    actionModalResult={this.actionModalTransResult}
                    actionHide={this.actionModalTransHide}
                />
            )
        }
    }

    renderMonth(item) {
        return (
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                padding: scale(10),
            }} key={'T' + item.id}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <View style={{
                        width: scale(50),
                        height: scale(50),
                        borderRadius: scale(25),
                        borderColor: Colors.whiteThree,
                        borderWidth: scale(1),
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        {this.renderIcon(item.type)}
                    </View>
                    <View style={{
                        flexDirection: 'column',
                        marginLeft: scale(10),
                        // alignItems
                    }}>
                        <Text style={AppStyle.Tiny_Left_Grey}> {item.name}</Text>
                        <Text style={AppStyle.Tiny_Left_Black}> {item.function}</Text>
                        <Text style={AppStyle.Tiny_Left_Grey}> {item.date}</Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'column',
                }}>
                    <Text style={AppStyle.Tiny_Left_Black}> {item.credit}</Text>
                    <Text style={AppStyle.Tiny_Left_Grey}> {'Credit'}</Text>
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
                currentScreen={'ReferalBonus'}
                onBackHandler={this.actionBack}
                showHeader={true}
                titleHeader={'Lịch sử'}
                showHeaderBack={true}
                actionHeaderBack={this.actionBack}
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
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginLeft: scale(10)
                    }} onPress={this.actionFindTrans}>
                        <Text style={AppStyle.Tiny_left_Black}>{this.state.nameService}</Text>
                        <AntDesign style={{ marginLeft: scale(5) }} name="caretdown" size={15} color={Colors.grey} />
                    </TouchableOpacity>
                </View>
                {this.renderHistory()}
                {this.renderModalMonth()}
                {this.renderModalTrans()}
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

    actionModalTransHide = () => {
        this.setState({
            showModalTrans: false,
        })
    }

    actionFindTrans = () => {
        this.setState({
            showModalTrans: true,
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

    actionModalTransResult = (item) => {
        var dataFillter = this.state.dataFillter
        if (item.value === 'ALL') {
            dataFillter = this.state.data
        } else {
            var newListMonth = []
            
            for (var i = 0; i < this.state.data.list.length; i++) {
                var e = this.state.data.list[i]
                var newList = []
                for (var j = 0; j < e.list.length; j++) {
                    var eList = e.list[j]
                    if (eList.type === item.value) {
                        newList.push(eList)
                    }
                }
                newList = {
                    month: e.month,
                    list: newList
                }
                newListMonth.push(newList)
            }
            dataFillter = {
                list: newListMonth
            }
        }

        this.setState({
            showModalTrans: false,
            nameService: item.label,
            valueTrans: item.value,
            dataFillter,
        })
    }
}
const mapStateToProps = (state) => {
    return {
        fetchStatus: state.paymentRedux.fetchStatus,
        apiStatus: state.paymentRedux.status,
        data: state.paymentRedux.data,
        error: state.paymentRedux.error,
        currentRequestName: state.paymentRedux.currentRequestName,
        nextScreen: state.paymentRedux.nextScreen,
    }
}

const mapDispatchToProps = (dispatch) => ({
    paymentHistory: () => dispatch(PaymentAction.paymentHistory()),
})


export default connect(mapStateToProps, mapDispatchToProps)(HistoryContainer)