import {
  REQUEST_CARS,
  RECEIVE_CARS,
  SEARCH_CARS,
  REQUEST_CAR_DETAIL,
  RECEIVE_CAR_DETAIL
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
        items: state.items.concat(action.cars),
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function carDetails(state = {}, action) {
  switch(action.type) {
    case REQUEST_CAR_DETAIL:
      return Object.assign({}, state, {
        [action.rentalId]: {
          [action.carId]: {
            isFetching: true
          }
        }        
      })
    case RECEIVE_CAR_DETAIL:
      return Object.assign({}, state, {
        [action.rentalId]: {
          [action.carId]: {
            details: action.details,
            isFetching: false,
            lastUpdated: action.receivedAt,
          }          
        },        
      })
    default:
      return state
  }
}

export { cars, carDetails, carSearch } 
