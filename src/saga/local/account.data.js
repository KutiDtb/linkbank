import * as Local from './local.api'
import { Images } from '../../theme'
import config from '../../config/config'

var account = {
    phone: '',
    pass: '',
    name: '',
    credit: 0,
    avatar: Images.awatar.default,
    level: 1,
    id: '',
    logout: true,
    isSupportFinger: false,
    flagFinger: false,
    flagLocation: true,
    updateInfo: false,
    //business
    percentage: 0,
    info_1: undefined,
    info_2: undefined,
    info_work: undefined,
    // info_1: {
    //     name: 'NGUYEN VAN A',
    //     dob: '1994-02-09',
    //     cmnd: '212268000',
    //     gender: 'NAM',
    //     marryStatus: 'alone',
    //     education: 'Tốt nghiệp 12'
    // },
    // info_2: {
    //     mainCity: '01',
    //     mainProvince: '001',
    //     mainWard: '00001',
    //     currCity: '02',
    //     currProvince: '002',
    //     currWard: '00004',
    //     liveModal: 'Ở trọ'
    // },
    // info_work: {
    //     jobName: 'Nhân viên văn phòng',
    //     companyName: 'Linkbank',
    //     companyAddress: '157 Xuân Hòng, Tân Bình',
    //     companyPhone: '0836508346',
    //     jobPosision: 'Nhân viên',
    //     jobDuringTime: '1-2',
    //     salary: '10-15',
    //     receiveSalaryType: 'Qua ngân hàng',
    // },
    relations: [],
    additional_phone_number: [],
    updateInfoTask: [],
    user: {},
    accessToken: '',
}
// Load 
Local.checkAccountSync().then(value => {
    if (undefined !== value && null !== value) {
        account = JSON.parse(value);
        console.log('account', account)
    } else {
        console.log('account herere')
    }
});

export async function load() {
    var value = Local.checkAccountSync()
    // if (undefined !== value && null !== value) {
    //     value = JSON.parse(value);
    // }
    return value
}

export function saveStepRegister(phone, pass, name, credit, avatar, level, id) {
    account.phone = phone
    account.pass = pass
    account.name = name
    account.logout = false
    account.credit = credit
    account.avatar = avatar
    account.level = level
    account.id = id

    Local.saveAccount(JSON.stringify(account))
}

export function getAccount() {
    return account
}

export function logout() {
    account.pass = ''
    account.level = 0
    account.credit = 0
    account.logout = true,
        Local.saveAccount(JSON.stringify(account))
}

export function login(phone, name, pass, credit, avatar, level, id, info_1, info_2, info_work, relations, additional_phone_number, accessToken) {
    account.phone = phone
    account.name = name
    account.pass = pass
    account.credit = credit
    account.avatar = avatar
    account.level = level
    account.id = id
    account.info_1 = info_1
    account.info_2 = info_2
    account.info_work = info_work
    account.relations = relations
    account.additional_phone_number = additional_phone_number
    account.accessToken = accessToken

    account.logout = false
    console.log('account', JSON.stringify(account))
    Local.saveAccount(JSON.stringify(account))
}

export function updateProfile(percentage, updateInfoTask, user) {
    account.percentage = percentage
    account.updateInfoTask = updateInfoTask
    account.user = user

    console.log('account', JSON.stringify(account))
    Local.saveAccount(JSON.stringify(account))
}

export function updateInfoOne(percentage, name, dob, cmnd, gender, marryStatus, education, profile) {
    account.info_1 = {
        name,
        dob,
        cmnd,
        gender,
        marryStatus,
        education,
    }
    account.percentage = percentage
    account.updateInfoTask.push(config.ACCOUNT_INFO_NORMAL_ONE)
    account.user.profile = profile

    console.log('account', JSON.stringify(account))
    Local.saveAccount(JSON.stringify(account))
}

export function updateInfoTwo(percentage, mainCity, mainProvince, mainWard, currCity, 
    currProvince, currWard, liveModal, profile) {
    account.info_2 = {
        mainCity,
        mainProvince,
        mainWard,
        currCity,
        currProvince,
        currWard,
        liveModal,
    },
    account.percentage = percentage
    account.updateInfoTask.push(config.ACCOUNT_INFO_NORMAL_TWO)
    account.user.profile = profile

    console.log('account', JSON.stringify(account))
    Local.saveAccount(JSON.stringify(account))
}

export function updateInfoWork(percentage, jobName, companyName, companyAddress, companyPhone, 
    jobPosision, jobDuringTime, salary, receiveSalaryType) {
    account.info_work = {
        jobName: jobName,
        companyName: companyName,
        companyAddress: companyAddress,
        companyPhone: companyPhone,
        jobPosision: jobPosision,
        jobDuringTime: jobDuringTime,
        salary: salary,
        receiveSalaryType: receiveSalaryType,
    },
    account.percentage = percentage
    account.updateInfoTask.push(config.ACCOUNT_INFO_WORK)

    console.log('account', JSON.stringify(account))
    Local.saveAccount(JSON.stringify(account))
}

export function updateInfoRelations(percentage, relations) {
    account.percentage = percentage
    account.relations = relations

    account.updateInfoTask.push(config.ACCOUNT_INFO_CONTACT)
    console.log('account', JSON.stringify(account))
    Local.saveAccount(JSON.stringify(account))
}

export function updateInfoAddPhones(percentage, additional_phone_number) {
    account.percentage = percentage
    account.additional_phone_number = additional_phone_number

    account.updateInfoTask.push(config.ACCOUNT_INFO_REF)
    console.log('account', JSON.stringify(account))
    Local.saveAccount(JSON.stringify(account))
}

export function upateFinger(isSupportFinger, isFinger) {
    account.isSupportFinger = isSupportFinger
    account.flagFinger = isFinger
    console.log('account', JSON.stringify(account))
    Local.saveAccount(JSON.stringify(account))
}