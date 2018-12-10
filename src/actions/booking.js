import axios from 'axios'
import { PROVIDER_IDS, PROVIDERS } from '../constants'

export const REQUEST_BOOKING_CAR = 'REQUEST_BOOKING_CAR';
export const RECEIVE_BOOKING_CAR = 'RECEIVE_BOOKING_CAR';

function requestBookingCar(booking) {
  return {
    type: REQUEST_BOOKING_CAR,
    booking
  }
}

function receiveBookingCar(data) {
  return {
    type: RECEIVE_BOOKING_CAR,
    data: data
  }
}

export function bookingCar(booking) {
  return dispatch => {
    dispatch(requestBookingCar(booking))
    return axios.post(`${PROVIDERS[booking.rentalId]}/booking`, {booking})
      .then(
        res => dispatch(receiveBookingCar(res.data)),
        error => console.log('An error ocurred. ', error)        
      )
  }
}