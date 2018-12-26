import { call, put } from 'redux-saga/effects'
import PaymentAction, { PaymentTypes } from '../../redux/payment.redux'
import WalletApi from '../client/wallet.api'
import * as Buz from '../buz/app-buz'
import { Screens, Images } from '../../theme';
import appConfig from '../../config/app-config'
import { processResponseAPI } from './account.saga'

export function* insertMoney(action) {
    console.log('insertMoney', JSON.stringify(action))
    var requestName = PaymentTypes.CASHIN;
    var amount = action.amount
    amount = amount.replace(',', '')
    amount = parseInt(amount)
    // var data = {
    //     redirectURL: 'https://www.google.com.vn/'
    // }
    // yield put(PaymentAction.finishRequest(true, '', data, requestName))
    var response = yield call(WalletApi.paymentBuyCredit(amount, appConfig.PAYMENT_CLOSE_URL, appConfig.PAYMENT_CLOSE_URL).send)
    var result = yield processResponseAPI(response, PaymentAction.finishRequest, requestName)
    console.log('insertMoney', JSON.stringify(response))
    if (result.status) {
        var data = response.data
        if (data !== null && data !== undefined) {
            var data = {
                redirectURL: data.data.checkout_url,
                token_code: data.data.token_code,
            }
            yield put(PaymentAction.finishRequest(true, '', data, requestName))
            return
        }
    }
    yield put(result)
}

export function* queryPayment(action) {
    console.log('queryPayment', JSON.stringify(action))
    var requestName = PaymentTypes.QUERY_PAYMENT;
    var data = {
        credit: 1000
    }
    yield put(PaymentAction.finishRequest(true, '', data, requestName))
}

export function* loanRegister(action) {
    console.log('loanRegister', JSON.stringify(action))
    var requestName = PaymentTypes.LOAN_REGISTER;
    var amount = action.amount
    var time = action.time
    var loan = action.loan
    var tmpAmount = amount.split('-')
    var tmpTime = time.split('-')

    var response = yield call(WalletApi.paymentLoanRegister(loan, tmpTime[0], tmpTime[1], tmpAmount[0], tmpAmount[1]).send)
    console.log('loanRegister', JSON.stringify(response))
    var result = yield processResponseAPI(response, PaymentAction.finishRequest, requestName)
    yield put(result)
}

export function* creditCardRegister(action) {
    console.log('creditCardRegister', JSON.stringify(action))
    var requestName = PaymentTypes.CREDIT_CARD_REGISTER;
    // yield put(PaymentAction.finishRequest(true, '', {}, requestName))
    var amount = action.amount
    var tmpAmount = amount.split('-')
    var response = yield call(WalletApi.paymentCreateCreditCard(action.purpose, action.cardSource, tmpAmount[0], tmpAmount[1]).send)
    console.log('creditCardRegister', JSON.stringify(response))
    var result = yield processResponseAPI(response, PaymentAction.finishRequest, requestName)
    yield put(result)
}

export function* cashout(action) {
    console.log('cashout', JSON.stringify(action))
    var requestName = PaymentTypes.CASHOUT;
    yield put(PaymentAction.finishRequest(true, '', {}, requestName))
}

export function* paymentHistory(action) {
    console.log('paymentHistory', JSON.stringify(action))
    var requestName = PaymentTypes.PAYMENT_HISTORY;
    var data = {
        data: {
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
    }
    yield put(PaymentAction.finishRequest(true, '', data, requestName))
}