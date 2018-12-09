import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import moxios from 'moxios'
import { bookingsMock, cancelingBookingMock } from '../../src/constants'
import {
  REQUEST_BOOKINGS,
  RECEIVE_BOOKINGS,
  RECEIVE_CANCELING_STATUS,
  requestBookings,
  receiveBookings,
  fetchBookings,
  receiveCancelingStatus,
  cancelBooking
} from '../../src/actions/booking'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Booking actions', () => {
  it('should create an action to change isFetching status', () => {
    const expectedAction = {
      type: REQUEST_BOOKINGS
    }
    expect(requestBookings()).toEqual(expectedAction)
  })

  it('should create an action to receive bookings', () => {
    const expectedAction = {
      type: RECEIVE_BOOKINGS,
      bookings: bookingsMock
    }
    expect(receiveBookings(bookingsMock)).toEqual(expectedAction)
  })

  it('should create an action to receive status of booking canceling', () => {
    const expectedAction = {
      type: RECEIVE_CANCELING_STATUS,
      status: cancelingBookingMock.status,
      message: cancelingBookingMock.data.message
    }
    expect(receiveCancelingStatus(cancelingBookingMock)).toEqual(expectedAction)
  })
})

describe('Booking async actions', () => {

  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })

  it('creates REICEIVE_BOOKINGS when fetching bookings has been done', () => {
    
    const providers = ['https://api.test1.com', 'https://api.test1.com']
    const userId = 1209
    const responseAlt = []

    moxios.wait(() => {
      const request1 = moxios.requests.at(0)
      const request2 = moxios.requests.at(1)

      request1.respondWith({
        status: 200,
        response: responseAlt
      })

      request2.respondWith({
        status: 200,
        response: bookingsMock
      })
    })

    const expectedActions = [
      { type: REQUEST_BOOKINGS },
      { type: RECEIVE_BOOKINGS, bookings: bookingsMock.concat(responseAlt) }
    ]
    const store = mockStore({ bookings: {} })

    return store.dispatch(fetchBookings(providers, userId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates RECEIVE_CANCELING_STATUS when cancel booking has been done', () => {
    moxios.wait(() => {
      let request = moxios.requests.mostRecent()
      request.respondWith({
        status: cancelBooking.status,
        response: {
          message: cancelingBookingMock.data.message
        }
      })
    })

    const expectedActions = [{
      type: RECEIVE_CANCELING_STATUS,
      status: cancelBooking.status,
      message: cancelingBookingMock.data.message
    }]
    const store = mockStore({ bookings: {} })

    return store.dispatch(cancelBooking('B01', 'DJ4NG0')).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})