import React, { PureComponent } from 'react';
import {
    View,
    Platform,
    ScrollView,
    Text,
    Keyboard,
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
import PureFlastList from '../../components/flatlist/PureFlatList'
import ButtonNextType2 from '../../components/button/BtnNext2'
import * as Helper from '../../saga/buz/app-helper'
const { msg } = require('../../config/languages/message-error')
import * as Buz from '../../saga/buz/app-buz'

class AccountContactContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.account = Buz.getAccount()

        this.state = {
            contacts: this.account.relations,

            contactModal: '',
            contactName: '',
            contactPhone: '',
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('account-contact-receive', JSON.stringify(nextProps))
        // console.log('this.props.fetchStatus', this.props.fetchStatus)
        // console.log('nextProps.fetchStatus', nextProps.fetchStatus)
        if (nextProps.fetchStatus === config.FetchStatus.kFinishFetch &&
            this.props.fetchStatus !== nextProps.fetchStatus) {
            switch (nextProps.currentRequestName) {
                case AccountTypes.UPDATE_CONTACT:
                    this.base.loading(false)
                    if (true === nextProps.apiStatus) {
                        var newItem = {
                            id: this.state.contacts.length + 1,
                            relationship: this.state.contactModal,
                            name: this.state.contactName,
                            phone_number: this.state.contactPhone,
                        }
                        var currContacts = this.state.contacts
                        // currContacts.unshift(newItem)
                        // console.log('account-contact-receive', JSON.stringify(currContacts))
                        
                        this.setState({
                            contacts: currContacts,
                            contactModal: '',
                            contactName: '',
                            contactPhone: '',
                        })
                        Keyboard.dismiss()
                    } else {
                        this.base.showErrorAlert(nextProps.error)
                    }
                    break;

                default:
                    break;
            }
        }
    }

    renderItem = ({ item }) => {
        return (
            <View style={{
                flexDirection: 'row',
                // alignItems: 'center',
                // justifyContent: 'space-between',
                width: '100%',
                padding: scale(10),
            }}>
                <View style={{
                    flexDirection: 'column',
                    marginLeft: scale(10),
                    // alignItems
                }}>
                    <Text style={AppStyle.Tiny_Left_Grey}> {item.relationship}</Text>
                    <Text style={AppStyle.Paragraph_Left_Black}> {item.name}</Text>
                    <Text style={AppStyle.Tiny_Left_Grey}> {item.phone_number}</Text>
                </View>
            </View>
        )
    }

    renderListContact() {
        return (
            <PureFlastList
                data={this.state.contacts}
                renderItem={this.renderItem}
                horizontal={false}
                viewSeparate={<View style={{
                    backgroundColor: Colors.whiteThree,
                    height: scale(1)
                }} />}
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
                currentScreen={'AccountRef'}
                onBackHandler={this.actionBack}
                ref={this.baseRef}
                showHeader={true}
                titleHeader={'Thông tin tham chiếu'}
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
                            name={'Mối quan hệ'}
                            onValueChange={(text) => this.onChangeContactModal(text)}
                            data={config.contactModal}
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
                            value={this.state.contactModal}
                        />

                        <InputType3
                            keyboardType={'default'}
                            title={''}
                            placeholder={'Họ tên'}
                            autoCapitalize={'characters'}
                            onChangeText={(text) => this.onChangeContactName(text)}
                            styleInput={{
                                marginTop: scale(-10),
                                borderColor: Colors.grey,
                                borderWidth: scale(1),
                                borderRadius: scale(5),
                                backgroundColor: Colors.whiteTwo,
                                // height: scale(40),
                                // paddingTop: Platform.OS === 'ios' ? scale(7) : - scale(10),
                                paddingLeft: scale(20),
                            }}
                            value={this.state.contactName}
                        />
                        <InputType3
                            keyboardType={'numeric'}
                            title={''}
                            placeholder={'Số điện thoại'}
                            onChangeText={(text) => this.onChangeContactPhone(text)}
                            styleInput={{
                                marginTop: scale(-10),
                                borderColor: Colors.grey,
                                borderWidth: scale(1),
                                borderRadius: scale(5),
                                backgroundColor: Colors.whiteTwo,
                                // height: scale(40),
                                // paddingTop: Platform.OS === 'ios' ? scale(7) : - scale(10),
                                paddingLeft: scale(20),
                            }}
                            maxLength={appConfig.LENGTH_PHONE}
                            value={this.state.contactPhone}
                        />
                        <View style={{
                            marginTop: scale(20),
                            flexDirection: 'column',
                            backgroundColor: Colors.whiteTwo,
                        }}>
                            <Text style={AppStyle.Paragraph_Left_Black}> {'Danh sách tham chiếu'}</Text>
                            {this.renderListContact()}
                        </View>

                    </ScrollView>

                    <ButtonNextType2
                        actionPress={this.actionNext}
                        disable={false}
                        title={'LƯU'}
                        textStyle={AppStyle.Title_Center_Black}
                    />
                </View>
            </BaseContainer>
        )
    }

    onChangeContactModal(text) {
        this.setState({
            contactModal: text
        })
    }
    onChangeContactName(text) {
        this.setState({
            contactName: text
        })
    }
    onChangeContactPhone(text) {
        this.setState({
            contactPhone: text
        })
    }

    actionNext = () => {
        // this.props.navigation.goBack()
        if (!Helper.checkValidString(this.state.contactModal)) {
            this.base.showErrorAlert(msg.ERR_APP_INVALID_CONTACT_TYPE)
            return
        }
        if (!Helper.checkValidString(this.state.contactName)) {
            this.base.showErrorAlert(msg.ERR_APP_INVALID_CONTACT_NAME)
            return
        }
        if (!Helper.checkValidString(this.state.contactPhone)) {
            this.base.showErrorAlert(msg.ERR_APP_INVALID_CONTACT_PHONE)
            return
        } else {
            if (Helper.checkPhoneVN(this.state.contactPhone) !== 1) {
                this.base.showErrorAlert(msg.ERR_APP_PHONE_INVALID)
                return
            }
        }
        this.base.loading(true)
        this.props.updateContact(this.state.contactModal, this.state.contactName, this.state.contactPhone)
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
    updateContact: (contactModal, contactName, contactPhone) => dispatch(AccountAction.updateContact(contactModal, contactName, contactPhone)),
})


export default connect(mapStateToProps, mapDispatchToProps)(AccountContactContainer)