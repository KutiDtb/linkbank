import { takeLatest, all, take } from 'redux-saga/effects'
/* ------------- Connect Types To Sagas ------------- */
import { AccountTypes } from '../redux/account.redux'
import { PaymentTypes } from '../redux/payment.redux'
import { LoanTypes } from '../redux/loan.redux'
import { ReferalTypes } from '../redux/referal.redux'

import {
  login,
  logout,
  registerCheckAccount,
  registerSetPass,
  registerCheckOtp,
  initData,
  getInfoTask,
  updateInfoOne,
  updateInfoTwo,
  updateInfoWork,
  updateContact,
  updateChannelPhone,
  verifyChannelPhone,
  consultanceRegister,
} from './api/account.saga'

import {
  insertMoney,
  queryPayment,
  loanRegister,
  creditCardRegister,
  cashout,
  paymentHistory,
} from './api/payment.saga'

import {
  getTicket,
  getTicketCredit,
  updateTicketStatus,
  buyTicket,
  getMyTicket,
} from './api/loan.saga'

import {
  getReferalBonus,
} from './api/referal.saga'

export default function* root() {
  yield all([
    
    takeLatest(AccountTypes.LOGIN, login),
    takeLatest(AccountTypes.LOGOUT, logout),
    takeLatest(AccountTypes.REGISTER_CHECK_ACCOUNT, registerCheckAccount),
    takeLatest(AccountTypes.REGISTER_SET_PASS, registerSetPass),
    takeLatest(AccountTypes.REGISTER_CHECK_OTP, registerCheckOtp),
    takeLatest(AccountTypes.INIT_DATA, initData),
    takeLatest(AccountTypes.GET_INFO_TASK, getInfoTask),
    takeLatest(AccountTypes.UPDATE_INFO_ONE, updateInfoOne),
    takeLatest(AccountTypes.UPDATE_INFO_TWO, updateInfoTwo),
    takeLatest(AccountTypes.UPDATE_INFO_WORK, updateInfoWork),
    takeLatest(AccountTypes.UPDATE_CONTACT, updateContact),
    takeLatest(AccountTypes.UPDATE_CHANNEL_PHONE, updateChannelPhone),
    takeLatest(AccountTypes.VERIFY_CHANNEL_PHONE, verifyChannelPhone),
    takeLatest(AccountTypes.CONSULTANCE_REGISTER, consultanceRegister),
    
    takeLatest(PaymentTypes.CASHIN, insertMoney),
    takeLatest(PaymentTypes.QUERY_PAYMENT, queryPayment),
    takeLatest(PaymentTypes.LOAN_REGISTER, loanRegister),
    takeLatest(PaymentTypes.CREDIT_CARD_REGISTER, creditCardRegister),
    takeLatest(PaymentTypes.CASHOUT, cashout),
    takeLatest(PaymentTypes.PAYMENT_HISTORY, paymentHistory),

    takeLatest(LoanTypes.GET_TICKET, getTicket),
    takeLatest(LoanTypes.GET_TICKET_CREDIT, getTicketCredit),
    takeLatest(LoanTypes.UPDATE_TICKET_STATUS, updateTicketStatus),
    takeLatest(LoanTypes.BUY_TICKET, buyTicket),
    takeLatest(LoanTypes.GET_MY_TICKET, getMyTicket),

    takeLatest(ReferalTypes.GET_REFERAL_BONUS, getReferalBonus),
  ]);
}

