import { call, put } from 'redux-saga/effects'
import AccountAction, { AccountTypes } from '../../redux/account.redux'
import WalletApi from '../client/wallet.api'
import * as Buz from '../buz/app-buz'
import { Screens, Images } from '../../theme';
var phone_V = '0394084334'
var phone_Q = '0944684684'

export function* processResponseAPI(response, finishRequest, requestName) {
    try {
        if (response.ok) {
            if (response.status === 200) {
                if (response.data.success || response.data.code === 0) {
                    return finishRequest(true, '', response.data, requestName);
                } else {
                    return finishRequest(false, '', response.data, requestName);
                }
            } else {
                return finishRequest(false, '', response.data, requestName);
            }
        } else {
            return finishRequest(false, '', null, requestName);
        }
    } catch (error) {
        return finishRequest(false, '', null, requestName);
    }
}


export function* registerCheckAccount(action) {
    // console.log('registerCheckAccount', JSON.stringify(action))
    var requestName = AccountTypes.REGISTER_CHECK_ACCOUNT;

    // if (action.phone === phone_V || action.phone === phone_Q) {
    //     yield put(AccountAction.finishRequest(true, '', {}, requestName))
    // } else {
    //     yield put(AccountAction.finishRequest(false, '', {}, requestName))
    // }

    var response = yield call(WalletApi.accountCheckPhone(action.phone, action.name).send)
    var result = yield processResponseAPI(response, AccountAction.finishRequest, requestName)
    console.log('registerCheckAccount', JSON.stringify(response))
    yield put(result)
}

export function* registerSetPass(action) {
    // console.log('registerSetPass', JSON.stringify(action))
    var requestName = AccountTypes.REGISTER_SET_PASS;

    // if (action.pass === '123456') {
    //     yield put(AccountAction.finishRequest(true, '', {}, requestName))
    // } else {
    //     yield put(AccountAction.finishRequest(false, '', {}, requestName))
    // }

    var response = yield call(WalletApi.accountSetPass(action.phone, action.pass, action.name).send)
    var result = yield processResponseAPI(response, AccountAction.finishRequest, requestName)
    console.log('registerSetPass', JSON.stringify(response))
    yield put(result)
}

export function* registerCheckOtp(action) {
    // console.log('registerCheckOtp', JSON.stringify(action))
    var requestName = AccountTypes.REGISTER_CHECK_OTP;

    // if (action.otp === '111111') {
    //     // yield Buz.saveStepRegister(action.phone, action.pass, action.name, credit, avatar, level, id)
    //     // yield put(AccountAction.finishRequest(true, '', {}, requestName))
    //     var data = {
    //         name: action.name,
    //         credit: 0,
    //         avatar: Images.awatar.default,
    //         level: action.phone === phone_Q ? 1 : 0,
    //         id: '11223344',
    //     }
    //     yield Buz.saveStepRegister(action.phone, action.pass, action.name, data.credit, data.avatar, data.level, data.id)
    //     yield put(AccountAction.initDataFinishRequest(true, '', data, requestName))
    // } else {
    //     yield put(AccountAction.finishRequest(false, '', {}, requestName))
    // }

    var response = yield call(WalletApi.accountCheckOtp(action.phone, action.otp).send)
    var result = yield processResponseAPI(response, AccountAction.finishRequest, requestName)
    console.log('registerCheckOtp', JSON.stringify(response))
    if (result.status) {
        var data = {
            name: action.name,
            credit: 0,
            avatar: Images.awatar.default,
            level: 0,
            id: '11223344',
        }
        yield Buz.saveStepRegister(action.phone, action.pass, action.name, data.credit, data.avatar, data.level, data.id)
        yield put(AccountAction.initDataFinishRequest(true, '', data, requestName))
        yield accountLoadProfile()
        return
    }
    yield put(result)
}

export function* logout(action) {
    // console.log('logout', JSON.stringify(action))
    var requestName = AccountTypes.LOGOUT;
    Buz.logout()
    yield put(AccountAction.finishRequest(true, '', {}, requestName, Screens.AuthenRouter))

    // var response = yield call(WalletApi.login(action.phone, action.pass).send)
    // var result = yield processResponseAPI(response, AccountAction.finishRequest, requestName)
    // console.log('login', JSON.stringify(response))
    // yield put(result)
}

