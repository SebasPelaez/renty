import {
  REQUEST_BOOKINGS,
  RECEIVE_BOOKINGS
} from '../actions/booking'

const initialBookingsState = {
  isFetching: false,
  items: []
}

function bookings(state = initialBookingsState, action) {
  switch(action.type) {
    case REQUEST_BOOKINGS:
      return Object.assign({}, state, { isFetching: true })
    case RECEIVE_BOOKINGS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.bookings
      })
    default:
      return state
  }
}

export default bookings