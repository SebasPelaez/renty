import React from 'react'
import Car from './Car'
import './Car.scss'

const CarList = ({ cars, isFetching }) => {
    cars = [{
        'id':1,
        'brand':"Toyota",
        'thumbnail':"http://static.carroya.com/vehiculos/1798530/1798530_1_w.jpg",
        'price':30000,
        'type': "pick-up",
        'model':"2015",
        'rental':{'id':1,'name':"Renta autos"}
    },
    {
        'id':2,
        'brand':"Toyota",
        'thumbnail':"http://static.carroya.com/vehiculos/1798530/1798530_1_w.jpg",
        'price':30000,
        'type': "pick-up",
        'model':"2015",
        'rental':{'id':1,'name':"Renta autos"}
    },
    {
        'id':3,
        'brand':"Toyota",
        'thumbnail':"http://static.carroya.com/vehiculos/1798530/1798530_1_w.jpg",
        'price':30000,
        'type': "pick-up",
        'model':"2015",
        'rental':{'id':1,'name':"Renta autos"}
    },
    {
        'id':4,
        'brand':"Toyota",
        'thumbnail':"http://static.carroya.com/vehiculos/1798530/1798530_1_w.jpg",
        'price':30000,
        'type': "pick-up",
        'model':"2015",
        'rental':{'id':1,'name':"Renta autos"}
    },
    {
        'id':5,
        'brand':"Toyota",
        'thumbnail':"http://static.carroya.com/vehiculos/1798530/1798530_1_w.jpg",
        'price':30000,
        'type': "pick-up",
        'model':"2015",
        'rental':{'id':1,'name':"Renta autos"}
    }];
  if (isFetching) {
    return <span> cargando...</span>
  } else if (cars.length === 0) {
    return(
      <p>
        Nothing to show!
        <br/>
        Try With another word c:
      </p>
      
    )
  } else {
    return(
    <div className="container-flex">
        {cars.map(car => 
            <Car
            key={car.id}
            {...car}
          />
        )}
        </div>
    )
  }
}

export default CarList