export function* initData(action) {
    console.log('initData', JSON.stringify(action))
    var requestName = AccountTypes.INIT_DATA;
    var account = Buz.getAccount()
    
    if (account.name !== '') {
        var data = {
            name: account.name,
            credit: account.credit,
            avatar: account.avatar,
            level: account.level,
            id: account.id,
        }
        yield put(AccountAction.initDataFinishRequest(true, '', data, requestName))
    }
}

export function* login(action) {
    // console.log('login', JSON.stringify(action))
    var requestName = AccountTypes.LOGIN;
    // if ((action.phone === phone_V || action.phone === phone_Q) && action.pass === '123456') {
    //     Buz.login({
    //         credit: 0
    //     })
    //     yield put(AccountAction.finishRequest(true, '', {}, requestName))
    // } else {
    //     yield put(AccountAction.finishRequest(false, '', {}, requestName))
    // }

    var response = yield call(WalletApi.login(action.phone, action.pass).send)
    var result = yield processResponseAPI(response, AccountAction.finishRequest, requestName)
    console.log('login', JSON.stringify(response))
    if (result.status) {
        var data = response.data
        if (data !== null && data !== undefined) {
            WalletApi.setHeaderToken(data.token)
            Buz.login(action.phone, action.pass, data)
            yield accountLoadProfile()

            var picture = data.user.profile.picture
            if (null === picture || picture === undefined || '' === picture) {
                picture = Images.awatar.default
            }
            var initData = {
                name: data.user.profile.name,
                credit: data.credit,
                level: data.user.role,
                id: data.user.referral_code.toUpperCase(),
                avatar: picture
            }
            yield put(AccountAction.initDataFinishRequest(true, '', initData, requestName, 'Menu'))
            return
        }
    }
    yield put(result)
}

export function* accountLoadProfile(action) {
    // console.log('initData', JSON.stringify(action))
    var requestName = 'ACCOUNT_LOAD_PROFILE';
    var response = yield call(WalletApi.accountLoadProfile().send)
    var result = yield processResponseAPI(response, AccountAction.finishRequest, requestName)
    console.log('accountLoadProfile', JSON.stringify(response))
    if (result.status) {
        var data = response.data
        if (data !== null && data !== undefined) {
            var dataUp = yield Buz.updateProfile(data)
            console.log('dataUp', JSON.stringify(dataUp))
        }
    }
}

export function* getInfoTask(action) {
    // console.log('initData', JSON.stringify(action))
    var requestName = AccountTypes.GET_INFO_TASK;
    var account = Buz.getAccount()
    var data = {
        percent: account.percentage,
        taskFinish: account.updateInfoTask,
        // taskFinish: ['NORMAL', 'WORK', 'CONTACT', 'REF', 'DOCUMENT'],
    }
    yield put(AccountAction.finishRequest(true, '', data, requestName))

    // var response = yield call(WalletApi.accountLoadProfile().send)
    // var result = yield processResponseAPI(response, AccountAction.finishRequest, requestName)
    // console.log('accountLoadProfile', JSON.stringify(response))
    // if (result.status) {
    //     var data = response.data
    //     if (data !== null && data !== undefined) {
    //         var dataUp = yield Buz.updateProfile(data)
    //         console.log('dataUp', JSON.stringify(dataUp))
    //         var data = {
    //             percent: dataUp.percentage,
    //             taskFinish: dataUp.updateInfoTask,
    //         }

    //         yield put(AccountAction.finishRequest(true, '', data, requestName))
    //         return
    //     }
    // }
    // yield put(result)
}

export function* updateInfoOne(action) {
    console.log('updateInfoOne', JSON.stringify(action))
    var requestName = AccountTypes.UPDATE_INFO_ONE;
    var account = Buz.getAccount()
    var profile = account.user.profile
    profile.name = action.name
    profile.date = action.dob
    profile.gender = action.gender
    profile.married_status = action.marryStatus
    profile.education_status = action.education

    var response = yield call(WalletApi.accountInfoOne(profile).send)
    var result = yield processResponseAPI(response, AccountAction.finishRequest, requestName)
    console.log('updateInfoOne', JSON.stringify(response))
    if (result.status) {
        var data = response.data
        if (data !== null && data !== undefined) {
            Buz.updateInfoOne(data.percentage, action.name, action.dob, action.cmnd, action.gender, action.marryStatus, action.education, profile)
        }
    }
    yield put(result)
}

