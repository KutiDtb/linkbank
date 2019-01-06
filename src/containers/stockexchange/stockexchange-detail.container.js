import React, { PureComponent } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TextInput,
    Platform,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import { scale } from '../../theme/scaling'
import Localization from '../../config/languages/i18n'
import Picker from '../../components/input/Picker'
import Input from '../../components/input/Input'
import ButtonNext from '../../components/button/ButtonNext'
import { Screens, Colors, Images, AppStyle } from '../../theme'
import config from '../../config/config'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import call from 'react-native-phone-call'
import LoanAction, { LoanTypes } from '../../redux/loan.redux'

var data = {
    require: {
        avatar: Images.awatar.default,
        name: 'NGUYEN VAN A',
        city: 'Ho Chi Minh',
        loanCreated: '17:30 28/11/2018',
        loanAmount: '5,000,000',
        loanTimeDes: '24 tháng',
        loanModal: 'Vay theo đăng ký xe máy',
        job: 'Nhân viên văn phòng',
        salary: '10,000,000 VND/Tháng',
        phone: '0904684684'
    },
    info: {
        gender: 'Nam',
        status: 'Độc thân',
        cardID: '123456789',
        birthday: '02/09/1994',
        email: 'abc@gmail.com',
        addressMain: '',
        addressTemp: ''
    },
    job: {
        name: 'Công nhân nhà máy',
        company: 'Giấy Hải Phòng',
        time: '> 1 năm',
        position: 'Công nhân',
        salary: '5,000,000 đ',
        salaryModal: 'Chuyển khoản'
    },
    statusList: [
        {
            id: 1,
            time: '12/12/2018',
            status: 'Đủ điền kiện',
            comment: 'Hẹn 1.12 nhận hồ sơ'
        },
        {
            id: 2,
            time: '12/12/2018',
            status: 'Đủ điền kiện',
            comment: 'Hẹn 1.12 nhận hồ sơ'
        }
    ]
}
class StockExchangeDetailContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.data = this.props.navigation.getParam('data'),
        console.log('constructor StockExchangeDetailContainer', JSON.stringify(this.data))
        this.state = {
            data: this.data,
            statusList: this.data.statusList,
            status: null,
            content: '',
        }
    }

    componentWillReceiveProps(nextProps) {
        // console.log('get tickets-detail-receive', JSON.stringify(nextProps))
        // console.log('this.props.fetchStatus', this.props.fetchStatus)
        // console.log('nextProps.fetchStatus', nextProps.fetchStatus)
        // if (nextProps.fetchStatus === config.FetchStatus.kFinishFetch &&
        //     this.props.fetchStatus !== nextProps.fetchStatus) {
        switch (nextProps.currentRequestName) {
            case LoanTypes.UPDATE_TICKET_STATUS:
                if (true === nextProps.apiStatus) {
                    var newStatusList = nextProps.data.statusList
                    this.setState({
                        statusList: newStatusList,
                        status: null,
                        content: ''
                    })
                    this.inputContent.clear()
                } else {
                    this.base.showErrorAlert(nextProps.error)
                }
                break;
            default:
                break;
        }
        // }
    }

    renderStockExchange() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                borderRadius: 5,
                paddingTop: scale(10),
            }}>
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
                    }} source={this.state.data.require.avatar} />
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        marginLeft: scale(20)
                    }}>
                        <Text style={[AppStyle.Paragraph_Left_Black, { fontWeight: 'bold' }]}> {this.state.data.require.name}</Text>
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
                                    // marginTop: scale(7),
                                    // marginLeft: scale(5),
                                }} name="location" size={20} color={Colors.red} />
                                <Text style={[AppStyle.Tiny_Left_Black, { marginLeft: scale(10) }]}> {this.state.data.require.city}</Text>
                            </View>

                            <View style={{
                                flexDirection: 'row',
                            }}>
                                <EvilIcons style={{
                                    // marginTop: scale(7),
                                    // marginLeft: scale(5),
                                }} name="calendar" size={20} color={Colors.red} />
                                <Text style={AppStyle.Tiny_Right_Black}> {this.state.data.require.loanCreated}</Text>
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
                            <Text style={[AppStyle.Small_Right_Red, { fontWeight: 'bold', color: Colors.alive_BD3F32 }]}> {this.state.data.require.loanAmount}</Text>
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
                            <Text style={[AppStyle.Tiny_Right_Black, { fontWeight: 'bold', color: Colors.alive_BD3F32 }]}> {this.state.data.require.loanTimeDes}</Text>
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
                            <Text style={[AppStyle.Tiny_Right_Black]}> {this.state.data.require.loanModal}</Text>
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
                            <Text style={AppStyle.Tiny_Right_Black}> {this.state.data.require.job}</Text>
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
                            <Text style={AppStyle.Tiny_Right_Black}> {this.state.data.require.salary}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    renderInfo() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                paddingTop: scale(10),
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor: Colors.duckEggBlue
                }}>
                    <Text style={[AppStyle.Paragraph_Left_Black, { fontWeight: 'bold' }]}> {'Thông tin cá nhân'}</Text>
                    <FontAwesome style={{
                        marginLeft: scale(20)
                    }} name="pencil-square-o" size={20} color={Colors.black} />
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: scale(10)
                }}>
                    <View style={{
                        // flex: 1,
                        flexDirection: 'row',
                    }}>
                        <Text style={AppStyle.Tiny_Left_Black}> {'Giới tính: '}</Text>
                        <Text style={[AppStyle.Tiny_Left_Black, { fontWeight: 'bold' }]}> {this.state.data.info.gender}</Text>
                    </View>
                    <View style={{
                        // flex: 1,
                        flexDirection: 'row',
                    }}>
                        <Text style={AppStyle.Tiny_Right_Black}> {'TT hôn nhân: '}</Text>
                        <Text style={[AppStyle.Tiny_Right_Black, { fontWeight: 'bold' }]}> {this.state.data.info.status}</Text>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: scale(5)
                }}>
                    <View style={{
                        // flex: 1,
                        flexDirection: 'row',
                    }}>
                        <Text style={AppStyle.Tiny_Left_Black}> {'CMND: '}</Text>
                        <Text style={[AppStyle.Tiny_Left_Black, { fontWeight: 'bold' }]}> {this.state.data.info.cardID}</Text>
                    </View>
                    <View style={{
                        // flex: 1,
                        flexDirection: 'row',
                    }}>
                        <Text style={AppStyle.Tiny_Right_Black}> {'Ngày sinh: '}</Text>
                        <Text style={[AppStyle.Tiny_Right_Black, { fontWeight: 'bold' }]}> {this.state.data.info.birthday}</Text>
                    </View>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginTop: scale(5),
                    justifyContent: 'space-between'
                }}>
                    <Text style={AppStyle.Tiny_Left_Black}> {'Email: '}</Text>
                    <Text style={[AppStyle.Tiny_Left_Black, { fontWeight: 'bold' }]}> {this.state.data.info.email}</Text>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginTop: scale(5),
                    justifyContent: 'space-between'
                }}>
                    <Text style={AppStyle.Tiny_Left_Black}> {'Địa chỉ thường trú: '}</Text>
                    <Text style={[AppStyle.Tiny_Left_Black, { fontWeight: 'bold' }]}> {this.state.data.info.addressMain}</Text>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginTop: scale(5),
                    justifyContent: 'space-between'
                }}>
                    <Text style={AppStyle.Tiny_Left_Black}> {'Địa chỉ tạm trú: '}</Text>
                    <Text style={[AppStyle.Tiny_Left_Black, { fontWeight: 'bold' }]}> {this.state.data.info.addressTemp}</Text>
                </View>
            </View>
        )
    }

    renderJob() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                paddingTop: scale(10),
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    backgroundColor: Colors.duckEggBlue
                }}>
                    <Text style={[AppStyle.Paragraph_Left_Black, { fontWeight: 'bold' }]}> {'Thông tin công việc'}</Text>
                    <FontAwesome style={{
                        marginLeft: scale(20)
                    }} name="pencil-square-o" size={20} color={Colors.black} />
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginTop: scale(10),
                    justifyContent: 'space-between'
                }}>
                    <Text style={AppStyle.Tiny_Left_Black}> {'Công việc: '}</Text>
                    <Text style={[AppStyle.Tiny_Left_Black, { fontWeight: 'bold' }]}> {this.state.data.job.name}</Text>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginTop: scale(5),
                    justifyContent: 'space-between'
                }}>
                    <Text style={AppStyle.Tiny_Left_Black}> {'Tên công ty: '}</Text>
                    <Text style={[AppStyle.Tiny_Left_Black, { fontWeight: 'bold' }]}> {this.state.data.job.company}</Text>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginTop: scale(5),
                    justifyContent: 'space-between'
                }}>
                    <Text style={AppStyle.Tiny_Left_Black}> {'Thời gian làm việc: '}</Text>
                    <Text style={[AppStyle.Tiny_Left_Black, { fontWeight: 'bold' }]}> {this.state.data.job.time}</Text>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginTop: scale(5),
                    justifyContent: 'space-between'
                }}>
                    <Text style={AppStyle.Tiny_Left_Black}> {'Chức vụ: '}</Text>
                    <Text style={[AppStyle.Tiny_Left_Black, { fontWeight: 'bold' }]}> {this.state.data.job.position}</Text>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginTop: scale(5),
                    justifyContent: 'space-between'
                }}>
                    <Text style={AppStyle.Tiny_Left_Black}> {'Thu nhập: '}</Text>
                    <Text style={[AppStyle.Tiny_Left_Black, { fontWeight: 'bold' }]}> {this.state.data.job.salary}</Text>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginTop: scale(5),
                    justifyContent: 'space-between'
                }}>
                    <Text style={AppStyle.Tiny_Left_Black}> {'Hình thức nhận lương: '}</Text>
                    <Text style={[AppStyle.Tiny_Left_Black, { fontWeight: 'bold' }]}> {this.state.data.job.salaryModal}</Text>
                </View>
            </View>
        )
    }

    renderUpdateStatusCus() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                paddingTop: scale(10),
            }}>
                <Text style={[AppStyle.Paragraph_Left_Black, { fontWeight: 'bold' }]}> {'CẬP NHẬT TÌNH TRẠNG KHÁCH HÀNG'}</Text>
                <Picker
                    backgroundColor={Colors.whiteTwo}
                    data={config.customerStatus}
                    onValueChange={(text) => this.onChangeStatusCustomer(text)}
                    styleInput={{
                        height: Platform.OS === 'ios' ? scale(40) : scale(40),
                        paddingTop: Platform.OS === 'ios' ? scale(2) : scale(0),
                        paddingLeft: scale(20),
                    }}
                    enableReceive={true}
                    value={this.state.status}
                />
                <View style={{
                    marginTop: scale(5),
                    flexDirection: 'column',
                    borderRadius: 5,
                    paddingLeft: scale(20),
                    backgroundColor: Colors.whiteTwo,
                    borderColor: Colors.whiteThree,
                    borderWidth: scale(2),
                }} >
                    <TextInput
                        style={{
                            height: scale(80)
                        }}
                        placeholder={'Nội dung'}
                        keyboardType={'default'}
                        multiline={true}
                        onChangeText={(text) => this.onChangeContentCustomer(text)}
                        ref={(obj) => this.inputContent = obj}
                    />
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginTop: scale(5),
                    justifyContent: 'space-between'
                }}>
                    <ButtonNext
                        actionPress={this.updateListStatus}
                        disable={false}
                        title={'Cập nhật ngay'}
                        style={{
                            width: scale(165),
                            marginTop: scale(5),
                            backgroundColor: Colors.alive_BD3F32,
                            height: Platform.OS === 'ios' ? scale(50) : scale(40),
                        }}
                    />
                    <ButtonNext
                        actionPress={null}
                        disable={false}
                        title={'Huỷ cập nhật'}
                        textStyle={AppStyle.Title_Center_Black}
                        style={{
                            marginTop: scale(5),
                            width: scale(165),
                            backgroundColor: Colors.whiteTwo,
                            borderColor: Colors.whiteThree,
                            borderWidth: scale(2),
                            height: Platform.OS === 'ios' ? scale(50) : scale(40),
                        }}
                    />
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'column',
                    marginTop: scale(10),
                    borderColor: Colors.whiteThree,
                    borderWidth: scale(2),
                }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'row',
                        marginTop: scale(5),
                        borderBottomColor: Colors.whiteThree,
                        borderBottomWidth: scale(1),
                    }}>
                        <Text style={[AppStyle.Tiny_Center_Black, { width: scale(30) }]}> {'Lần'}</Text>
                        <Text style={[AppStyle.Tiny_Center_Black, { width: scale(80) }]}> {'Thời gian'}</Text>
                        <Text style={[AppStyle.Tiny_Center_Black, { flex: 1 }]}> {'Tình trạng - Ghi chú'}</Text>
                    </View>
                    {this.renderContentComment()}
                </View>
            </View>
        )
    }

    renderContentComment() {
        var template = []
        for (var i = 0; i < this.state.statusList.length; i++) {
            var list = this.state.statusList[i]
            template.push(
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    marginTop: scale(5),
                    borderBottomColor: Colors.whiteThree,
                    borderBottomWidth: scale(1),
                }} key={'comment-' + i}>
                    <Text style={[AppStyle.Tiny_Center_Black, { width: scale(30) }]}> {list.id}</Text>
                    <Text style={[AppStyle.Tiny_Center_Black, { width: scale(80) }]}> {list.time}</Text>
                    <Text style={[AppStyle.Tiny_Center_Black, { flex: 1 }]}> {list.status + '\n' + list.comment}</Text>
                </View>
            )
        }
        return template
    }

    renderBtnCallCus() {
        return (
            <TouchableOpacity style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: scale(10),
                backgroundColor: Colors.call,
                height: scale(40),
                borderRadius: scale(5),
            }} onPress={this.actionPhoneCall}>
                <Ionicons name="ios-call" size={30} color={Colors.whiteTwo} />
                <Text style={AppStyle.Paragraph_Center_White}> {'Gọi khách ngay'}</Text>
            </TouchableOpacity>
        )
    }

    actionBack = () => {
        this.props.navigation.goBack()
    }
    baseRef = (obj) => this.base = obj
    render() {
        return (
            <BaseContainer
                currentScreen={'StochExchangeDetail'}
                ref={this.baseRef}
                onBackHandler={this.actionBack}
                showHeader={true}
                titleHeader={'Thông tin chi tiết khách hàng'}
                showHeaderBack={true}
                actionHeaderBack={this.actionBack}
                ownStyle={{
                    flex: 1,
                    backgroundColor: Colors.whiteTwo,
                    paddingLeft: scale(20),
                    paddingRight: scale(20),
                    paddingBottom: scale(10),
                }}
            >
                <ScrollView style={{
                    flex: 1,
                    flexDirection: 'column',
                }} showsVerticalScrollIndicator={false}>
                    {this.renderStockExchange()}
                    {this.renderInfo()}
                    {this.renderJob()}
                    <View style={{
                        marginTop: scale(10),
                        width: '100%',
                        height: scale(10),
                        backgroundColor: Colors.whiteThree
                    }} />
                    {this.renderUpdateStatusCus()}
                    {this.renderBtnCallCus()}
                </ScrollView>
            </BaseContainer>
        )
    }

    onChangeStatusCustomer(text) {
        this.setState({
            status: text
        })
    }

    onChangeContentCustomer(text) {
        this.setState({
            content: text
        })
    }

    updateListStatus = () => {
        if (this.state.status === '' || this.state.status === null || 
        this.state.status === undefined || this.state.content === '') {
        } else {
            this.props.updateTicketStatus('', this.state.statusList, this.state.status, this.state.content)
        }
    }

    actionPhoneCall = () => {
        const args = {
            number: this.state.data.require.phone,
            prompt: false
        }

        call(args).catch(console.error)
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
    updateTicketStatus: (id, list, status, content) => dispatch(LoanAction.updateTicketStatus(id, list, status, content)),
})


export default connect(mapStateToProps, mapDispatchToProps)(StockExchangeDetailContainer)