import React, { PureComponent } from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import Pie from 'react-native-pie'
import Task from '../../components/task/Task'
import { scale } from '../../theme/scaling';
import Localization from '../../config/languages/i18n';
import { AppStyle, Colors, Screens } from '../../theme'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AccountAction, { AccountTypes } from '../../redux/account.redux'
import config from '../../config/config'
import * as Buz from '../../saga/buz/app-buz'

class AccountTaksContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            percent: 0,
            taskFinish: []
        }
    }

    componentDidMount() {
        this.props.getInfoTask()
    }

    componentWillReceiveProps(nextProps) {
        console.log('accountTaks-receive', JSON.stringify(nextProps))
        console.log('this.props.fetchStatus', this.props.fetchStatus)
        console.log('nextProps.fetchStatus', nextProps.fetchStatus)
        // if (nextProps.fetchStatus === config.FetchStatus.kFinishFetch &&
        //     this.props.fetchStatus !== nextProps.fetchStatus) {
            switch (nextProps.currentRequestName) {
                case AccountTypes.GET_INFO_TASK:
                    if (true === nextProps.apiStatus) {
                        this.setState({
                            percent: nextProps.data.percent,
                            taskFinish: nextProps.data.taskFinish,
                        })
                    } else {
                        this.base.showErrorAlert(nextProps.error)
                    }
                    break;

                default:
                    break;
            }
        // }

        var account = Buz.getAccount()
        if (this.props.percent !== account.percentage) {
            this.setState({
                percent: account.percentage,
                taskFinish: account.updateInfoTask,
            })
        }
    }

    renderCompleteInfoNormal() {
        return (
            this.state.taskFinish.includes(config.ACCOUNT_INFO_NORMAL_ONE) && 
            this.state.taskFinish.includes(config.ACCOUNT_INFO_NORMAL_TWO)
        )
    }
    actionBack = () => {
        this.props.navigation.goBack()
    }
    baseRef = (obj) => this.base = obj
    render() {
        return (
            <BaseContainer
                currentScreen={'AccountInfo'}
                ref={this.baseRef}
                onBackHandler={this.actionBack}
                showHeader={true}
                titleHeader={Localization('capnhatthongtin')}
                showHeaderBack={true}
                actionHeaderBack={this.actionBack}
                ownStyle={{
                    flex: 1,
                    paddingLeft: scale(10),
                    paddingRight: scale(10),
                    backgroundColor: Colors.white,
                }}
            >
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                }}>
                    <View style={{
                        // flex: 1,
                        alignItems: 'center',
                        marginTop: scale(10),
                        paddingLeft: scale(30),
                        paddingRight: scale(30),
                    }}>
                        <Pie
                            radius={100}
                            innerRadius={scale(70)}
                            series={[this.state.percent, (100 - this.state.percent)]}
                            colors={[Colors.alive_CB356B, '#808080']} />
                        <View style={{
                            position: 'absolute',
                            width: 100,
                            height: 100,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: scale(40)
                        }}>
                            <Text style={AppStyle.Title_Center_Black}>{this.state.percent + ' %'}</Text>
                        </View>
                        <Text style={[AppStyle.Small_Center_Black, { marginTop: scale(10) }]}>{'TỈ LỆ PHÊ DUYỆT TƯƠNG ỨNG VỚI TỈ LỆ HOÀN THIỆN HỒ SƠ'}</Text>
                    </View>

                    <ScrollView style={{
                        flex: 1,
                        flexDirection: 'column',
                        // marginTop: scale(10)
                    }} showsVerticalScrollIndicator={false}>
                        <Task actionClick={this.actionUpdateInfo} task={'Thông tin cá nhân'}
                            complete={this.renderCompleteInfoNormal()} iconLeft={<FontAwesome name="list-alt" size={30} color={Colors._1ea7ea} style={{ marginLeft: scale(5) }} />} />
                        <Task actionClick={this.actionJobInfo} task={'Thông tin công việc'}
                            complete={this.state.taskFinish.includes(config.ACCOUNT_INFO_WORK)} iconLeft={<FontAwesome5 name="shopping-bag" size={30} color={Colors._1ea7ea} style={{ marginLeft: scale(5) }} />} />
                        <Task actionClick={this.actionContact} task={'Thông tin tham chiếu'}
                            complete={this.state.taskFinish.includes(config.ACCOUNT_INFO_CONTACT)} iconLeft={<Ionicons name="ios-call" size={30} color={Colors._1ea7ea} style={{ marginLeft: scale(5) }} />} />
                        <Task actionClick={this.actionRefInfo} task={'Kênh liên lạc'}
                            complete={this.state.taskFinish.includes(config.ACCOUNT_INFO_REF)} iconLeft={<Ionicons name="ios-contacts" size={30} color={Colors._1ea7ea} style={{ marginLeft: scale(5) }} />} />
                        <Task actionClick={this.actionRefDoc} task={'Tài liệu tham chiếu'}
                            complete={this.state.taskFinish.includes(config.ACCOUNT_INFO_DOCUMENT)} iconLeft={<Entypo name="text-document-inverted" size={30} color={Colors._1ea7ea} style={{ marginLeft: scale(5) }} />} />
                    </ScrollView>
                </View>
            </BaseContainer>
        )
    }

    actionUpdateInfo = () => {
        this.props.navigation.navigate(Screens.AccountInfo)
    }
    actionJobInfo = () => {
        this.props.navigation.navigate(Screens.AccountInfoWork)
    }
    actionContact = () => {
        this.props.navigation.navigate(Screens.AccountContact)
    }
    actionRefInfo = () => {
        // this.base.showUpdateAlert()
        this.props.navigation.navigate(Screens.AccountChannel)
    }
    actionRefDoc = () => {
        this.base.showUpdateAlert()
        // this.props.navigation.navigate(Screens.AccountDocument)
    }

}
const mapStateToProps = (state) => {
    return {
        fetchStatus: state.accountRedux.fetchStatus,
        apiStatus: state.accountRedux.status,
        data: state.accountRedux.data,
        error: state.accountRedux.error,
        currentRequestName: state.accountRedux.currentRequestName,
        nextScreen: state.accountRedux.nextScreen,
    }
}

const mapDispatchToProps = (dispatch) => ({
    getInfoTask: () => dispatch(AccountAction.getInfoTask()),
})


export default connect(mapStateToProps, mapDispatchToProps)(AccountTaksContainer)