export function* updateInfoTwo(action) {
    console.log('updateInfoTwo', JSON.stringify(action))
    var requestName = AccountTypes.UPDATE_INFO_TWO;
    var account = Buz.getAccount()
    var profile = account.user.profile
    profile.home_type = action.liveModal
    profile.permanent_address = {
        address: action.mainCity,
        province: action.mainDistrict,
        ward: action.mainWard,
    }
    profile.temporary_address = {
        address: action.currCity,
        province: action.currDistrict,
        ward: action.currWard,
    }
    var response = yield call(WalletApi.accountInfoTwo(profile).send)
    var result = yield processResponseAPI(response, AccountAction.finishRequest, requestName)
    console.log('updateInfoTwo', JSON.stringify(response))
    if (result.status) {
        var data = response.data
        if (data !== null && data !== undefined) {
            Buz.updateInfoTwo(data.percentage, action.mainCity, action.mainDistrict, action.mainWard,
                action.currCity, action.currDistrict, action.currWard, action.liveModal, profile)
        }
    }
    yield put(result)

}

export function* updateInfoWork(action) {
    console.log('updateInfoWork', JSON.stringify(action))
    var salary = action.salary
    var tmp = salary.split('-')

    var requestName = AccountTypes.UPDATE_INFO_WORK;
    var accountInfoWord = {
        job: action.jobName,
        job_time: action.jobDuringTime,
        job_position: action.jobPosision,
        company: action.companyName,
        monthly_income: action.salary,
        monthly_income_min: tmp[0],
        monthly_income_max: tmp[1],
        monthly_income_type: action.receiveSalaryType,
        company_phone_number: action.companyPhone,
        company_address: {
            address: action.companyAddress
        }
    }
    var response = yield call(WalletApi.accountInfoWork(accountInfoWord).send)
    var result = yield processResponseAPI(response, AccountAction.finishRequest, requestName)
    console.log('updateInfoWork', JSON.stringify(response))
    if (result.status) {
        var data = response.data
        if (data !== null && data !== undefined) {
            Buz.updateInfoWork(data.percentage, action.jobName, action.companyName, action.companyAddress,
                action.companyPhone, action.jobPosision, action.jobDuringTime, action.salary, action.receiveSalaryType)
        }
    }
    yield put(result)
}

export function* updateContact(action) {
    console.log('updateContact', JSON.stringify(action))
    var requestName = AccountTypes.UPDATE_CONTACT;
    var account = Buz.getAccount()
    var currRelations = account.relations
    currRelations.unshift({
        id: currRelations.length + 1,
        relationship: action.contactModal,
        name: action.contactName,
        phone_number: action.contactPhone,
    })
    var response = yield call(WalletApi.accountInfoRelations(currRelations).send)
    var result = yield processResponseAPI(response, AccountAction.finishRequest, requestName)
    console.log('updateContact', JSON.stringify(response))
    if (result.status) {
        var data = response.data
        if (data !== null && data !== undefined) {
            Buz.updateInfoRelations(data.percentage, currRelations)
        }
    }
    yield put(result)
}

export function* updateChannelPhone(action) {
    console.log('updateChannelPhone', JSON.stringify(action))
    var requestName = AccountTypes.UPDATE_CHANNEL_PHONE;
    // yield put(AccountAction.finishRequest(true, '', {}, requestName))
    // console.log('updateContact', JSON.stringify(action))
    // var requestName = AccountTypes.UPDATE_CONTACT;
    var account = Buz.getAccount()
    var additional_phone_number = account.additional_phone_number
    additional_phone_number.push({
        id: additional_phone_number.length + 1,
        value: action.phone,
    })
    var response = yield call(WalletApi.accountInfoAddPhones(additional_phone_number).send)
    var result = yield processResponseAPI(response, AccountAction.finishRequest, requestName)
    console.log('updateChannelPhone', JSON.stringify(response))
    if (result.status) {
        var data = response.data
        if (data !== null && data !== undefined) {
            // Buz.updateInfoAddPhones(data.percentage, additional_phone_number)
        }
    }
    yield put(result)
}

export function* verifyChannelPhone(action) {
    console.log('verifyChannelPhone', JSON.stringify(action))
    var requestName = AccountTypes.VERIFY_CHANNEL_PHONE;
    yield put(AccountAction.finishRequest(true, '', {}, requestName))
}

export function* consultanceRegister(action) {
    console.log('consultanceRegister', JSON.stringify(action))
    var requestName = AccountTypes.CONSULTANCE_REGISTER;
    yield put(AccountAction.finishRequest(true, '', {}, requestName))
}