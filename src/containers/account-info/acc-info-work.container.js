import React, { PureComponent } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Platform
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import InputType3 from '../../components/input/InputType3'
import InputPicker from '../../components/input/InputPicker'
import { scale } from '../../theme/scaling'
import Localization from '../../config/languages/i18n'
import config from '../../config/config'
import { AppStyle, Colors, Screens } from '../../theme'
import appConfig from '../../config/app-config'
import AccountAction, { AccountTypes } from '../../redux/account.redux'
import * as Buz from '../../saga/buz/app-buz'
import * as Helper from '../../saga/buz/app-helper'
const { msg } = require('../../config/languages/message-error')
import ButtonNextType2 from '../../components/button/BtnNext2'

class AccountInfoWorkContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.account = Buz.getAccount()

        if (this.account.info_work === undefined) {
            this.state = {
                enable: !this.account.updateInfoTask.includes(config.ACCOUNT_INFO_WORK),

                jobName: '',
                companyName: '',
                companyAddress: '',
                companyPhone: '',
                jobPosision: '',
                jobDuringTime: '',
                salary: '',
                receiveSalaryType: '',
            }
        } else {
            this.state = {
                enable: !this.account.updateInfoTask.includes(config.ACCOUNT_INFO_WORK),

                jobName: this.account.info_work.jobName,
                companyName: this.account.info_work.companyName,
                companyAddress: this.account.info_work.companyAddress,
                companyPhone: this.account.info_work.companyPhone,
                jobPosision: this.account.info_work.jobPosision,
                jobDuringTime: this.account.info_work.jobDuringTime,
                salary: this.account.info_work.salary,
                receiveSalaryType: this.account.info_work.receiveSalaryType,
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('accountInfoWork-receive', JSON.stringify(nextProps))
        // console.log('this.props.fetchStatus', this.props.fetchStatus)
        // console.log('nextProps.fetchStatus', nextProps.fetchStatus)
        if (nextProps.fetchStatus === config.FetchStatus.kFinishFetch &&
            this.props.fetchStatus !== nextProps.fetchStatus) {
            switch (nextProps.currentRequestName) {
                case AccountTypes.UPDATE_INFO_WORK:
                    this.base.loading(false)
                    if (true === nextProps.apiStatus) {
                        this.props.navigation.navigate(Screens.PageSuccess, {
                            msg: Localization('SUCC_APP_UPDATE_INFO_WORK')
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

    renderButtonNext() {
        var title = 'LƯU'
        if (this.state.enable === false) {
            title = 'CHỈNH SỬA'
        }
        return (
            <ButtonNextType2
                actionPress={this.actionNext}
                disable={false}
                title={title}
                textStyle={AppStyle.Title_Center_Black}
            />
        )
    }

    actionBack = () => {
        this.props.navigation.goBack()
    }
    baseRef = (obj) => this.base = obj
    render() {
        return (
            <BaseContainer
                currentScreen={'AccountInfoWork'}
                ref={this.baseRef}
                onBackHandler={this.actionBack}
                showHeader={true}
                titleHeader={Localization('cv')}
                showHeaderBack={true}
                actionHeaderBack={this.actionBack}
                ownStyle={{
                    flex: 1,
                    paddingLeft: scale(10),
                    paddingRight: scale(10),
                    paddingBottom: scale(10),
                    backgroundColor: Colors.white,
                    justifyContent: 'space-between',
                }}
            >
                <View style={{
                    flex: 1,
                    flexDirection: 'column'
                }}>
                    <ScrollView style={{
                        flex: 1,
                        flexDirection: 'column',
                    }} showsVerticalScrollIndicator={false}>
                        <InputPicker
                            name={'Nghề nghiệp'}
                            onValueChange={(text) => this.onChangeJob(text)}
                            data={config.job}
                            styleInput={{
                                marginTop: scale(5),
                                borderColor: Colors.grey,
                                borderWidth: scale(1),
                                borderRadius: scale(5),
                                backgroundColor: Colors.whiteTwo,
                                // height: Platform.OS === 'ios' ? scale(35) : scale(40),
                                paddingLeft: scale(20),
                            }}
                            editable={this.state.enable}
                            value={this.state.jobName}
                        />
                        <InputType3
                            keyboardType={'default'}
                            title={'Tên đơn vị'}
                            placeholder={'Tên đơn vị'}
                            onChangeText={(text) => this.onChangeCompanyName(text)}
                            styleInput={{
                                marginTop: scale(5),
                                borderColor: Colors.grey,
                                borderWidth: scale(1),
                                borderRadius: scale(5),
                                backgroundColor: Colors.whiteTwo,
                                paddingLeft: scale(20),
                            }}
                            editable={this.state.enable}
                            value={this.state.companyName}
                        />

                        <InputType3
                            keyboardType={'default'}
                            title={'Địa chỉ đơn vị'}
                            placeholder={'Địa chỉ đơn vị'}
                            onChangeText={(text) => this.onChangeCompanyAdress(text)}
                            styleInput={{
                                marginTop: scale(5),
                                borderColor: Colors.grey,
                                borderWidth: scale(1),
                                borderRadius: scale(5),
                                backgroundColor: Colors.whiteTwo,
                                paddingLeft: scale(20),
                            }}
                            editable={this.state.enable}
                            value={this.state.companyAddress}
                        />
                        <InputType3
                            keyboardType={'numeric'}
                            title={'SĐT đơn vị'}
                            placeholder={'SĐT đơn vị'}
                            onChangeText={(text) => this.onChangeCompanyPhone(text)}
                            styleInput={{
                                marginTop: scale(5),
                                borderColor: Colors.grey,
                                borderWidth: scale(1),
                                borderRadius: scale(5),
                                backgroundColor: Colors.whiteTwo,
                                paddingLeft: scale(20),
                            }}
                            maxLength={appConfig.LENGTH_PHONE}
                            editable={this.state.enable}
                            value={this.state.companyPhone}
                        />
                        <InputPicker
                            name={'Chức vụ'}
                            onValueChange={(text) => this.onChangeJobPosition(text)}
                            data={config.jobPosition}
                            styleInput={{
                                marginTop: scale(5),
                                borderColor: Colors.grey,
                                borderWidth: scale(1),
                                borderRadius: scale(5),
                                backgroundColor: Colors.whiteTwo,
                                // height: Platform.OS === 'ios' ? scale(35) : scale(40),
                                paddingLeft: scale(20),
                            }}
                            editable={this.state.enable}
                            value={this.state.jobPosision}
                        />
                        <InputPicker
                            name={'Thời gian làm việc'}
                            onValueChange={(text) => this.onChangeDuringTime(text)}
                            data={config.businessTime}
                            styleInput={{
                                marginTop: scale(5),
                                borderColor: Colors.grey,
                                borderWidth: scale(1),
                                borderRadius: scale(5),
                                backgroundColor: Colors.whiteTwo,
                                paddingLeft: scale(20),
                            }}
                            editable={this.state.enable}
                            value={this.state.jobDuringTime}
                        />
                        <InputPicker
                            name={'Mức lương'}
                            onValueChange={(text) => this.onChangeSalary(text)}
                            data={config.salary}
                            styleInput={{
                                marginTop: scale(5),
                                borderColor: Colors.grey,
                                borderWidth: scale(1),
                                borderRadius: scale(5),
                                backgroundColor: Colors.whiteTwo,
                                paddingLeft: scale(20),
                            }}
                            editable={this.state.enable}
                            value={this.state.salary}
                        />
                        <InputPicker
                            name={'Hình thức nhận lương'}
                            onValueChange={(text) => this.onChangeSalaryType(text)}
                            data={config.modalReceiveSalary}
                            styleInput={{
                                marginTop: scale(5),
                                borderColor: Colors.grey,
                                borderWidth: scale(1),
                                borderRadius: scale(5),
                                backgroundColor: Colors.whiteTwo,
                                paddingLeft: scale(20),
                            }}
                            editable={this.state.enable}
                            value={this.state.receiveSalaryType}
                        />
                    </ScrollView>
                    {this.renderButtonNext()}
                </View>
            </BaseContainer>
        )
    }

    onChangeJob(text) {
        console.log('onChangeJob', text)
        this.setState({
            jobName: text
        })
    }
    onChangeCompanyName(text) {
        console.log('onChangeCompanyName', text)
        this.setState({
            companyName: text
        })
    }
    onChangeCompanyAdress(text) {
        console.log('onChangeCompanyAdress', text)
        this.setState({
            companyAddress: text
        })
    }
    onChangeCompanyPhone(text) {
        console.log('onChangeCompanyPhone', text)
        this.setState({
            companyPhone: text
        })
    }
    onChangeJobPosition(text) {
        console.log('onChangeJobPosition', text)
        this.setState({
            jobPosision: text
        })
    }
    onChangeDuringTime(text) {
        console.log('onChangeDuringTime', text)
        this.setState({
            jobDuringTime: text
        })
    }
    onChangeSalary(text) {
        console.log('onChangeSalary', text)
        this.setState({
            salary: text
        })
    }
    onChangeSalaryType(text) {
        console.log('onChangeSalaryType', text)
        this.setState({
            receiveSalaryType: text
        })
    }

    actionNext = () => {
        if (this.state.enable === false) {
            this.setState({
                enable: true
            })
        } else {
            if (!Helper.checkValidString(this.state.jobName)) {
                this.base.showErrorAlert(msg.ERR_APP_INVALID_WORK_NAME)
                return
            }
            if (!Helper.checkValidString(this.state.companyName)) {
                this.base.showErrorAlert(msg.ERR_APP_INVALID_WORK_COMPANY_NAME)
                return
            }
            if (!Helper.checkValidString(this.state.companyAddress)) {
                this.base.showErrorAlert(msg.ERR_APP_INVALID_WORK_COMPANY_ADDRESS)
                return
            }
            if (!Helper.checkValidString(this.state.companyPhone)) {
                this.base.showErrorAlert(msg.ERR_APP_INVALID_WORK_COMPANY_PHONE)
                return
            } else {
                if (Helper.checkPhoneVN(this.state.companyPhone) !== 1) {
                    this.base.showErrorAlert(msg.ERR_APP_PHONE_INVALID)
                    return
                }
            }
            if (!Helper.checkValidString(this.state.jobPosision)) {
                this.base.showErrorAlert(msg.ERR_APP_INVALID_WORK_POSITION)
                return
            }
            if (!Helper.checkValidString(this.state.jobDuringTime)) {
                this.base.showErrorAlert(msg.ERR_APP_INVALID_WORK_TIME)
                return
            }
            if (!Helper.checkValidString(this.state.salary)) {
                this.base.showErrorAlert(msg.ERR_APP_INVALID_WORK_SALARY)
                return
            }
            if (!Helper.checkValidString(this.state.receiveSalaryType)) {
                this.base.showErrorAlert(msg.ERR_APP_INVALID_WORK_SALARY_TYPE)
                return
            }
            this.base.loading(true)
            this.props.updateInfoWork(this.state.jobName, this.state.companyName, this.state.companyAddress, this.state.companyPhone,
                this.state.jobPosision, this.state.jobDuringTime, this.state.salary, this.state.receiveSalaryType)
        }
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
    updateInfoWork: (jobName, companyName, companyAddress, companyPhone, jobPosision, jobDuringTime, salary, receiveSalaryType) => dispatch(AccountAction.updateInfoWork(jobName, companyName, companyAddress, companyPhone, jobPosision, jobDuringTime, salary, receiveSalaryType)),
})


export default connect(mapStateToProps, mapDispatchToProps)(AccountInfoWorkContainer)