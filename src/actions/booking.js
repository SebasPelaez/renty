import axios from 'axios'
import { PROVIDERS } from '../constants'

// Action Types
export const REQUEST_BOOKINGS = 'REQUEST_BOOKINGS'
export const RECEIVE_BOOKINGS =  'RECEIVE_BOOKINGS'
export const CANCEL_BOOKING = 'CANCEL_BOOKING'
export const RECEIVE_CANCELING_STATUS = 'RECEIVE_CANCELING_STATUS'

export const requestBookings = () => ({
  type: REQUEST_BOOKINGS
})

export const receiveBookings = bookings => ({
  type: RECEIVE_BOOKINGS,
  bookings
})

export const receiveCancelingStatus = response => ({
  type: RECEIVE_CANCELING_STATUS,
  status: response.status,
  message: response.data.message
})

export function cancelBooking(bookingId, rentalId) {
  return dispatch => {
    const URL = `${PROVIDERS[rentalId]}/bookings/${bookingId}/cancel`
    return axios.post(URL, { userId: "..." })
      .then(res => dispatch(receiveCancelingStatus(res)))
  }
}

export function fetchBookings(providers = Object.values(PROVIDERS), userId = null) {
  return dispatch => {
    dispatch(requestBookings())

    const requests = providers.map(url => axios.get(`${url}/bookings/reserver=${userId}`))
    const responseReducer = (accumulator, response) => accumulator.concat(response.data)

    return axios.all(requests)
      .then(axios.spread((...responses) => {
        let bookings = responses.reduce(responseReducer, [])
        dispatch(receiveBookings(bookings))
      }))
  }
}