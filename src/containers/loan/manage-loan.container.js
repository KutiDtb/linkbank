import React, { PureComponent } from 'react';
import {
    View,
    Text,
    Image,
    Platform,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import Header from '../../components/common/Header'
import { scale } from '../../theme/scaling'
import Localization from '../../config/languages/i18n'
import Find from '../../components/find/Find'
import ButtonNext from '../../components/button/ButtonNext'
import { Screens, Colors, Images, AppStyle } from '../../theme'
import config from '../../config/config'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient'
import Modal from "react-native-modal"
import RadioForm from 'react-native-simple-radio-button'
import PureFlastList from '../../components/flatlist/PureFlatList'
import FindModalSalary from '../../components/find/FindModalSalary'
import FindModalArea from '../../components/find/FindModalArea'
import FindModalLoan from '../../components/find/FindModalLoan'
import FindModalJob from '../../components/find/FindModalJob'
import LoanAction, { LoanTypes } from '../../redux/loan.redux'

var radio_props = [
    { label: 'Nhận khách 1 lượt', value: 0 },
    { label: 'Nhận hết lượt', value: 1 }
];

var data = [
    {
        avatar: Images.awatar.default,
        name: 'NGUYEN VAN A',
        city: 'Ho Chi Minh',
        loanCreated: '17:30 28/11/2018',
        loanAmount: '5,000,000',
        loanTimeDes: '24 tháng',
        loanModal: 'Vay theo đăng ký xe máy',
        job: 'Nhân viên văn phòng',
        salary: '10,000,000 VND/Tháng',
        status: 'Ngày 20/12 gặp khách hàng nhận hồ sơ'
    },
    {
        avatar: Images.awatar.default,
        name: 'NGUYEN VAN A',
        city: 'Ho Chi Minh',
        loanCreated: '17:30 28/11/2018',
        loanAmount: '5,000,000',
        loanTimeDes: '24 tháng',
        loanModal: 'Vay theo đăng ký xe máy',
        job: 'Nhân viên văn phòng',
        salary: '10,000,000 VND/Tháng',
        status: 'Ngày 20/12 gặp khách hàng nhận hồ sơ'
    }
]

class ManageLoan extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            dataTicket: [],
            refreshing: false,

            keySearch: '',

            showModalArea: false,
            showModalLoan: false,
            showModalJob: false,
            showModalSalary: false,

            keyArea: {},
            keyLoan: [],
            keyJob: '',
            keySalary: '',
        }
    }

    componentDidMount() {
        this.props.getMyTicket()
    }

    componentWillReceiveProps(nextProps) {
        // console.log('get tickets-receive', JSON.stringify(nextProps))
        // console.log('this.props.fetchStatus', this.props.fetchStatus)
        // console.log('nextProps.fetchStatus', nextProps.fetchStatus)
        // if (nextProps.fetchStatus === config.FetchStatus.kFinishFetch &&
        //     this.props.fetchStatus !== nextProps.fetchStatus) {
            switch (nextProps.currentRequestName) {
                case LoanTypes.GET_MY_TICKET:
                    if (true === nextProps.apiStatus) {
                        var dataTicket = this.state.dataTicket
                        var tickets = nextProps.data.tickets
                        for (var i = 0; i < tickets.length; i++) {
                            dataTicket.push(tickets[i])
                        }
                        this.setState({
                            dataTicket,
                            refreshing: true
                        })
                    } else {
                        this.base.showErrorAlert(nextProps.error)
                    }
                    break;
                default:
                    break;
            }
        // }
    }

    renderItem = ({ item }) => {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                borderRadius: 5,
                borderBottomColor: Colors.whiteThree,
                borderBottomWidth: 5,
                padding: scale(10),
            }} key={'st-' + item.name}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    borderBottomColor: Colors.whiteThree,
                    borderBottomWidth: 2,
                    paddingBottom: scale(5),
                }}>
                    <Image style={{
                        height: scale(50),
                        width: scale(50),
                        borderRadius: scale(25),
                    }} source={item.avatar} />
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        marginLeft: scale(20)
                    }}>
                        <Text style={AppStyle.Paragraph_Left_Black}> {item.name}</Text>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            // backgroundColor: 'grey'
                            paddingBottom: scale(3),
                        }}>
                            <View style={{
                                flexDirection: 'row',
                            }}>
                                <EvilIcons style={{
                                }} name="location" size={20} color={Colors.red} />
                                <Text style={[AppStyle.Tiny_Left_Black, { marginLeft: scale(10) }]}> {item.city}</Text>
                            </View>

                            <View style={{
                                flexDirection: 'row',
                            }}>
                                <EvilIcons style={{
                                }} name="calendar" size={20} color={Colors.red} />
                                <Text style={AppStyle.Tiny_Right_Black}> {item.loanCreated}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    marginTop: scale(10),
                }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            marginLeft: - scale(5)
                        }}>
                            <MaterialIcons style={{
                            }} name="attach-money" size={25} color={Colors.black} />
                            <Text style={[AppStyle.Tiny_Left_Black, { marginLeft: scale(10) }]}> {'Số tiền vay'}</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <Text style={[AppStyle.Tiny_Right_Red, { fontWeight: 'bold', color: Colors.alive_BD3F32 }]}> {item.loanAmount}</Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                        marginTop: scale(5),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <Ionicons style={{
                            }} name="md-time" size={20} color={Colors.black} />
                            <Text style={[AppStyle.Tiny_Left_Black, { marginLeft: scale(10) }]}> {'Thời hạn'}</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <Text style={[AppStyle.Tiny_Right_Black, { fontWeight: 'bold', color: Colors.alive_BD3F32 }]}> {item.loanTimeDes}</Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                        marginTop: scale(5),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <AntDesign style={{
                            }} name="check" size={20} color={Colors.black} />
                            <Text style={[AppStyle.Tiny_Left_Black, { marginLeft: scale(10) }]}> {'Sản phẩm'}</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <Text style={[AppStyle.Tiny_Right_Black]}> {item.loanModal}</Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                        marginTop: scale(5),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <AntDesign style={{
                            }} name="check" size={20} color={Colors.black} />
                            <Text style={[AppStyle.Tiny_Left_Black, { marginLeft: scale(10) }]}> {'Nghề nghiệp'}</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <Text style={AppStyle.Tiny_Right_Black}> {item.job}</Text>
                        </View>
                    </View>
                    <View style={{
                        flex: 1,
                        marginTop: scale(5),
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <AntDesign style={{
                            }} name="check" size={20} color={Colors.black} />
                            <Text style={[AppStyle.Tiny_Left_Black, { marginLeft: scale(10) }]}> {'Thu nhập'}</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                        }}>
                            <Text style={AppStyle.Tiny_Right_Black}> {item.salary}</Text>
                        </View>
                    </View>
                </View>
            </View >
        )
    }


    renderModalJob() {
        if (this.state.showModalJob) {
            return (
                <FindModalJob
                    name={'JOB'}
                    showModal={this.state.showModalJob}
                    actionModalResult={this.actionModalJobResult}
                    value={this.state.keyJob}
                />
            )
        } else {
            return null
        }
    }
    renderModalArea() {
        if (this.state.showModalArea) {
            return (
                <FindModalArea
                    name={'KHU VỰC'}
                    showModal={this.state.showModalArea}
                    actionModalResult={this.actionModalAreaResult}
                    value={this.state.keyArea}
                />
            )
        } else {
            return null
        }
    }
    renderModalLoan() {
        if (this.state.showModalLoan) {
            return (
                <FindModalLoan
                    name={'SẢN PHẨM'}
                    showModal={this.state.showModalLoan}
                    actionModalResult={this.actionModalLoanResult}
                    value={this.state.keyLoan}
                />
            )
        } else {
            return null
        }
    }

    renderModalSalary() {
        if (this.state.showModalSalary) {
            return (
                <FindModalSalary
                    name={'THU NHẬP'}
                    showModal={this.state.showModalSalary}
                    actionModalResult={this.actionModalSalaryResult}
                    value={this.state.keySalary}
                />
            )
        } else {
            return null
        }
    }

    actionBack = () => {
        this.props.navigation.goBack()
    }
    baseRef = (obj) => this.base = obj
    render() {
        return (
            <BaseContainer
                currentScreen={'StockExchange'}
                ref={this.baseRef}
                onBackHandler={this.actionBack}
                ownStyle={{
                    flex: 1,
                }}
            >
                <View style={{
                    flexDirection: 'column',
                    height: scale(120)
                }}>
                    <Find
                        data={config.hintStockExchange}
                        showMap={false}
                        onChangeText={(text) => this.onChangeKeySearch(text)}
                        actionHint={(label) => this.actionHint(label)}
                        actionSearch={this.actionSearch}
                        showBack={true}
                        actionBack={this.actionBack}
                    />
                    <View style={{
                        width: '100%',
                        height: scale(10),
                        borderRadius: 5,
                        backgroundColor: Colors.whiteThree,
                        marginTop: scale(10)
                    }} />
                </View>
                <PureFlastList
                    data={this.state.dataTicket}
                    onEndReached={() => {
                        this.props.getMyTicket()
                    }}
                    onEndReachedThreshold={0.5}
                    renderItem={this.renderItem}
                    horizontal={false}
                    refreshing={this.state.refreshing}
                />
                {this.renderModalJob()}
                {this.renderModalArea()}
                {this.renderModalLoan()}
                {this.renderModalSalary()}
            </BaseContainer>
        )
    }

    actionHint(label) {
        switch (label) {
            case 1:
                this.setState({
                    showModalGender: true
                })
                break;
            case 2:
                this.setState({
                    showModalArea: true
                })
                break;
            case 3:
                this.setState({
                    showModalLoan: true
                })
                break;
            case 4:
                this.setState({
                    showModalOrganize: true
                })
                break;
            case 5:
                this.setState({
                    showModalJob: true
                })
                break;
            case 6:
                this.setState({
                    showModalSalary: true
                })
                break;
            default:
                break;
        }
        // alert(label)
    }

    actionModalJobResult = (job) => {
        console.log('key-job', job)
        this.setState({
            keyJob: job,
            showModalJob: false
        })
    }
    actionModalAreaResult = (value) => {
        console.log('keyArea', value)
        this.setState({
            keyArea: value,
            showModalArea: false
        })
    }
    actionModalLoanResult = (value) => {
        console.log('keyLoan', value)
        this.setState({
            keyLoan: value,
            showModalLoan: false
        })
    }
    actionModalSalaryResult = (value) => {
        console.log('keySalary', value)
        this.setState({
            keySalary: value,
            showModalSalary: false
        })
    }

    onChangeKeySearch(text) {
        this.setState({
            keySearch: text
        })
    }

    actionSearch = () => {
        alert(this.state.keySearch)
    }

    _onEndReached() {
        alert('_onEndReached')
    }
}
const mapStateToProps = (state) => {
    return {
        fetchStatus: state.loanRedux.fetchStatus,
        apiStatus: state.loanRedux.status,
        data: state.loanRedux.data,
        error: state.loanRedux.error,
        currentRequestName: state.loanRedux.currentRequestName,
        nextScreen: state.loanRedux.nextScreen,
    }
}

const mapDispatchToProps = (dispatch) => ({
    getMyTicket: () => dispatch(LoanAction.getMyTicket()),
})


export default connect(mapStateToProps, mapDispatchToProps)(ManageLoan)