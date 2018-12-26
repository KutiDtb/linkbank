import { combineReducers } from 'redux'
import configureStore from './store'
import rootSaga from '../saga'

export default () => {
  const rootReducer = combineReducers({
    countRedux: require('./count.redux').reducer,
    navigationRedux: require('./navigation.redux').reducer,
    accountRedux: require('./account.redux').reducer,
    paymentRedux: require('./payment.redux').reducer,
    loanRedux: require('./loan.redux').reducer,
    referalRedux: require('./referal.redux').reducer,
  })

  return configureStore(rootReducer, rootSaga);
}