import axios from 'axios'
import { BASE_API_URL } from '../constants'

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

function receiveCarDetail(id, json) {
  return {
    type: RECEIVE_CAR_DETAIL,
    id,
    details: json.data,
    receiveAt: Date.now()
  }
}

export function fetchCarDetail(id, provider) {  
  let url;
  if (carDetails.id != null || carDetails.id.isFetching == true) {  //¿cómo accedo al state desde acá?    
    return dispatch => {
      dispatch(requestCarDetail(id, provider))
      if(provider === 'Ruby') {
        url = BASE_API_URL[1];
      } else {
        url = BASE_API_URL[0];
      }
      console.log(url);
      return axios.get(`${url}/cars/${id}`)
        .then(
          res => {
            console.log(res.data)
            res.json()})
            .then(json => dispatch(receiveCarDetail(id, json))),
          error => console.log('An error ocurred.', error)      
    }
  }  
}

export function fetchCars(search) {
  return dispatch => {
    dispatch(requestCars(search))
    let searchParams = ``
    BASE_API_URL.forEach((url) => {
      axios.get(`${url}/search?${searchParams}`)
      .then(
        res => dispatch(receiveCars(res.data)),
        error => console.log('An error ocurred.', error)
      )
    })
  }
}