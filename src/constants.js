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

export const PROVIDERS_API_URL = {
  967543461:'https://renty-web.herokuapp.com',
  123456789:'https://renty-ruby.herokuapp.com'
}
export const BASE_API_URL = ['https://renty-web.herokuapp.com/cars', 'https://renty-ruby.herokuapp.com/cars/search']

// For "testing"
export const RENTAL_CARS = [
  {
    id: 1,
    brand: "Dodge",
    model: "Challenger",
    price: "350.000",
    rental: {
      id: "967543461",
      name: "DoD pyRent"
    },
    type: "Musclecar",
    thumbnail: "https://cars.usnews.com/static/images/Auto/izmo/i51570143/2018_dodge_challenger_angularfront.jpg"
  },
  {
    id: 2,
    brand: "Dodge",
    model: "Challenger",
    price: "350.000",
    rental: {
      id: "m0r4l35",
      name: "Morales Corp."
    },
    type: "Musclecar",
    thumbnail: "https://s.aolcdn.com/commerce/autodata/images/CAC50DOC191A021001_2.jpg"
  },
  {
    id: 3,
    brand: "Dodge",
    model: "Challenger",
    price: "350.000",
    rental: {
      id: "m0r4l35",
      name: "Morales Corp."
    },
    type: "Musclecar",
    thumbnail: "https://cars.usnews.com/static/images/Auto/izmo/i51570143/2018_dodge_challenger_angularfront.jpg"
  },
  {
    id: 4,
    brand: "Chevrolet",
    model: "Camaro",
    price: "350.000",
    rental: {
      id: "m0r4l35",
      name: "Morales Corp."
    },
    type: "Musclecar",
    thumbnail: "https://www.chevrolet.com/content/dam/chevrolet/na/us/english/index/vehicles/2019/performance/camaro/colorizer/01-images/2019-camaro-coupe-2ss-gkk-colorizer.jpg?imwidth=1200"
  },
  {
    id: 5,
    brand: "Mercedes",
    model: "Clase A",
    price: "350.000",
    rental: {
      id: "m0r4l35",
      name: "Morales Corp."
    },
    type: "Sport",
    thumbnail: "data:image/jpeg;base64,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"
  },
  {
    id: 6,
    brand: "Mercedes",
    model: "Clase A",
    price: "350.000",
    rental: {
      id: "m0r4l35",
      name: "Morales Corp."
    },
    type: "Sport",
    thumbnail: "https://periodismodelmotor.com/wp-content/uploads/2018/05/nuevo-mercedes-clase-a-2018.jpg"
  },
  {
    id: 7,
    brand: "BMW",
    model: "X3",
    price: "350.000",
    rental: {
      id: "m0r4l35",
      name: "Morales Corp."
    },
    type: "SUV",
    thumbnail: "https://www.cars.com/cstatic-images/car-pictures/xl/usc80bms201a021001.png"
  },
  {
    id: 8,
    brand: "Land Rover",
    model: "Range Rover Evoque",
    price: "350.000",
    rental: {
      id: "m0r4l35",
      name: "Morales Corp."
    },
    type: "SUV",
    thumbnail: "https://res.cloudinary.com/carsguide/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/Land-Rover-Range-Rover-Evoque_0.png"
  }
]
