import bookings from '../../src/reducers/booking'
import { bookingsMock } from '../../src/constants'
import {
  REQUEST_BOOKINGS,
  RECEIVE_BOOKINGS
} from '../../src/actions/booking'

describe('Bookings reducer', () => {
  it('should return the initial state', () => {
    expect(bookings(undefined, {})).toEqual({
      isFetching: false,
      items: []
    })
  })

  it('should handle REQUEST_BOOKINGS', () => {
    expect(bookings(undefined, { type: REQUEST_BOOKINGS })).toEqual({
      isFetching: true,
      items: []
    })
  })

  it('should handle RECEIVE_BOOKINGS', () => {
    const actionReceived = {
      type: RECEIVE_BOOKINGS,
      bookings: bookingsMock
    }
    expect(bookings(undefined, actionReceived)).toEqual({
      isFetching: false,
      items: bookingsMock
    })
  })
})