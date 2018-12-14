import { ADD_ALERT } from '../actions/alert'

export function alerts(state = [], action) {
  switch(action.type) {
    case ADD_ALERT:
      return state.concat([action.alert])
    default:
      return state
  }
}