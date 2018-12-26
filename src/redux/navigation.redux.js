import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
    showHideTabMain: ['value'],
})
export const NavigationTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
    showHideTabMain: false
})

/* ------------- Reducers ------------- */
export const showHideTabMain = (state, {value}) => { 
    return state.merge({
        showHideTabMain: value
    })
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.SHOW_HIDE_TAB_MAIN]: showHideTabMain,
})