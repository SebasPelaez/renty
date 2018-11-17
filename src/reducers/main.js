import authReducer from './auth'
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { carSearch, cars } from './car'

const rootReducer = combineReducers({
  carSearch,
  cars,
  auth: authReducer,
  firebase: firebaseReducer
 })

export default rootReducer