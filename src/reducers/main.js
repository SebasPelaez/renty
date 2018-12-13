import authReducer from './auth'
import bookings from '../reducers/booking'
import { combineReducers } from 'redux'
import { carSearch, cars, carDetails } from './car'
import { alerts } from '../reducers/alert'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  alerts,
  carSearch,
  cars,
  carDetails,
  bookings,
  auth: authReducer,
  firebase: firebaseReducer
 })

export default rootReducer