import axios from 'axios'
import { BASE_URL } from '../costants'

export const REQUEST_CARS = 'REQUEST_CARS'
export const RECEIVE_CARS = 'RECEIVE_CARS'
export const SEARCH_CARS = 'SEARCH_CARS'

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

export function fetchCars(search) {
  return dispatch => {
    dispatch(requestCars(search))
    
    let searchParams = `from=${search.from}&to=${search.to}&type=${seach.type}&pickup=${search.pickup}`

    return axios.get(`${BASE_API_URL}/cars/search?${searchParams}`)
      .then(
        res => dispatch(receiveCars(res.data)),
        error => console.log('An error ocurred.', error)
      )
  }
}