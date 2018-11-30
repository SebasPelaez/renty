import axios from 'axios'
import { BASE_API_URL, PROVIDER_IDS } from '../constants'

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

function receiveCarDetail(id, provider, json) {
  console.log('Estes es el JSON:', json)
  return {
    type: RECEIVE_CAR_DETAIL,
    id, provider,
    details: json.data,
    receiveAt: Date.now()
  }
}

function shouldFetchDetails(state, id, provider) {  
  const detailsProvider = state.carDetails[provider];  
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

export function fetchCarDetailsIfNeeded(id, provider) {
  return (dispatch, getState) => {
    if(shouldFetchDetails(getState(), id, provider)) {
      return dispatch(fetchCarDetail(id, provider))
    }    
  }
}

export function fetchCarDetail(id, provider) {    
    return dispatch => {      
      dispatch(requestCarDetail(id, provider))        
      return axios.get(`${BASE_API_URL[provider]}/${id}`)
        .then(
          json => dispatch(receiveCarDetail(id, provider, json)),
          error => console.log('An error ocurred.', error)
        )      
  }  
}

export function fetchCars(search) {
  return dispatch => {
    dispatch(requestCars(search))
    let searchParams = ``
    PROVIDER_IDS.forEach((providerId) => {
      axios.get(`${BASE_API_URL[providerId]}/search?${searchParams}`)
      .then(
        res => dispatch(receiveCars(res.data)),
        error => console.log('An error ocurred.', error)
      )
    })
  }
}