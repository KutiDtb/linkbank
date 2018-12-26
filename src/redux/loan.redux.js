import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import config from '../config/config'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
    finishRequest: ['status', 'error', 'data', 'requestName', 'nextScreen'],
    getTicket: [],
    getTicketCredit: ['id'],
    buyTicket: ['id', 'ticketType'],
    updateTicketStatus: ['id', 'list', 'status', 'content'],
    getMyTicket: [],
})
export const LoanTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
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
    return state.merge({ fetchStatus: config.FetchStatus.kFetching, status: false })
}
export const finishRequest = (state, { status, error, data, requestName, nextScreen = undefined }) => {
    if (false === status) {
        error = 'Co loi xay ra';
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
    [Types.GET_TICKET]: actionFectching,
    [Types.GET_TICKET_CREDIT]: actionFectching,
    [Types.UPDATE_TICKET_STATUS]: actionFectching,
    [Types.BUY_TICKET]: actionFectching,
    [Types.GET_MY_TICKET]: actionFectching,
})