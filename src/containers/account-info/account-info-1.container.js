import React, { PureComponent } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Platform,
    Keyboard,
} from 'react-native';
import { connect } from 'react-redux'
import BaseContainer from '../home/base.container'
import InputPicker from '../../components/input/InputPicker'
import InputType3 from '../../components/input/InputType3'
import config from '../../config/config'
import { scale } from '../../theme/scaling';
import Localization from '../../config/languages/i18n'
import { AppStyle, Colors, Screens } from '../../theme'
import DatePicker from 'react-native-datepicker'
import appConfig from '../../config/app-config'
import AccountAction, { AccountTypes } from '../../redux/account.redux'
import ButtonNextType2 from '../../components/button/BtnNext2'
import * as Buz from '../../saga/buz/app-buz'
import * as Helper from '../../saga/buz/app-helper'
const { msg } = require('../../config/languages/message-error')

class AccountInfo1Container extends PureComponent {
    constructor(props) {
        super(props);
        this.account = Buz.getAccount()
        // var enable = true
        if (this.account.info_1 === undefined) {
            // enable = false
            this.state = {
                enable: !this.account.updateInfoTask.includes(config.ACCOUNT_INFO_NORMAL_ONE),

                name: '',
                dob: '1994-02-09',
                cmnd: '',
                gender: 'NAM',
                marryStatus: '',
                education: ''
            }
        } else {
            this.state = {
                enable: !this.account.updateInfoTask.includes(config.ACCOUNT_INFO_NORMAL_ONE),

                name: this.account.info_1.name,
                dob: this.account.info_1.dob,
                cmnd: this.account.info_1.cmnd,
                gender: this.account.info_1.gender,
                marryStatus: this.account.info_1.marryStatus,
                education: this.account.info_1.education,
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('ccountInfo1-receive', JSON.stringify(nextProps))
        // console.log('this.props.fetchStatus', this.props.fetchStatus)
        // console.log('nextProps.fetchStatus', nextProps.fetchStatus)
        // if (nextProps.fetchStatus === config.FetchStatus.kFinishFetch &&
        //     this.props.fetchStatus !== nextProps.fetchStatus) {
        switch (nextProps.currentRequestName) {
            case AccountTypes.UPDATE_INFO_ONE:
                if (true === nextProps.apiStatus) {
                    this.base.loading(true)
                    if (this.props.actionFinish) {
                        this.props.actionFinish()
                    }
                } else {
                    this.base.showErrorAlert(nextProps.error)
                }
                break;

            default:
                break;
        }
        // }
    }

    renderInputDate() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                borderRadius: 5,
                borderBottomColor: Colors.whiteThree,
                borderBottomWidth: scale(1),
                marginTop: scale(10),
                marginBottom: scale(15),
                height: scale(50),
            }} >
                <Text style={AppStyle.Paragraph_Left_Black}>{'Ngày sinh'}</Text>
                <View style={{
                    marginTop: scale(5),
                    borderColor: Colors.grey,
                    borderWidth: scale(1),
                    borderRadius: scale(5),
                    height: scale(40),
                    backgroundColor: Colors.whiteTwo,
                }} >
                    <DatePicker
                        style={{
                            flex: 1,
                            width: '100%',
                        }}
                        date={this.state.dob}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="1800-05-01"
                        maxDate="2019-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        androidMode='spinner'
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: scale(10),
                            },
                            dateInput: {
                                borderWidth: 0,
                            }
                        }}
                        onDateChange={(date) => { this.setState({ dob: date }) }}
                        disabled={!this.state.enable}
                    />
                </View>
            </View>
        )
    }

    renderInputGender() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                borderRadius: 5,
                borderBottomColor: Colors.whiteThree,
                borderBottomWidth: scale(1),
                marginTop: scale(10)
            }} >
                <Text style={AppStyle.Paragraph_Left_Black}>{'Giới tính'}</Text>
                <View style={{
                    flex: 1,
                    marginTop: scale(5),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: scale(40),
                }} >
                    <TouchableOpacity style={{
                        flex: 1 / 2,
                        flexDirection: 'row',
                        // justifyContent: 'space-between',
                        alignItems: 'center',
                        borderColor: Colors.grey,
                        borderWidth: scale(1),
                        borderRadius: scale(5),
                        // paddingLeft: scale(20),
                        backgroundColor: Colors.whiteTwo,
                    }} onPress={() => {
                        if(this.state.enable) {
                            this.onChangeGender('NAM')
                        }
                    }}>
                        <Text style={[AppStyle.Paragraph_Left_Black, { marginLeft: scale(20) }]}>{'Nam'}</Text>
                        <View style={{
                            width: scale(20),
                            height: scale(20),
                            borderRadius: scale(10),
                            borderColor: Colors.black,
                            borderWidth: scale(1),
                            marginLeft: scale(80),
                            backgroundColor: this.state.gender === 'NAM' ? Colors.alive_BD3F32 : null
                        }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        flex: 1 / 2,
                        flexDirection: 'row',
                        // justifyContent: 'space-between',
                        alignItems: 'center',
                        borderColor: Colors.grey,
                        borderWidth: scale(1),
                        borderRadius: scale(5),
                        // padding: scale(20),
                        backgroundColor: Colors.whiteTwo,
                    }} onPress={() => {
                        if(this.state.enable) {
                            this.onChangeGender('NU')
                        }
                    }}>
                        <Text style={[AppStyle.Paragraph_Left_Black, { marginLeft: scale(20) }]}>{'Nữ'}</Text>
                        <View style={{
                            width: scale(20),
                            height: scale(20),
                            borderRadius: scale(10),
                            borderColor: Colors.black,
                            borderWidth: scale(1),
                            marginLeft: scale(90),
                            backgroundColor: this.state.gender === 'NU' ? Colors.alive_BD3F32 : null
                        }} />
                    </TouchableOpacity>
                </View>
            </View>
        )
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
                currentScreen={'AccountInfo'}
                ref={this.baseRef}
                onBackHandler={this.actionBack}
                ownStyle={{
                    flex: 1,
                    paddingLeft: scale(10),
                    paddingRight: scale(10),
                    paddingBottom: scale(10),
                    backgroundColor: Colors.whiteTwo,
                    justifyContent: 'space-between',
                }}
            >
                <ScrollView style={{
                    flex: 1,
                    flexDirection: 'column',
                    // marginTop: verticalScale(10)
                }} showsVerticalScrollIndicator={false}>
                    <InputType3
                        keyboardType={'default'}
                        title={'Họ tên'}
                        placeholder={'Điền họ tên có dấu'}
                        onChangeText={(text) => this.onChangeName(text)}
                        autoCapitalize={'characters'}
                        styleInput={{
                            marginTop: scale(5),
                            borderColor: Colors.grey,
                            borderWidth: scale(1),
                            borderRadius: scale(5),
                            backgroundColor: Colors.whiteTwo,
                            // height: Platform.OS === 'ios' ? scale(40) : scale(40),
                            // paddingTop: Platform.OS === 'ios' ? scale(10) : scale(0),
                            paddingLeft: scale(20),
                        }}
                        value={this.state.name}
                        editable={this.state.enable}
                    />
                    {this.renderInputDate()}

                    <InputType3
                        keyboardType={'numeric'}
                        title={'CMND'}
                        placeholder={'CMND'}
                        onChangeText={(text) => this.onChangeCMND(text)}
                        styleInput={{
                            marginTop: scale(5),
                            borderColor: Colors.grey,
                            borderWidth: scale(1),
                            borderRadius: scale(5),
                            backgroundColor: Colors.whiteTwo,
                            // height: Platform.OS === 'ios' ? scale(40) : scale(40),
                            // paddingTop: Platform.OS === 'ios' ? scale(10) : scale(0),
                            paddingLeft: scale(20),
                        }}
                        maxLength={10}
                        value={this.state.cmnd}
                        editable={this.state.enable}
                    />

                    {this.renderInputGender()}

                    <InputPicker
                        name={'Tình trạng hôn nhân'}
                        onValueChange={(text) => this.onChangeStatus(text)}
                        data={config.marryStatus}
                        styleInput={{
                            marginTop: scale(5),
                            borderColor: Colors.grey,
                            borderWidth: scale(1),
                            borderRadius: scale(5),
                            backgroundColor: Colors.whiteTwo,
                            // height: Platform.OS === 'ios' ? scale(40) : scale(40),
                            // paddingTop: Platform.OS === 'ios' ? scale(3) : scale(0),
                            paddingLeft: scale(20),
                        }}
                        value={this.state.marryStatus}
                        editable={this.state.enable}
                    />

                    <InputPicker
                        name={'Tình độ học vấn'}
                        onValueChange={(text) => this.onChangeLevel(text)}
                        data={config.education}
                        styleInput={{
                            marginTop: scale(5),
                            borderColor: Colors.grey,
                            borderWidth: scale(1),
                            borderRadius: scale(5),
                            backgroundColor: Colors.whiteTwo,
                            // height: Platform.OS === 'ios' ? scale(40) : scale(40),
                            // paddingTop: Platform.OS === 'ios' ? scale(3) : scale(0),
                            paddingLeft: scale(20),
                        }}
                        value={this.state.education}
                        editable={this.state.enable}
                    />
                </ScrollView>
                {this.renderButtonNext()}
            </BaseContainer>
        )
    }

    onChangeName(text) {
        this.setState({
            name: text
        })
    }
    onChangeCMND(text) {
        this.setState({
            cmnd: text
        })
        if (text.length === appConfig.LENGTH_CMND) {
            Keyboard.dismiss()
        }
    }
    onChangeGender = (gender) => {
        this.setState({
            gender
        })
    }
    onChangeStatus(text) {
        this.setState({
            marryStatus: text
        })
    }
    onChangeLevel(text) {
        this.setState({
            education: text
        })
    }

    actionNext = () => {
        if (this.state.enable === false) {
            this.setState({
                enable: true
            })
        } else {
            if (!Helper.checkValidString(this.state.name)) {
                this.base.showErrorAlert(msg.ERR_APP_INVALID_CONTACT_NAME)
                return
            }
            if (!Helper.checkValidString(this.state.cmnd)) {
                this.base.showErrorAlert(msg.ERR_APP_INVALID_INFO_CMND)
                return
            }
            if (!Helper.checkValidString(this.state.gender)) {
                this.base.showErrorAlert(msg.ERR_APP_INVALID_INFO_GENDER)
                return
            }
            if (!Helper.checkValidString(this.state.marryStatus)) {
                this.base.showErrorAlert(msg.ERR_APP_INVALID_INFO_MARRY)
                return
            }
            if (!Helper.checkValidString(this.state.education)) {
                this.base.showErrorAlert(msg.ERR_APP_INVALID_INFO_EDUCATION)
                return
            }
            this.base.loading(true)
            this.props.updateInfoOne(this.state.name, this.state.dob, this.state.cmnd,
                this.state.gender, this.state.marryStatus, this.state.education)
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
    updateInfoOne: (name, dob, cmnd, gender, marryStatus, education) => dispatch(AccountAction.updateInfoOne(name, dob, cmnd, gender, marryStatus, education)),
})


export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo1Container)