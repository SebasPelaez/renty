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
      <div className="card-list col-sm-8">
        <div className="container-flex">
          {cars.map(car => 
            <Car key={car.id} {...car}/>
          )}
        </div>
      </div>  
    )
  }
}

export default CarList