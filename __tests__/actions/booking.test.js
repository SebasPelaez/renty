import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import moxios from 'moxios'
import { normalize } from 'normalizr'
import { bookingsMock } from '../../src/constants'
import { ADD_ALERT } from '../../src/actions/alert'
import * as actions from '../../src/actions/booking'
import * as schema from '../../src/actions/schema'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Booking actions', () => {
  it('should create an action to change isFetching status', () => {
    const expectedAction = {
      type: actions.REQUEST_BOOKINGS
    }
    expect(actions.requestBookings()).toEqual(expectedAction)
  })

  it('should create an action to receive bookings', () => {
    const expectedAction = {
      type: actions.RECEIVE_BOOKINGS,
      bookings: normalize(bookingsMock, schema.arrayOfBookings).entities.bookings
    }
    expect(actions.receiveBookings(bookingsMock)).toEqual(expectedAction)
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

    const store = mockStore({ bookings: {} })
    const normalizedData = normalize(bookingsMock.concat(responseAlt), schema.arrayOfBookings)
    const expectedActions = [
      { type: actions.REQUEST_BOOKINGS },
      { type: actions.RECEIVE_BOOKINGS, bookings: normalizedData.entities.bookings }
    ]

    return store.dispatch(actions.fetchBookings(providers, userId)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('creates REMOVE_BOOKING when cancel booking has been done with success', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.respondWith({
        status: 200,
        response: []
      })
    })
    
    const store = mockStore({ alerts: [], bookings: {} })
    const bookingIdMock = '123'
    const expectedActions = [{
      type: actions.REMOVE_BOOKING,
      bookingId: bookingIdMock
    }]

    return store.dispatch(actions.cancelBooking(bookingIdMock, 'DJ4NG0'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('creates REMOVE_BOOKING when cancel booking has been done with failure', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent()
      request.reject({
        status: 404,
        response: {
          data: []
        }
      })
    })

    const store = mockStore({ alerts: [], bookings: {} })
    const alertMock = {
      message: 'We cannot process your request',
      type: 'danger'
    }
    const expectedActions = [{
      type: ADD_ALERT,
      alert: alertMock
    }]

    return store.dispatch(actions.cancelBooking('123', 'DJ4NG0'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })
  })
})