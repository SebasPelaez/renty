import authReducer from './auth'
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { carSearch, cars, carDetails } from './car'

const rootReducer = combineReducers({
  carSearch,
  cars,
  carDetails,
  auth: authReducer,
  firebase: firebaseReducer
 })

export default rootReducer