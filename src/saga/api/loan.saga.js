import { call, put } from 'redux-saga/effects'
// import AccountAction, { AccountTypes } from '../../redux/account.redux'
import LoanAction, { LoanTypes } from '../../redux/loan.redux'
import WalletApi from '../client/wallet.api'
import * as Buz from '../buz/app-buz'
import { Screens, Images } from '../../theme';

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

export function* getTicket(action) {
    console.log('getTicket', JSON.stringify(action))
    var requestName = LoanTypes.GET_TICKET;
    var data = {
        tickets: data_default,
    }
    yield put(LoanAction.finishRequest(true, '', data, requestName))
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
            for (var i=0; i<action.list.length; i++) {
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
    yield put(LoanAction.finishRequest(true, '', data, requestName))
}

export function* getMyTicket(action) {
    console.log('getMyTicket', JSON.stringify(action))
    var requestName = LoanTypes.GET_MY_TICKET;
    var data = {
        tickets: data_default,
    }
    yield put(LoanAction.finishRequest(true, '', data, requestName))
}