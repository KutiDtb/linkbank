import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import config from '../config/config'
import * as Buz from '../saga/buz/app-buz'
import { Images } from '../theme'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
    finishRequest: ['status', 'error', 'data', 'requestName', 'nextScreen'],
    cashin: ['amount', 'credit', 'payment'],
    queryPayment: ['transId'],
    loanRegister: ['amount', 'time', 'loan'],
    creditCardRegister: ['amount', 'cardSource', 'purpose'],
    cashout: ['amount', 'fee', 'nameReceiver', 'bankAccount', 'bankName', 'bankBranch'],
    paymentHistory: [],
})
export const PaymentTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
    // Logic
    // API
    fetchStatus: config.FetchStatus.kNoneFetch,
    status: false,
    data: undefined,
    error: undefined,
    currentRequestName: undefined,
    nextScreen: undefined,
})

/* ------------- Reducers ------------- */
export const actionFectching = (state) => {
    // console.log('herer')
    return state.merge({ fetchStatus: config.FetchStatus.kFetching, status: false })
}
export const finishRequest = (state, { status, error, data, requestName, nextScreen = undefined }) => {
    if (false === status) {
        error = Buz.getMsgFromResp(data)
    }
    return state.merge({
        fetchStatus: config.FetchStatus.kFinishFetch,
        status: status,
        error: error,
        data: data,
        currentRequestName: requestName,
        nextScreen: nextScreen,
    })
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.FINISH_REQUEST]: finishRequest,
    [Types.QUERY_PAYMENT]: actionFectching,
    [Types.LOAN_REGISTER]: actionFectching,
    [Types.CREDIT_CARD_REGISTER]: actionFectching,
    [Types.CASHOUT]: actionFectching,
    [Types.PAYMENT_HISTORY]: actionFectching,
})