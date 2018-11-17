import {
  REQUEST_CARS,
  RECEIVE_CARS,
  SEARCH_CARS
} from '../actions/car'

let initialCarsState = {
  isFetching: false,
  items: []
}

function carSearch(state = {}, action) {
  switch (action.type) {
    case SEARCH_CARS:
      return action.search
    default:
      return state
  }
}

function cars(state = initialCarsState, action) {
  switch(action.type) {
    case REQUEST_CARS:
      return Object.assign({}, state, { isFetching: true })
    case RECEIVE_CARS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.cars,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export { cars, carSearch } 