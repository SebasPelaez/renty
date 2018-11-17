import { combineReducers } from 'redux'
import { carSearch, cars } from './car'

const rootReducer = combineReducers({
  carSearch,
  cars,
 })

export default rootReducer