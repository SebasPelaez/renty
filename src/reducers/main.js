import authReducer from './auth'
import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer
})

export default rootReducer