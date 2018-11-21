import React from 'react'
import Car from './Car'
import './Car.scss'

const CarList = ({ cars, isFetching }) => {
  if (isFetching) {
    return <span> cargando...</span>
  } else if (cars.length === 0) {
    return(
      <p>Nothing to show!<br/>
        Try With another word c:
      </p>
    )
  } else {
    return(
      <React.Fragment>
        { cars.map(car => <Car key={car.id} {...car} /> ) }
      </React.Fragment>
    )
  }
}

export default CarList