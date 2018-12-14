import React from 'react'
import Car from './Car'
import './Car.scss'
import EmptyState from '../../assets/empty-state.png'

const CarList = ({ cars, isFetching, dispatch }) => {

  if (isFetching) {
    return <span> Loading...</span>
  } else if (cars.length === 0) {
    return(
      <div className="nothing-to-show">
        <img src={EmptyState} alt=""/>
        <h3>The aren't records</h3>
        <p>
          Try use another filter options!
        </p>
      </div>
    )
  } else {
    return(
      <div className="card-list col-sm-12">
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