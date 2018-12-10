import { REQUEST_BOOKING_CAR, RECEIVE_BOOKING_CAR } from '../actions/booking'

function bookingCar(state = {}, action) {
  switch (action.type) {
    case REQUEST_BOOKING_CAR:
      return Object.assign({}, state, {
        [action.rentalId]: {
          [action.carId]: {
            isBooking: true
          }
        }
      })
    case RECEIVE_BOOKING_CAR:
      return Object.assign({}, state, {
        [action.rentalId]: {
          [action.carId]: {
            data: action.data,
            isBooking: false
          }
        }
      })
    default:
      return state
  }
}

export { bookingCar }