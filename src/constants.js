export const DEVELOPERS = [
  {name: "Juan C. Morales", position: "CTO"},
  {name: "Juan F. Giraldo", position: "Skater Developer"},
  {name: "Santiago Cadavid", position: "Lost Developer"},
  {name: "Juan S. Peláez", position: "Developer", realSkill: "Backend"},
  {name: "Juan E. Marín", position: "Developer", realSkill: "Angular"}
]

export const CAR_TYPES = [
  {id:"economico",description:"Económico"},
  {id:"compacto",description:"Compacto"},
  {id:"suv",description:"Suv"},
  {id:"lujo",description:"Lujo"},
]

export const PROVIDER_IDS = [967543461, 123456789]

export const PROVIDERS = {
  967543461:'https://renty-web.herokuapp.com',
  123456789:'https://renty-ruby.herokuapp.com'
}
export const BASE_API_URL = ['https://renty-web.herokuapp.com/cars', 'https://renty-ruby.herokuapp.com/cars/search']

// Mocking

export const bookingsMock = [{
  id: 1,
  carId: 23,
  bookingDate: '3-12-2018',
  pickupDate: '4-12-2018',
  deliverDate: '6-12-2018',
  pickupPlace: 'Calle 16B # 53-25',
  deliverPlace: 'Aeropuerto Internacional José María Córdova',
  rentalId: 123456789
}]

export const cancelingBookingMock = {
  status: 200,
  data: {
    message: 'Your booking has been cancel with sucess!'
  }
}