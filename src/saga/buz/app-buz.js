import * as AccData from '../local/account.data'
import * as Helper from './app-helper'
import { Images } from '../../theme'
import config from '../../config/config'

export async function loadAccount() {
    // should implement get first screen.
    return AccData.load();
}

export function saveStepRegister(phone, pass, name, credit, avatar, level, id) {
    return AccData.saveStepRegister(phone, pass, name, credit, avatar, level, id)
}

export function getAccount() {
    return AccData.getAccount()
}

export function login(phone, pass, data) {
    var credit = data.credit
    var avatar = undefined
    var level = 0
    var info_1 = undefined
    var info_2 = undefined
    var info_work = undefined
    var relations = []
    var additional_phone_number = []
    var name = ''
    var id = ''

    var user = data.user
    if (user !== undefined && user !== null) {
        relations = user.relations
        id = user.referral_code.toUpperCase()
        if (null === relations || undefined === relations) {
            relations = []
        }
        additional_phone_number = user.additional_phone_number
        if (null === additional_phone_number || undefined === additional_phone_number) {
            additional_phone_number = []
        }

        level = user.role

        var occupation = user.occupation
        if (occupation !== undefined && occupation !== null) {
            info_work = {
                jobName: occupation.job,
                companyName: occupation.company,
                companyAddress: occupation.company_address.address,
                companyPhone: occupation.company_phone_number,
                jobPosision: 'Nhân viên',
                jobDuringTime: '',
                salary: occupation.monthly_income_min + '-' + occupation.monthly_income_max,
                receiveSalaryType: 'Qua ngân hàng',
            }
        }

        var profile = user.profile
        if (profile !== undefined && profile !== null) {
            avatar = profile.picture
            name = profile.name
            if (avatar === '' || avatar === null || avatar === undefined) {
                avatar = Images.awatar.default
            }
            info_1 = {
                name: profile.name,
                dob: profile.date,
                cmnd: '212268000',
                gender: profile.gender,
                marryStatus: profile.married_status,
                education: profile.education_status
            }
            var permanent_address = profile.permanent_address
            var temporary_address = profile.temporary_address
            if (permanent_address !== null && permanent_address !== undefined &&
                temporary_address !== null && temporary_address !== undefined) {
                info_2 = {
                    mainCity: permanent_address.address,
                    mainProvince: permanent_address.province,
                    mainWard: permanent_address.ward,
                    currCity: temporary_address.address,
                    currProvince: temporary_address.province,
                    currWard: temporary_address.ward,
                    liveModal: profile.home_type
                }
            }
        }

    }
    return AccData.login(phone, name, pass, credit, avatar, level, id, info_1, info_2, info_work, relations, additional_phone_number, data.token)
}

export function updateProfile(data) {
    var percentage = data.percentage
    var updateInfoTask = []

    var user = data.user
    if (user !== undefined && user !== null) {
        var profile = user.profile
        if (profile !== undefined && profile !== null) {
            console.log('user.profile.married_status', profile.married_status)
            if (Helper.checkValidString(profile.married_status)) {
                updateInfoTask.push(config.ACCOUNT_INFO_NORMAL_ONE)
            }

            console.log('user.profile.home_type', profile.home_type)
            if (Helper.checkValidString(profile.home_type)) {
                updateInfoTask.push(config.ACCOUNT_INFO_NORMAL_TWO)
            }
        }

        var occupation = user.occupation
        if (occupation !== undefined && occupation !== null) {
            console.log('occupation.job', occupation.job)
            if (Helper.checkValidString(occupation.job)) {
                updateInfoTask.push(config.ACCOUNT_INFO_WORK)
            }
        }

        var relations = user.relations
        if (relations instanceof Array && relations.length > 0) {
            updateInfoTask.push(config.ACCOUNT_INFO_CONTACT)
        }

        var additional_phone_number = user.additional_phone_number
        if (additional_phone_number instanceof Array && additional_phone_number.length > 0) {
            updateInfoTask.push(config.ACCOUNT_INFO_REF)
        }
    }

    AccData.updateProfile(percentage, updateInfoTask, user);

    return {
        percentage,
        updateInfoTask
    }
}

export function logout() {
    return AccData.logout()
}

export function getPositionByLevel(level) {
    switch (level) {
        case 0:
            return 'Khách hàng'
        case 1:
            return 'Nhân viên tập sự'
        case 2:
            return 'Chuyên viên'
        case 3:
            return 'Chuyên gia'
        default:
            break;
    }
}

export function getMsgFromResp(data) {
    if (data === null || data == undefined) {
        return 'Có lỗi xãy ra. Vui lòng quay lại sau.'
    }

    if (data.message === null || data.message === undefined || data.message === '') {
        return 'Có lỗi xãy ra. Vui lòng quay lại sau.'
    }

    return data.message
}

export function updateInfoOne(percentage, name, dob, cmnd, gender, marryStatus, education, profile) {
    return AccData.updateInfoOne(percentage, name, dob, cmnd, gender, marryStatus, education, profile)
}

export function updateInfoTwo(percentage, mainCity, mainProvince, mainWard, currCity,
    currProvince, currWard, liveModal, profile) {
    return AccData.updateInfoTwo(percentage, mainCity, mainProvince, mainWard, currCity, currProvince, currWard, liveModal, profile)
}

export function updateInfoWork(percentage, jobName, companyName, companyAddress, companyPhone, jobPosision, jobDuringTime, salary, receiveSalaryType) {
    return AccData.updateInfoWork(percentage, jobName, companyName, companyAddress, companyPhone, jobPosision, jobDuringTime, salary, receiveSalaryType)
}

export function updateInfoRelations(percentage, relations) {
    return AccData.updateInfoRelations(percentage, relations)
}

export function updateInfoAddPhones(percentage, additional_phone_number) {
    return AccData.updateInfoAddPhones(percentage, additional_phone_number)
}

export function upateFinger(isSupportFinger, isFinger) {
    return AccData.upateFinger(isSupportFinger, isFinger)
}