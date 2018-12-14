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

export const bookingsMock = [
  {
    id: 1,
    bookingDate: '3-12-2018',
    pickupDate: '4-12-2018',
    deliverDate: '6-12-2018',
    pickupPlace: 'Calle 16B # 53-25',
    deliverPlace: 'Aeropuerto Internacional José María Córdova',
    car: {
      id: 23,
      thumbnail: 'https://imgd.aeplcdn.com/1280x720/cw/ec/26911/BMW-5-Series-Right-Front-Three-Quarter-101056.jpg?wm=0&q=100',
      price: "120.000",
      rental: {
        id: 'R41L5',
        name: 'Ruby on Rails ❤️'
      }
    }
  },
  {
    id: 2,
    bookingDate: '3-12-2018',
    pickupDate: '4-12-2018',
    deliverDate: '6-12-2018',
    pickupPlace: 'Calle 16B # 53-25',
    deliverPlace: 'Calle 16B # 53-27',
    car: {
      id: 23,
      thumbnail: 'https://imgct2.aeplcdn.com/img/800x600/car-data/big/renault-kwid-image-11460.png?v=31',
      price: "150.000",
      rental: {
        id: 'R41L5',
        name: 'Ruby on Rails ❤️'
      }
    }
  }
]

export const cancelingBookingMock = {
  status: 200,
  data: {
    message: 'Your booking has been cancel with sucess!'
  }
}

export const alertMock =  {
  message: 'We cannot process your request',
  type: 'danger'
}