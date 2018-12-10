import authReducer from './auth'
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'
import { carSearch, cars, carDetails } from './car'
import { bookingCar } from './booking'

const rootReducer = combineReducers({
  carSearch,
  cars,
  carDetails,
  bookingCar,
  auth: authReducer,
  firebase: firebaseReducer
 })

export default rootReducer