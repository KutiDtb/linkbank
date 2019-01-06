import { call, put } from 'redux-saga/effects'
// import AccountAction, { AccountTypes } from '../../redux/account.redux'
import LoanAction, { LoanTypes } from '../../redux/loan.redux'
import WalletApi from '../client/wallet.api'
import * as Buz from '../buz/app-buz'
import { Screens, Images } from '../../theme';
import appConfig from '../../config/app-config'
import { processResponseAPI } from './account.saga'
const { city, mapCityProvince, mapProvinceWard } = require('../../config/city')
import * as Helper from '../../saga/buz/app-helper'

var data_default = [
    {
        id: 1,
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
        id: 2,
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
        id: 3,
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
        id: 4,
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

function getLabelOfAddress(id, list) {
    for (var i = 0; i < list.length; i++) {
        if (list[i].value === id) {
            return list[i].label
        }
    }
    return id
}

function getAddress(address) {
    if (null === address || undefined === address) {
        return  ''
    }

    var nameAddress = getLabelOfAddress(address.address, city)

    var listProvince = mapCityProvince[address.address]
    var nameProvince = getLabelOfAddress(address.province, listProvince)

    var listWards = mapProvinceWard[address.province]
    var nameWard = getLabelOfAddress(address.ward, listWards)
    return nameAddress + ', ' + nameProvince + ', ' + nameWard
}

export function* getTicket(action) {
    console.log('getTicket', JSON.stringify(action))
    var requestName = LoanTypes.GET_TICKET;
    var response = yield call(WalletApi.applicationLoad(action.page).send)
    var result = yield processResponseAPI(response, LoanAction.finishRequest, requestName)

    // var data = {
    //     tickets: data_default,
    // }
    // yield put(LoanAction.finishRequest(true, '', data, requestName))
    if (result.status) {
        // var data = response.data
        // console.log('response.data.data ', response.data.data)
        var data = response.data
        if (data !== null && data !== undefined) {
            var tickets = []
            for (var i = 0; i < data.data.length; i++) {
                var item = data.data[i]
                var d = new Date()
                var ticket = {
                    id: item._id,
                    avatar: Images.awatar.default,  // need update
                    name: item.created_by.profile.name,
                    // city: item.created_by.profile.temporary_address.address,
                    city: getLabelOfAddress(item.created_by.profile.temporary_address.address, city),
                    loanCreated: item.createdAt,
                    loanAmount: Helper.formatAmmount(item.loan_range_min) + '-' + Helper.formatAmmount(item.loan_range_max),
                    loanTimeDes: item.loan_deadline_min + '-' + item.loan_deadline_max,
                    loanModal: item.loan_type[0],
                    job: item.created_by.occupation.job,
                    salary: Helper.formatAmmount(item.created_by.occupation.monthly_income_min) + '-' + Helper.formatAmmount(item.created_by.occupation.monthly_income_max),
                    creditOne: item.credit,
                    creditAll: item.credit,
                }
                tickets.push(ticket)
            }
            yield put(LoanAction.finishRequest(true, '', { tickets }, requestName))
            return
        }

    }
    yield put(result)
}

export function* getTicketCredit(action) {
    console.log('getTicketCredit', JSON.stringify(action))
    var requestName = LoanTypes.GET_TICKET_CREDIT;
    var data = {
        creditOne: 18,
        creditFull: 50,
    }
    yield put(LoanAction.finishRequest(true, '', data, requestName))
}

export function* updateTicketStatus(action) {
    console.log('updateTicketStatus', JSON.stringify(action))
    var requestName = LoanTypes.UPDATE_TICKET_STATUS;
    var currentStatusList = []
    if (action.list === null || action.list === undefined) {
        currentStatusList = []
    } else {
        if (action.list instanceof Array) {
            for (var i = 0; i < action.list.length; i++) {
                currentStatusList.push(action.list[i])
            }
        }
    }
    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
    var cmt = {
        id: currentStatusList.length + 1,
        time: date,
        status: action.status,
        comment: action.content
    }
    currentStatusList.push(cmt)

    var data = {
        statusList: currentStatusList
    }
    yield put(LoanAction.finishRequest(true, '', data, requestName))
}

export function* buyTicket(action) {
    console.log('buyTicket', JSON.stringify(action))
    var requestName = LoanTypes.BUY_TICKET;
    // var data = {
    //     require: {
    //         avatar: Images.awatar.default,
    //         name: 'NGUYEN VAN A',
    //         city: 'Ho Chi Minh',
    //         loanCreated: '17:30 28/11/2018',
    //         loanAmount: '5,000,000',
    //         loanTimeDes: '24 tháng',
    //         loanModal: 'Vay theo đăng ký xe máy',
    //         job: 'Nhân viên văn phòng',
    //         salary: '10,000,000 VND/Tháng',
    //         phone: '0904684684'
    //     },
    //     info: {
    //         gender: 'Nam',
    //         status: 'Độc thân',
    //         cardID: '123456789',
    //         birthday: '02/09/1994',
    //         email: 'abc@gmail.com',
    //         addressMain: '',
    //         addressTemp: ''
    //     },
    //     job: {
    //         name: 'Công nhân nhà máy',
    //         company: 'Giấy Hải Phòng',
    //         time: '> 1 năm',
    //         position: 'Công nhân',
    //         salary: '5,000,000 đ',
    //         salaryModal: 'Chuyển khoản'
    //     },
    //     statusList: [
    //         {
    //             id: 1,
    //             time: '12/12/2018',
    //             status: 'Đủ điền kiện',
    //             comment: 'Hẹn 1.12 nhận hồ sơ'
    //         },
    //         {
    //             id: 2,
    //             time: '12/12/2018',
    //             status: 'Đủ điền kiện',
    //             comment: 'Hẹn 1.12 nhận hồ sơ'
    //         }
    //     ]
    // }

    // var response = yield call(WalletApi.applicationReceiveById(action.id).send)
    // var result = yield processResponseAPI(response, LoanAction.finishRequest, requestName)
    // console.log('buyTicket-response', JSON.stringify(response))
    // if (result.status) {

    // }
    // yield put(result)

    var response = yield call(WalletApi.applicationGetById(action.id).send)
    var result = yield processResponseAPI(response, LoanAction.finishRequest, requestName)
    console.log('getTicket-response', JSON.stringify(response.data))
    if (result.status) {
        var data = response.data.data
        if (null !== data && undefined !== data) {
            var item = {
                require: {
                    avatar: Images.awatar.default,
                    name: data.created_by.profile.name,
                    city: getLabelOfAddress(data.created_by.profile.temporary_address.address, city),
                    loanCreated: data.createdAt,
                    loanAmount: Helper.formatAmmount(data.loan_range_min) + '-' + Helper.formatAmmount(data.loan_range_max),
                    loanTimeDes: data.loan_deadline_min + '-' + data.loan_deadline_max,
                    loanModal: data.loan_type[0],
                    job: data.created_by.occupation.job,
                    salary: Helper.formatAmmount(data.created_by.occupation.monthly_income_min) + '-' + Helper.formatAmmount(data.created_by.occupation.monthly_income_max),
                    phone: data.created_by.phone
                },
                info: {
                    gender: data.created_by.profile.gender,
                    status: data.created_by.profile.married_status,
                    cardID: data.created_by.profile.cmnd,
                    birthday: '',
                    email: '',
                    addressMain: getAddress(data.created_by.profile.permanent_address),
                    addressTemp: getAddress(data.created_by.profile.temporary_address),
                },
                job: {
                    name: data.created_by.occupation.job,
                    company: data.created_by.occupation.company,
                    time: data.created_by.profile.working_experience,
                    position: '',
                    salary: Helper.formatAmmount(data.created_by.occupation.monthly_income_min) + '-' + Helper.formatAmmount(data.created_by.occupation.monthly_income_max),
                    salaryModal: data.created_by.profile.salary_method,
                },
                statusList: [
                    // {
                    //     id: 1,
                    //     time: '12/12/2018',
                    //     status: 'Đủ điền kiện',
                    //     comment: 'Hẹn 1.12 nhận hồ sơ'
                    // },
                    // {
                    //     id: 2,
                    //     time: '12/12/2018',
                    //     status: 'Đủ điền kiện',
                    //     comment: 'Hẹn 1.12 nhận hồ sơ'
                    // }
                ]
            }
            yield put(LoanAction.finishRequest(true, '', { ...item }, requestName))
            return
        }
    }
    yield put(result)
}

export function* getMyTicket(action) {
    console.log('getMyTicket', JSON.stringify(action))
    var requestName = LoanTypes.GET_MY_TICKET;
    var data = {
        tickets: data_default,
    }
    yield put(LoanAction.finishRequest(true, '', data, requestName))
}