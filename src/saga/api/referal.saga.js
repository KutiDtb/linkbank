import { call, put } from 'redux-saga/effects'
import ReferalAction, { ReferalTypes } from '../../redux/referal.redux'
import WalletApi from '../client/wallet.api'
import * as Buz from '../buz/app-buz'
import { Screens, Images } from '../../theme';

var data_bonus = {
    referalCode: '5PJUGN', // accountID
    list: [
        {
            month: '8/2018',
            list: [
                { id: '8-1', type: 'buyTicket', name: 'Trần Văn A', function: 'Mua đơn vay', date: '05/11', credit: 70000 },
                { id: '8-2',type: 'cashin', name: 'Trần Văn A', function: 'Nạp Credit vào tài khoản', date: '05/11', credit: 70000 },
                { id: '8-3',type: 'buyTicket', name: 'Trần Văn A', function: 'Mua đơn vay', date: '05/11', credit: 70000 },
                { id: '8-4',type: 'cashin', name: 'Trần Văn A', function: 'Nạp Credit vào tài khoản', date: '05/11', credit: 70000 },
            ]
        },
        {
            month: '9/2018',
            list: [
                { id: '9-1',type: 'buyTicket', name: 'Trần Văn A', function: 'Mua đơn vay', date: '05/11', credit: 70000 },
                { id: '9-2',type: 'cashin', name: 'Trần Văn A', function: 'Nạp Credit vào tài khoản', date: '05/11', credit: 70000 },
            ]
        },
        {
            month: '11/2018',
            list: [
                { id: '11-1',type: 'buyTicket', name: 'Trần Văn A', function: 'Mua đơn vay', date: '05/11', credit: 70000 },
                { id: '11-2',type: 'cashin', name: 'Trần Văn A', function: 'Nạp Credit vào tài khoản', date: '05/11', credit: 70000 },
                { id: '11-3',type: 'buyTicket', name: 'Trần Văn A', function: 'Mua đơn vay', date: '05/11', credit: 70000 },
                { id: '11-4',type: 'cashin', name: 'Trần Văn A', function: 'Nạp Credit vào tài khoản', date: '05/11', credit: 70000 },
            ]
        },
    ]
}

export function* getReferalBonus(action) {
    console.log('getReferalBonus', JSON.stringify(action))
    var requestName = ReferalTypes.GET_REFERAL_BONUS;
    var data = {
        data: data_bonus,
    }
    yield put(ReferalAction.finishRequest(true, '', data, requestName))
}