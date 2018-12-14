import bookings from './booking'
import { combineReducers } from 'redux'
import { carSearch, cars, carDetails } from './car'
import { alerts } from './alert'
import auth from './auth'

const rootReducer = combineReducers({
  alerts,
  carSearch,
  cars,
  carDetails,
  bookings,
  auth
 })

export default rootReducer