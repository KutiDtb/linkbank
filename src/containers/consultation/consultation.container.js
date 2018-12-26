import React, { PureComponent } from 'react';
import {
    View,
    Text,
    ScrollView,
    Platform,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import TaskConsultant from '../../components/task/TaskConsultant'
import InputPicker from '../../components/input/InputPicker'
import TaskDocument from '../../components/task/TaskDocument'
import { scale } from '../../theme/scaling'
import Localization from '../../config/languages/i18n'
import config from '../../config/config'
import { AppStyle, Colors, Images, Screens } from '../../theme'
import LoanModal from '../../components/loan/LoanModal'
import ButtonNextType2 from '../../components/button/BtnNext2'
import AccountAction, { AccountTypes } from '../../redux/account.redux'
import * as Helper from '../../saga/buz/app-helper'
const { msg } = require('../../config/languages/message-error')

const RENDER_STEP = {
    ONE: 'ONE',
    TWO: 'TWO',
    THREE: 'THREE'
}
class ConsultationContainer extends PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            renderStep: RENDER_STEP.ONE,

            product: '',
            company: '',
            area: '',
            loanModal: [],
            imgCardEmploy: '',
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('consultance register-receive', JSON.stringify(nextProps))
        // console.log('this.props.fetchStatus', this.props.fetchStatus)
        // console.log('nextProps.fetchStatus', nextProps.fetchStatus)
        // if (nextProps.fetchStatus === config.FetchStatus.kFinishFetch &&
        //     this.props.fetchStatus !== nextProps.fetchStatus) {
        switch (nextProps.currentRequestName) {
            case AccountTypes.CONSULTANCE_REGISTER:
                if (true === nextProps.apiStatus) {
                    this.props.navigation.navigate(Screens.PageSuccess, {
                        msg: Localization('SUCC_APP_CONSULTANCE_REGISTER')
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

    renderStepOne() {
        return (
            <ScrollView style={{
                flex: 1,
                flexDirection: 'column',
                marginTop: scale(10)
            }} showsVerticalScrollIndicator={false}>
                <TaskConsultant step={1} />
                <Text style={[AppStyle.Paragraph_Center_Grey, { marginTop: scale(20) }]}> {'Để trở thành tư vấn viên Linkbank, bạn vui lòng cung cấp một số thông tin bên dưới để được xét duyệtduyệt trong thời gian sớm nhất'}</Text>
                <InputPicker
                    name={'Sản phẩm tư vấn'}
                    onValueChange={(text) => this.onChangeProduct(text)}
                    data={config.loanModal}
                    styleInput={{
                        marginTop: scale(5),
                        borderColor: Colors.grey,
                        borderWidth: scale(1),
                        borderRadius: scale(5),
                        backgroundColor: Colors.whiteTwo,
                        height: Platform.OS === 'ios' ? scale(40) : scale(40),
                        paddingTop: Platform.OS === 'ios' ? scale(5) : - scale(5),
                        paddingLeft: scale(20),
                    }}
                />
                <InputPicker
                    name={'Đơn vị công tác'}
                    onValueChange={(text) => this.onChangeCompany(text)}
                    data={config.company}
                    styleInput={{
                        marginTop: scale(5),
                        borderColor: Colors.grey,
                        borderWidth: scale(1),
                        borderRadius: scale(5),
                        backgroundColor: Colors.whiteTwo,
                        height: Platform.OS === 'ios' ? scale(40) : scale(40),
                        paddingTop: Platform.OS === 'ios' ? scale(5) : - scale(5),
                        paddingLeft: scale(20),
                    }}
                />
                <InputPicker
                    name={'Khu vực hoạt động'}
                    onValueChange={(text) => this.onChangeArea(text)}
                    data={config.infoCity}
                    styleInput={{
                        marginTop: scale(5),
                        borderColor: Colors.grey,
                        borderWidth: scale(1),
                        borderRadius: scale(5),
                        backgroundColor: Colors.whiteTwo,
                        height: Platform.OS === 'ios' ? scale(40) : scale(40),
                        paddingTop: Platform.OS === 'ios' ? scale(5) : - scale(5),
                        paddingLeft: scale(20),
                    }}
                />
            </ScrollView>
        )
    }
    renderStepTwo() {
        return (
            <ScrollView style={{
                flex: 1,
                flexDirection: 'column',
                marginTop: scale(10)
            }} showsVerticalScrollIndicator={false}>
                <TaskConsultant step={2} />
                <Text style={[AppStyle.Paragraph_Center_Red, { marginTop: scale(20) }]}> {'Lựa chọn sản phẩm bạn muốn tư vấn'}</Text>
                <LoanModal maxLength={15} actionClick={(value) => this.actionLoanModal(value)} />
            </ScrollView>
        )
    }
    renderStepThree() {
        return (
            <ScrollView style={{
                flex: 1,
                flexDirection: 'column',
                marginTop: scale(10)
            }} showsVerticalScrollIndicator={false}>
                <TaskConsultant step={3} />
                <Text style={[AppStyle.Paragraph_Center_Grey, { marginTop: scale(20) }]}> {'CẬP NHẬT GIẤY TỜ CHỨNG MINH CÔNG VIỆC'}</Text>
                <TaskDocument actionClick={null} task={'Upload thẻ nhân viên'} complete={true} />
            </ScrollView>
        )
    }

    renderByStep() {
        switch (this.state.renderStep) {
            case RENDER_STEP.ONE: {
                return this.renderStepOne()
            }
            case RENDER_STEP.TWO: {
                return this.renderStepTwo()
            }
            case RENDER_STEP.THREE: {
                return this.renderStepThree()
            }
        }
    }
    actionBack = () => {
        this.props.navigation.goBack()
    }
    baseRef = (obj) => this.base = obj
    render() {
        return (
            <BaseContainer
                currentScreen={'Consultation'}
                ref={this.baseRef}
                onBackHandler={this.actionBack}
                showHeader={true}
                titleHeader={Localization('trothanhtuvv')}
                showHeaderBack={true}
                actionHeaderBack={this.actionBack}
                ownStyle={{
                    flex: 1,
                    paddingLeft: scale(10),
                    paddingRight: scale(10),
                    backgroundColor: Colors.white,
                    justifyContent: 'space-between',
                    paddingBottom: scale(10),
                }}
            >
                {this.renderByStep()}
                <ButtonNextType2
                    actionPress={this.actionNext}
                    disable={false}
                    title={'ĐĂNG KÝ'}
                    textStyle={AppStyle.Title_Center_Black}
                />
            </BaseContainer>
        )
    }

    actionNext = () => {
        switch (this.state.renderStep) {
            case RENDER_STEP.ONE: {
                if (!Helper.checkValidString(this.state.product)) {
                    this.base.showErrorAlert(msg.ERR_APP_INVALID_LOAN_MODAL_1)
                    return
                }
                if (!Helper.checkValidString(this.state.company)) {
                    this.base.showErrorAlert(msg.ERR_APP_INVALID_LOAN_COMPANY)
                    return
                }
                if (!Helper.checkValidString(this.state.area)) {
                    this.base.showErrorAlert(msg.ERR_APP_INVALID_LOAN_AREA)
                    return
                }

                this.setState({
                    renderStep: RENDER_STEP.TWO
                })
                break
            }
            case RENDER_STEP.TWO: {
                if (this.state.loanModal.length === 0) {
                    this.base.showErrorAlert(msg.ERR_APP_INVALID_LOAN_MODAL_1)
                    return
                }
                this.setState({
                    renderStep: RENDER_STEP.THREE
                })
                break
            }
            case RENDER_STEP.THREE: {
                // this.setState({
                //     renderStep: RENDER_STEP.ONE
                // })
                this.props.consultanceRegister(this.state.company, this.state.area, this.state.loanModal, this.state.imgCardEmploy)
                break
            }
        }
    }

    onChangeProduct(text) {
        console.log('onChangeProduct', text)
        this.setState({
            product: text
        })
    }

    onChangeLoanModal(text) { }

    onChangeCompany(text) {
        console.log('company', text)
        this.setState({
            company: text
        })
    }

    onChangeArea(text) {
        console.log('area', text)
        this.setState({
            area: text
        })
    }

    actionLoanModal(text) {
        console.log('loanModal', text)
        this.setState({
            loanModal: text
        })
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
    consultanceRegister: (company, area, modal, imgCardEmployee) => dispatch(AccountAction.consultanceRegister(company, area, modal, imgCardEmployee)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ConsultationContainer)