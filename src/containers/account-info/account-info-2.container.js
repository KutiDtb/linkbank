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
import InputPicker from '../../components/input/InputPicker'
import InputType3 from '../../components/input/InputType3'
import config from '../../config/config'
import Picker from '../../components/input/Picker'
import { scale } from '../../theme/scaling';
import Localization from '../../config/languages/i18n'
import { AppStyle, Colors, Screens } from '../../theme'
import appConfig from '../../config/app-config'
import AccountAction, { AccountTypes } from '../../redux/account.redux'
const { city, mapCityProvince, mapProvinceWard } = require('../../config/city')
import ButtonNextType2 from '../../components/button/BtnNext2'
import * as Buz from '../../saga/buz/app-buz'
import * as Helper from '../../saga/buz/app-helper'
const { msg } = require('../../config/languages/message-error')

class AccountInfo2Container extends PureComponent {
    constructor(props) {
        super(props);
        this.account = Buz.getAccount()

        if (this.account.info_2 === undefined) {
            this.state = {
                enable: !this.account.updateInfoTask.includes(config.ACCOUNT_INFO_NORMAL_TWO),

                configCity: city,
                configProvince: [],
                configAward: [],

                mainCity: '',
                mainDicstrict: '',
                mainWard: '',
                configCurrCity: city,
                configCurrProvince: [],
                configCurrAward: [],

                currCity: '',
                currDicstrict: '',
                currWard: '',

                liveModal: ''
            }
        } else {
            this.state = {
                enable: !this.account.updateInfoTask.includes(config.ACCOUNT_INFO_NORMAL_TWO),

                configCity: city,
                configProvince: mapCityProvince[this.account.info_2.mainCity],
                configAward: mapProvinceWard[this.account.info_2.mainProvince],

                mainCity: this.account.info_2.mainCity,
                mainDicstrict: this.account.info_2.mainProvince,
                mainWard: this.account.info_2.mainWard,
                configCurrCity: city,
                configCurrProvince: mapCityProvince[this.account.info_2.currCity],
                configCurrAward: mapProvinceWard[this.account.info_2.currProvince],

                currCity: this.account.info_2.currCity,
                currDicstrict: this.account.info_2.currProvince,
                currWard: this.account.info_2.currWard,

                liveModal: this.account.info_2.liveModal
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('accountInfo2-receive', JSON.stringify(nextProps))
        // console.log('this.props.fetchStatus', this.props.fetchStatus)
        // console.log('nextProps.fetchStatus', nextProps.fetchStatus)
        // if (nextProps.fetchStatus === config.FetchStatus.kFinishFetch &&
        //     this.props.fetchStatus !== nextProps.fetchStatus) {
        switch (nextProps.currentRequestName) {
            case AccountTypes.UPDATE_INFO_TWO:
                this.base.loading(false)
                if (true === nextProps.apiStatus) {
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
        console.log('acc-info-2 render')
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
                    <InputPicker
                        name={'Địa chỉ hộ khẩu'}
                        onValueChange={(text) => this.onChangeCityMain(text)}
                        data={config.infoCity}
                        placeholder={'Tỉnh/Thành phố'}
                        styleInput={{
                            marginTop: scale(5),
                            borderColor: Colors.grey,
                            borderWidth: scale(1),
                            borderRadius: scale(5),
                            backgroundColor: Colors.whiteTwo,
                            // height: Platform.OS === 'ios' ? scale(40) : scale(40),
                            // paddingTop: Platform.OS === 'ios' ? scale(5) : scale(0),
                            paddingLeft: scale(20),
                        }}
                        data={this.state.configCity}
                        value={this.state.mainCity}
                        editable={this.state.enable}
                    />

                    <Picker
                        data={config.infoDistrict}
                        placeholder={'Quận/Huyện'}
                        styleInput={{
                            marginTop: scale(5),
                            borderColor: Colors.grey,
                            borderWidth: scale(1),
                            borderRadius: scale(5),
                            padding: scale(0),
                            backgroundColor: Colors.whiteTwo,
                            // height: Platform.OS === 'ios' ? scale(40) : scale(40),
                            // paddingTop: Platform.OS === 'ios' ? scale(5) : scale(0),
                            paddingLeft: scale(20),
                        }}
                        onValueChange={(text) => this.onChangeDistrictMain(text)}
                        data={this.state.configProvince}
                        value={this.state.mainDicstrict}
                        editable={this.state.enable}
                    />

                    <Picker
                        data={config.infoWard}
                        placeholder={'Phường/Xã'}
                        styleInput={{
                            marginTop: scale(5),
                            borderColor: Colors.grey,
                            borderWidth: scale(1),
                            borderRadius: scale(5),
                            padding: scale(0),
                            backgroundColor: Colors.whiteTwo,
                            // height: Platform.OS === 'ios' ? scale(40) : scale(40),
                            // paddingTop: Platform.OS === 'ios' ? scale(5) : scale(0),
                            paddingLeft: scale(20),
                        }}
                        onValueChange={(text) => this.onChangeWardMain(text)}
                        data={this.state.configAward}
                        value={this.state.mainWard}
                        editable={this.state.enable}
                    />

                    <InputPicker
                        name={'Địa chỉ tạm trú'}
                        onValueChange={(text) => this.onChangeCity(text)}
                        data={config.infoCity}
                        placeholder={'Tỉnh/Thành phố'}
                        styleInput={{
                            position: 'relative',
                            marginTop: - scale(30),
                            marginTop: scale(5),
                            borderColor: Colors.grey,
                            borderWidth: scale(1),
                            borderRadius: scale(5),
                            backgroundColor: Colors.whiteTwo,
                            // height: Platform.OS === 'ios' ? scale(40) : scale(40),
                            // paddingTop: Platform.OS === 'ios' ? scale(5) : scale(0),
                            paddingLeft: scale(20),
                        }}
                        data={this.state.configCurrCity}
                        value={this.state.currCity}
                        editable={this.state.enable}
                        // showCoppyData={true}
                        // actionCoppy={this.actionCoppy}
                    />

                    <Picker
                        data={config.infoDistrict}
                        placeholder={'Quận/Huyện'}
                        styleInput={{
                            marginTop: scale(5),
                            borderColor: Colors.grey,
                            borderWidth: scale(1),
                            borderRadius: scale(5),
                            padding: scale(0),
                            backgroundColor: Colors.whiteTwo,
                            // height: Platform.OS === 'ios' ? scale(40) : scale(40),
                            // paddingTop: Platform.OS === 'ios' ? scale(5) : scale(0),
                            paddingLeft: scale(20),
                        }}
                        onValueChange={(text) => this.onChangeDistrict(text)}
                        data={this.state.configCurrProvince}
                        value={this.state.currDicstrict}
                        editable={this.state.enable}
                    />

                    <Picker
                        data={config.infoWard}
                        placeholder={'Phường/Xã'}
                        styleInput={{
                            marginTop: scale(5),
                            borderColor: Colors.grey,
                            borderWidth: scale(1),
                            borderRadius: scale(5),
                            padding: scale(0),
                            backgroundColor: Colors.whiteTwo,
                            // height: Platform.OS === 'ios' ? scale(40) : scale(40),
                            // paddingTop: Platform.OS === 'ios' ? scale(5) : scale(0),
                            paddingLeft: scale(20),
                        }}
                        onValueChange={(text) => this.onChangeWard(text)}
                        data={this.state.configCurrAward}
                        value={this.state.currWard}
                        editable={this.state.enable}
                    />

                    <InputPicker
                        name={'Hình thức cư trú'}
                        onValueChange={(text) => this.onChangeModalLive(text)}
                        data={config.infoModalLive}
                        styleInput={{
                            marginTop: scale(5),
                            borderColor: Colors.grey,
                            borderWidth: scale(1),
                            borderRadius: scale(5),
                            backgroundColor: Colors.whiteTwo,
                            // height: Platform.OS === 'ios' ? scale(40) : scale(40),
                            // paddingTop: Platform.OS === 'ios' ? scale(5) : scale(0),
                            paddingLeft: scale(20),
                        }}
                        value={this.state.liveModal}
                        editable={this.state.enable}
                    />
                </ScrollView>
                {this.renderButtonNext()}
            </BaseContainer>
        )
    }

    onChangeCity(text) {
        console.log('onChangeCity', text)
        this.setState({
            currCity: text,
            configCurrProvince: mapCityProvince[text],
            configCurrAward: []
        })
    }
    onChangeDistrict(text) {
        this.setState({
            currDicstrict: text,
            configCurrAward: mapProvinceWard[text]
        })
    }
    onChangeWard(text) {
        this.setState({
            currWard: text,

        })
    }

    onChangeCityMain(text) {
        console.log('onChangeCityMain', text)
        this.setState({
            mainCity: text,
            configProvince: mapCityProvince[text],
            configAward: []
        })
    }
    onChangeDistrictMain(text) {
        console.log('onChangeDistrictMain', text)
        this.setState({
            mainDicstrict: text,
            configAward: mapProvinceWard[text]
        })
    }
    onChangeWardMain(text) {
        console.log('onChangeWardMain', text)
        this.setState({
            mainWard: text,
        })
    }
    onChangeModalLive(text) {
        this.setState({
            liveModal: text,
        })
    }

    actionCoppy = () => {
        console.log('this.state.mainCity', this.state.mainCity)
        this.setState({
            currCity: this.state.mainCity,
            currDicstrict: this.state.mainDicstrict,
            // configCurrProvince: this.state.mainDicstrict,
            // configCurrAward: this.state.mainWard,
        })
    }


    actionNext = () => {
        // this.props.navigation.goBack()
        if (this.state.enable === false) {
            this.setState({
                enable: true,
            })
        } else {
            if (!Helper.checkValidString(this.state.mainCity)) {
                this.base.showErrorAlert(msg.ERR_APP_INVALID_ADDRESS_CITY)
                return
            }
            if (!Helper.checkValidString(this.state.mainDicstrict)) {
                this.base.showErrorAlert(msg.ERR_APP_INVALID_ADDRESS_PROVINCE)
                return
            }
            if (!Helper.checkValidString(this.state.mainWard)) {
                this.base.showErrorAlert(msg.ERR_APP_INVALID_ADDRESS_WARD)
                return
            }
            if (!Helper.checkValidString(this.state.currCity)) {
                this.base.showErrorAlert(msg.ERR_APP_INVALID_ADDRESS_CITY)
                return
            }
            if (!Helper.checkValidString(this.state.currDicstrict)) {
                this.base.showErrorAlert(msg.ERR_APP_INVALID_ADDRESS_PROVINCE)
                return
            }
            if (!Helper.checkValidString(this.state.currWard)) {
                this.base.showErrorAlert(msg.ERR_APP_INVALID_ADDRESS_WARD)
                return
            }

            if (!Helper.checkValidString(this.state.liveModal)) {
                this.base.showErrorAlert(msg.ERR_APP_INVALID_LIVE_MODAL)
                return
            }
            this.base.loading(true)
            this.props.updateInfoTwo(this.state.mainCity, this.state.mainDicstrict, this.state.mainWard,
                this.state.currCity, this.state.currDicstrict, this.state.currWard, this.state.liveModal)
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
    updateInfoTwo: (mainCity, mainDistrict, mainWard, currCity, currDistrict, currWard, liveModal) => dispatch(AccountAction.updateInfoTwo(mainCity, mainDistrict, mainWard, currCity, currDistrict, currWard, liveModal)),
})


export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo2Container)