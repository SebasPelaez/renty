import axios from 'axios'
import { normalize } from 'normalizr'
import * as schema from './schema'
import { PROVIDERS } from '../constants'
import { addAlert } from '../actions/alert'

// Action Types
export const REQUEST_BOOKINGS = 'REQUEST_BOOKINGS'
export const RECEIVE_BOOKINGS =  'RECEIVE_BOOKINGS'
export const CANCEL_BOOKING = 'CANCEL_BOOKING'
export const REMOVE_BOOKING = 'REMOVE_BOOKING'

export const requestBookings = () => ({
  type: REQUEST_BOOKINGS
})

export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings: normalize(bookings, schema.arrayOfBookings).entities.bookings
})

// Removes a booking from state
export const removeBooking = bookingId => ({
  type: REMOVE_BOOKING,
  bookingId
})

export function cancelBooking(bookingId, rentalId) {
  return dispatch => {
    const requestData = {
      token: '',
      bookingId: bookingId
    }
    return axios.delete(`${PROVIDERS[rentalId]}/booking/`, requestData)
      .then(() => dispatch(removeBooking(bookingId)))
      .catch(() => dispatch(addAlert('We cannot process your request')))
  }
}

export function fetchBookings(providers = Object.values(PROVIDERS), userId = null) {
  return dispatch => {
    dispatch(requestBookings())

    const requests = providers.map(url => axios.get(`${url}/booking/${userId}`))
    const responseReducer = (accumulator, response) => accumulator.concat(response.data)

    return axios.all(requests)
      .then(axios.spread((...responses) => {
        let bookings = responses.reduce(responseReducer, [])
        dispatch(receiveBookings(bookings))
      }))
  }
}