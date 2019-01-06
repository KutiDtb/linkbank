import React, { PureComponent } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
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
import * as Buz from '../../saga/buz/app-buz'

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

class StockExchangeContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.account = Buz.getAccount()

        this.state = {
            showModalTicket: false,

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

            ticketId: '',
            creditOne: 0,
            crdditFull: 0,
            creditCurrent: 0,

            page: 1,
        }
    }

    componentDidMount() {
        this.props.getTicket(this.state.page)
    }

    componentWillReceiveProps(nextProps) {
        // console.log('get tickets-receive', JSON.stringify(nextProps))
        // console.log('this.props.fetchStatus', this.props.fetchStatus)
        // console.log('nextProps.fetchStatus', nextProps.fetchStatus)
        if (nextProps.fetchStatus === config.FetchStatus.kFinishFetch &&
            this.props.fetchStatus !== nextProps.fetchStatus) {
            switch (nextProps.currentRequestName) {
                case LoanTypes.GET_TICKET:
                    this.base.loading(false)
                    if (true === nextProps.apiStatus) {
                        var dataTicket = this.state.dataTicket
                        var tickets = nextProps.data.tickets
                        for (var i = 0; i < tickets.length; i++) {
                            dataTicket.push(tickets[i])
                        }
                        this.setState({
                            dataTicket,
                            refreshing: true,
                            page: this.state.page + 1,
                        })
                    } else {
                        this.base.showErrorAlert(nextProps.error)
                    }
                    break;
                case LoanTypes.GET_TICKET_CREDIT:
                    if (true === nextProps.apiStatus) {
                        var creditOne = nextProps.data.creditOne
                        var creditFull = nextProps.data.creditFull

                        this.setState({
                            creditOne,
                            creditFull,
                            creditCurrent: creditOne,
                            showModalTicket: true
                        })
                    } else {
                        this.base.showErrorAlert(nextProps.error)
                    }
                    break;
                case LoanTypes.BUY_TICKET:
                    this.base.loading(false)
                    // console.log('get tickets--BUY_TICKETreceive', nextProps.data)
                    if (true === nextProps.apiStatus) {
                        this.props.navigation.navigate(Screens.StockExchangeDetail, {
                            data: nextProps.data
                        })
                    } else {
                        this.base.showErrorAlert(nextProps.error)
                    }
                    break;
                default:
                    break;
            }
        }
    }

    renderItemButtonBuy(id) {
        if (this.account.level >= 0) {
            return (
                <TouchableOpacity style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }} onPress={() => this.actionByTicket(id)}>
                    <LinearGradient
                        colors={[Colors.alive_BD3F32, Colors.alive_CB356B]}
                        start={{ x: 0.0, y: 0.9 }} end={{ x: 0.9, y: 1.0 }}
                        locations={[0, 1]}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: scale(10),
                            width: scale(200),
                            borderRadius: 5,
                            height: Platform.OS === 'ios' ? scale(45) : scale(40),
                        }}
                    >
                        <Text style={AppStyle.Title_Center_White}> {'Tư vấn ngay'}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            )
        }
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
                {this.renderItemButtonBuy(item.id)}
            </View >
        )
    }

    renderModalBuyTicket() {
        if (this.state.showModalTicket) {
            return (
                <Modal isVisible={this.state.showModalTicket}>
                    <View style={{
                        width: scale(335),
                        height: scale(404),
                        paddingTop: scale(20),
                        paddingLeft: scale(20),
                        paddingRight: scale(20),
                        backgroundColor: Colors.whiteTwo,
                        flexDirection: 'column'
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between'
                        }}>
                            <Text style={AppStyle.Paragraph_Left_Black}>{'Bạn có muốn dùng'}</Text>
                            <TouchableOpacity onPress={this.actionHideModalBuyTicket}>
                                <AntDesign name="closecircleo" size={30} color={Colors.black} />
                            </TouchableOpacity>
                        </View>

                        <View style={{
                            paddingTop: scale(20),
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}>
                            <Text style={AppStyle.Title_Center_Red}>{this.state.creditCurrent + ' credits'}</Text>
                        </View>
                        <View style={{
                            paddingTop: scale(20),
                            flexDirection: 'column',
                        }}>
                            <Text style={AppStyle.Paragraph_Center_Black}>{'Để liên hệ với khách hàng không'}</Text>
                            <Text style={AppStyle.Paragraph_Center_Black}>{'(Chọn nhận hết lượt khách có thể tăng khả năng chốt đơn lên 100%)'}</Text>
                        </View>
                        <View style={{
                            paddingTop: scale(30),
                            flexDirection: 'column',
                        }}>
                            <RadioForm
                                radio_props={radio_props}
                                initial={0}
                                selectedButtonColor={Colors.alive_BD3F32}
                                buttonColor={Colors.grey}
                                onPress={(value) => this.actionChooseTypeTicket(value)}
                            />
                        </View>
                        <ButtonNext
                            actionPress={this.actionConfirmTicket}
                            disable={false}
                            title={'Nhận khách ngay'}
                            style={{
                                backgroundColor: Colors.alive_BD3F32
                            }}
                        />
                        <View style={{
                            paddingTop: scale(20),
                            flexDirection: 'row',
                        }}>
                            <Text style={AppStyle.Paragraph_Left_Black}>{'Bạn đang có '+ this.state.creditCurrent +' Credit'}</Text>
                            <TouchableOpacity>
                                <Text style={AppStyle.Paragraph_Left_Red}>{' Nạp thêm Credit'}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            )
        }
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
        console.log('actionBack StockExchange')
        this.props.navigation.goBack()
    }
    baseRef = (obj) => this.base = obj
    render() {
        return (
            <BaseContainer
                currentScreen={'StockExchange'}
                ref={this.baseRef}
                // onBackHandler={this.actionBack}
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
                        this.base.loading(true)
                        this.props.getTicket(this.state.page)
                        // alert('end')
                    }}
                    onEndReachedThreshold={0.5}
                    renderItem={this.renderItem}
                    horizontal={false}
                    refreshing={this.state.refreshing}
                />
                {this.renderModalBuyTicket()}
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

    actionByTicket(id) {
        console.log('actionByTicket', id)
        this.setState({
            ticketId: id
        })
        this.props.getTicketCredit(id)
        // this.props.getTicketCredit(id)
    }

    actionConfirmTicket = () => {
        this.setState({
            showModalTicket: false
        })
        this.base.loading(true)
        this.props.buyTicket(this.state.ticketId)
    }

    actionHideModalBuyTicket = () => {
        this.setState({
            showModalTicket: false
        })
    }

    actionChooseTypeTicket = (value) => {
        if (value === 0) {
            this.setState({
                creditCurrent: this.state.creditOne
            })
        } else {
            this.setState({
                creditCurrent: this.state.creditFull
            })
        }
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
    getTicket: (page) => dispatch(LoanAction.getTicket(page)),
    getTicketCredit: (id) => dispatch(LoanAction.getTicketCredit(id)),
    buyTicket: (id) => dispatch(LoanAction.buyTicket(id)),
})


export default connect(mapStateToProps, mapDispatchToProps)(StockExchangeContainer)