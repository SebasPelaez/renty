import React from 'react'
import Car from './Car'

const CarList = ({ cars, isFetching }) => {
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
      <ul className="car-list">
        {cars.map(car => 
          <Car
            key={car.id}
            {...car}
          />
        )}
      </ul>
    )
  }
}

export default ProductList