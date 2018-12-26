import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
    increase: [],
    decrease: []
})
export const CountTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
    value: 0
})

/* ------------- Reducers ------------- */
export const increase = (state) => { 
    return state.merge({
        value: state.value + 1
    })
}
export const decrease = (state) => { 
    return state.merge({
        value: state.value - 1
    })
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
    [Types.INCREASE]: increase,
    [Types.DECREASE]: decrease,
})