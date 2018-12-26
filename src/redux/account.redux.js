import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import config from '../config/config'
import * as Buz from '../saga/buz/app-buz'
import { Images } from '../theme'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
    finishRequest: ['status', 'error', 'data', 'requestName', 'nextScreen'],
    login: ['phone', 'pass'],
    registerCheckAccount: ['phone', 'name'],
    registerSetPass: ['phone', 'pass', 'name'],
    registerCheckOtp: ['phone', 'otp', 'pass', 'name'],
    logout: [],
    initData: [],
    initDataFinishRequest: ['status', 'error', 'data', 'requestName', 'nextScreen'],
    getInfoTask: [],
    updateInfoOne: ['name', 'dob', 'cmnd', 'gender', 'marryStatus', 'education'],
    updateInfoTwo: ['mainCity', 'mainDistrict', 'mainWard', 'currCity', 'currDistrict', 'currWard', 'liveModal'],
    updateContact: ['contactModal', 'contactName', 'contactPhone'],
    updateChannelPhone: ['phone'],
    verifyChannelPhone: ['otp'],
    consultanceRegister: ['company', 'area', 'modal', 'imgCardEmployee'],
    updateInfoWork: ['jobName', 'companyName', 'companyAddress', 'companyPhone', 'jobPosision', 'jobDuringTime', 'salary', 'receiveSalaryType'],
})
export const AccountTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
    // Logic
    // name: 'PHAN THANH QUANG',
    name: '',
    credit: 0,
    avatar: Images.awatar.default,
    level: 0,
    id: '',
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
export const login = (state) => {
    return state.merge({ fetchStatus: config.FetchStatus.kFetching, status: false })
}
export const finishRequest = (state, { status, error, data, requestName, nextScreen = undefined }) => {
    if (false === status) {
        error = Buz.getMsgFromResp(data);
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
export const initDataFinishRequest = (state, { status, error, data, requestName, nextScreen = undefined }) => {
    var name = ''
    var credit = 0
    var avatar = Images.awatar.default
    var level = 1
    var id = ''
    if (true === status) {
        name = data.name
        credit = data.credit
        level = data.level
        id = data.id
        avatar = data.avatar
    }
    return state.merge({
        fetchStatus: config.FetchStatus.kFinishFetch,
        status: status,
        error: error,
        data: data,
        currentRequestName: requestName,
        nextScreen: nextScreen,

        name,
        credit,
        avatar,
        level,
        id,
    })
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.LOGIN]: login,
    [Types.FINISH_REQUEST]: finishRequest,
    [Types.LOGOUT]: actionFectching,
    [Types.INIT_DATA_FINISH_REQUEST]: initDataFinishRequest,
    [Types.LOGIN]: actionFectching,
    [Types.REGISTER_CHECK_ACCOUNT]: actionFectching,
    [Types.REGISTER_SET_PASS]: actionFectching,
    [Types.REGISTER_CHECK_OTP]: actionFectching,
    [Types.GET_INFO_TASK]: actionFectching,
    [Types.UPDATE_INFO_ONE]: actionFectching,
    [Types.UPDATE_INFO_TWO]: actionFectching,
    [Types.UPDATE_CONTACT]: actionFectching,
    [Types.UPDATE_CHANNEL_PHONE]: actionFectching,
    [Types.VERIFY_CHANNEL_PHONE]: actionFectching,
    [Types.CONSULTANCE_REGISTER]: actionFectching,
    [Types.UPDATE_INFO_WORK]: actionFectching,
})