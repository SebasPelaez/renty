import axios from 'axios'
import { PROVIDER_IDS, PROVIDERS_API_URL } from '../constants'

export const REQUEST_CARS = 'REQUEST_CARS'
export const RECEIVE_CARS = 'RECEIVE_CARS'
export const SEARCH_CARS = 'SEARCH_CARS'
export const REQUEST_CAR_DETAIL = 'REQUEST_CAR_DETAIL'
export const RECEIVE_CAR_DETAIL = 'RECEIVE_CAR_DETAIL'

function requestCars(search) {
  return {
    type: REQUEST_CARS,
    search
  }
}

function receiveCars(data) {
  return {
    type: RECEIVE_CARS,
    cars: data,
    receivedAt: Date.now()
  }
}

function searchCars(search) {
  return {
    type: SEARCH_CARS,
    search
  }
}

function requestCarDetail(id, provider) {
  return {
    type: REQUEST_CAR_DETAIL,
    id, provider
  }
}

function receiveCarDetails(carId, rentalId, details) {
  return {
    type: RECEIVE_CAR_DETAIL,
    receiveAt: Date.now(),
    carId,
    rentalId,
    details
  }
}

function shouldFetchDetails(state, id, provider) {

  const detailsProvider = state.carDetails[provider]

  if(!detailsProvider) {
    return true;    
  } else {
    if(!detailsProvider[id]) {
      return true;
    } else if(detailsProvider[id].isFetching) {
      return false;
    }
  }  
}

function fetchCarDetails(carId, rentalId) {    
  return dispatch => {
    dispatch(requestCarDetail(carId, rentalId))
    return axios.get(`${PROVIDERS_API_URL[rentalId]}/cars/${carId}`)
      .then(
        res => dispatch(receiveCarDetails(carId, rentalId, res.data)),
        error => console.log('An error ocurred.', error)
      )
  }      
}

export function fetchCarDetailsIfNeeded(carId, rentalId) {
  return (dispatch, getState) => {
    if(shouldFetchDetails(getState(), carId, rentalId)) {
      dispatch(fetchCarDetails(carId, rentalId))
    }    
  }
}

export function fetchCars(search) {
  return dispatch => {
    dispatch(requestCars(search))
    let searchParams = ``
    PROVIDER_IDS.forEach(providerId => {
      axios.get(`${PROVIDERS_API_URL[providerId]}/cars/search?${searchParams}`)
      .then(
        res => dispatch(receiveCars(res.data)),
        error => console.log('An error ocurred.', error)
      )
    })
  }
}

export { receiveCars }